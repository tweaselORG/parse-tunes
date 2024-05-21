import fetch from 'cross-fetch';
import type { UnionToIntersection } from 'type-fest';
import type {
    AppDetailsAvailableAttribute,
    AppDetailsPlatformInRequest,
    AppDetailsPlatformInResponse,
    AppDetailsPlatformInResponseForRequest,
    AppDetailsResponseFragmentPerAttribute,
} from '../common/app-meta';
import type { AllowedLanguagesPerCountryInMediaApi, MediaApiCountry } from '../common/consts';

/**
 * List of URLs to pages on the App Store that contain a token for Apple's media API (amp-api.apps.apple.com) in their
 * response.
 *
 * @remarks
 * These are in the order of their response size. We'll try the smallest one first.
 */
export const appDetailsTokenUrls = [
    'https://apps.apple.com/404',
    'https://apps.apple.com/story/id1538632801',
    'https://apps.apple.com/us/app/facebook/id284882215',
] as const;

/**
 * Fetch a token for Apple's media API (amp-api.apps.apple.com), to be used with the {@link fetchAppDetails} function.
 * The token can be used many times (until it expires).
 *
 * @remarks
 * The token is extracted from the HTML of an App Store page (see: https://github.com/tweaselORG/parse-tunes/issues/6).
 *
 * The token appears to be the same for everyone, and changes from time to time (around every four months). It is a JWT,
 * which you can parse to get the expiration date.
 * @returns The token.
 */
export async function fetchMediaApiToken(): Promise<string> {
    let lastError: Error | undefined;

    for (const url of appDetailsTokenUrls) {
        try {
            const html = await fetch(url).then((r) => r.text());
            // I know, I know. Thou shalt not parse HTML using regex. But the page seems to be pretty stable, and it
            // doesn't seem worth it to pull in an HTML parser just for this. *fingerscrossed*
            const metaContent = html.match(/<meta name="web-experience-app\/config\/environment" content="(.+?)">/);
            if (!metaContent?.[1]) continue;

            const config = JSON.parse(decodeURIComponent(metaContent[1]));
            if (config.MEDIA_API.token) return config.MEDIA_API.token;
        } catch (e) {
            if (e instanceof Error) lastError = e;
        }
    }

    throw new Error('Failed to fetch token for media API.', { cause: lastError });
}

/** Parameters for an app details request. */
export type AppDetailsRequest<
    Country extends MediaApiCountry,
    Platforms extends AppDetailsPlatformInRequest[],
    Attributes extends AppDetailsAvailableAttribute[]
> = {
    /** The numerical ID of the app for which to fetch the details. */
    appId: number;
    /**
     * The platform(s) for which to fetch details about the requested app. Will fetch details for all platforms if this
     * parameter isn't specified.
     */
    platforms?: Platforms;

    /** The attributes to fetch. See {@link appDetailsAvailableAttributes} for a list. */
    attributes: Attributes;

    /** Which country's App Store to use. */
    country: Country;
    /** The language in which to fetch the details. */
    language: AllowedLanguagesPerCountryInMediaApi[Country];

    /**
     * The token to use for authentication.
     *
     * If you don't provide one, it will be fetched automatically. However, if you want to fetch the details for
     * multiple apps, it's recommended to fetch the token once and then pass it to all the requests instead of
     * re-fetching the token for each request. You can use {@link fetchMediaApiToken} to fetch a token beforehand.
     */
    token?: string;
};

export const appDetailsApiUrl = <
    Country extends MediaApiCountry,
    Platforms extends AppDetailsPlatformInRequest[],
    Attributes extends AppDetailsAvailableAttribute[]
>(
    request: AppDetailsRequest<Country, Platforms, Attributes>
) =>
    `https://amp-api.apps.apple.com/v1/catalog/${request.country}/apps/${request.appId}?platform=${
        request.platforms?.[0] || 'web'
    }&additionalPlatforms=${
        request.platforms ? request.platforms?.slice(1).join(',') : 'iphone,appletv,ipad,mac,watch'
    }&l=${request.language}&fields=${request.attributes.join(',')}`;

/**
 * The response from the app details API, typed according to the attributes specified in the request.
 *
 * Note: There is no publicly available documentation for the API responses. The types were extrapolated from a few
 * tested responses. They may not be 100 % accurate.
 */
export type AppDetailsResponse<
    Platforms extends AppDetailsPlatformInResponse,
    Attributes extends AppDetailsAvailableAttribute
> = UnionToIntersection<AppDetailsResponseFragmentPerAttribute<Platforms>[Attributes]>;

/**
 * Fetch the details for an app from the App Store. You can request a lot of different information about the app. The
 * `attributes` parameter specifies which attributes to fetch. See {@link appDetailsAvailableAttributes} for a list of
 * all available attributes.
 *
 * @param request The request parameters.
 *
 * @returns The app details, typed according to the attributes you specified.
 */
export async function fetchAppDetails<
    Country extends MediaApiCountry,
    Platforms extends AppDetailsPlatformInRequest[],
    Attributes extends AppDetailsAvailableAttribute[]
>(
    request: AppDetailsRequest<Country, Platforms, Attributes>
): Promise<AppDetailsResponse<AppDetailsPlatformInResponseForRequest[Platforms[number]], Attributes[number]>> {
    const token = request.token || (await fetchMediaApiToken());

    const res = await fetch(appDetailsApiUrl(request), {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            Origin: 'https://apps.apple.com',
        },
    })
        .then((response) => response.text())
        .then((r) => JSON.parse(r.trim()));

    return res.data[0].attributes;
}
