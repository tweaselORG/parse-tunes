import fetch from 'cross-fetch';
import type { UnionToIntersection } from 'type-fest';
import type { AllowedLanguagesPerCountryInMediaApi, GenreName, MediaApiCountry } from '../common/consts';

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

/**
 * The attributes (fields) that can be requested from the app details endpoint.
 *
 * No publicly available documentation exists for these. In most cases, it is quite obvious what they mean from the name
 * and/or returned data.
 *
 * @remarks
 * Compiled through trial and error and from looking at requests made by the App Store app.
 *
 * @see {@link https://github.com/tweaselORG/parse-tunes/issues/6}
 */
export const appDetailsAvailableAttributes = [
    'artistName',
    'artwork',
    'bundleId',
    'chartPositions',
    'contentRatingsBySystem',
    'copyright',
    'customArtwork',
    'customScreenshotsByType',
    'customVideoPreviewsByType',
    'description',
    'deviceFamilies',
    'editorialArtwork',
    'eula',
    'externalVersionId',
    'familyShareEnabledDate',
    'fileSizeByDevice',
    'genreDisplayName',
    'hasEula',
    'hasFamilyShareableInAppPurchases',
    'hasInAppPurchases',
    'hasMessagesExtension',
    'hasPrivacyPolicyText',
    'hasSafariExtension',
    'is32bitOnly',
    'isAppleWatchSupported',
    'isDeliveredInIOSAppForWatchOS',
    'isFirstPartyHideableApp',
    'isGameCenterEnabled',
    'isHiddenFromSpringboard',
    'isIOSBinaryMacOSCompatible',
    'isPreorder',
    'isSiriSupported',
    'isStandaloneForWatchOS',
    'isStandaloneWithCompanionForWatchOS',
    'languageList',
    'maxPlayers',
    'messagesScreenshots',
    'minimumMacOSVersion',
    'minimumOSVersion',
    'minPlayers',
    'name',
    'offers',
    'privacy',
    'privacyDetails',
    'privacyPolicyText',
    'privacyPolicyUrl',
    'releaseDate',
    'remoteControllerRequirement',
    'requiredCapabilities',
    'requirementsByDeviceFamily',
    'requirementsString',
    'requires32bit',
    'requiresGameController',
    'reviewsRestricted',
    'seller',
    'sellerLabel',
    'supportedLocales',
    'supportsArcade',
    'supportsFunCamera',
    'supportsGameController',
    'supportsPassbook',
    'supportURLForLanguage',
    'url',
    'userRating',
    'usesLocationBackgroundMode',
    'versionHistory',
    'websiteUrl',
] as const;
/** An attribute (field) that can be requested from the app details endpoint. */
export type AppDetailsAvailableAttribute = (typeof appDetailsAvailableAttributes)[number];

// Annoyingly, the API uses different platform names in the request and in the response, see
// https://github.com/tweaselORG/parse-tunes/issues/6#issuecomment-1400240548.
/**
 * A platform that can appear in the `platform` or `additionalPlatforms` parameter of a request to the app details
 * endpoint.
 */
export type AppDetailsPlatformInRequest = 'web' | 'iphone' | 'appletv' | 'ipad' | 'mac' | 'watch';
/**
 * A type mapping from the platforms that can appear in a request to the app details endpoint to the key of the
 * `platformAttributes` object in the response that they cause to be included.
 *
 * @see {@link https://github.com/tweaselORG/parse-tunes/issues/6#issuecomment-1400240548}
 */
export type AppDetailsPlatformInResponseForRequest = {
    iphone: 'ios';
    ipad: 'ios';
    watch: 'ios';
    appletv: 'appletvos';
    mac: 'osx';
    web: undefined;
};
/**
 * A platform that can appear in the response from the app details endpoint as a key of the `platformAttributes` object.
 *
 * @see {@link https://github.com/tweaselORG/parse-tunes/issues/6#issuecomment-1400240548}
 */
export type AppDetailsPlatformInResponse =
    AppDetailsPlatformInResponseForRequest[keyof AppDetailsPlatformInResponseForRequest];

/** Small helper for response fragments that are listed under `platformAttributes`. */
export type PlatformAttributes<Platforms extends AppDetailsPlatformInResponse, ResponseFragment> = {
    platformAttributes: {
        [key in Exclude<Platforms, undefined>]?: ResponseFragment;
    };
};
/** An artwork image in a response fragment. */
export type AppDetailsArtwork = {
    width: number;
    height: number;
    url: string;
    bgColor: string;
    textColor1: string;
    textColor2: string;
    textColor3: string;
    textColor4: string;
};
/** A list of privacy types as declared in a privacy label, in short format as returned for the `privacy` attribute. */
export type PrivacyTypesShort = {
    privacyType: string;
    identifier: 'DATA_NOT_COLLECTED' | 'DATA_USED_TO_TRACK_YOU' | 'DATA_LINKED_TO_YOU' | 'DATA_NOT_LINKED_TO_YOU';
    description: string;
    dataCategories: {
        dataCategory: string;
        identifier: string;
    }[];
}[];
/**
 * A list of privacy types as declared in a privacy label, in long format as returned for the `privacyDetails`
 * attribute.
 */
export type PrivacyTypes = {
    privacyType: string;
    identifier: 'DATA_NOT_COLLECTED' | 'DATA_USED_TO_TRACK_YOU' | 'DATA_LINKED_TO_YOU' | 'DATA_NOT_LINKED_TO_YOU';
    description: string;
    dataCategories: {
        dataCategory: string;
        identifier: string;
        dataTypes: string[];
    }[];
    purposes: {
        purpose: string;
        identifier: string;
        dataCategories: {
            dataCategory: string;
            identifier: string;
            dataTypes: string[];
        }[];
    }[];
}[];
/** Type mapping from the possible attributes to the additional data they add in the response. */
export type AppDetailsResponseFragmentPerAttribute<Platforms extends AppDetailsPlatformInResponse> = {
    artistName: { artistName: string };
    artwork: PlatformAttributes<Platforms, { artwork: AppDetailsArtwork }>;
    bundleId: PlatformAttributes<Platforms, { bundleId: string }>;
    chartPositions: {
        chartPositions?: {
            [store in 'appStore' | 'messages']?: {
                position: string;
                genreName: string;
                genre: number;
                chart: string;
                chartLink: string;
            };
        };
    };
    contentRatingsBySystem: {
        contentRatingsBySystem: { appsApple: { name: string; value: number; rank: number; advisories?: string[] } };
    };
    copyright: PlatformAttributes<Platforms, { copyright: string }>;
    customArtwork: PlatformAttributes<
        Platforms,
        { customAttributes: { default: { default: { customArtwork: AppDetailsArtwork } } } }
    >;
    customScreenshotsByType: PlatformAttributes<
        Platforms,
        {
            customAttributes: {
                default: { default: { customScreenshotsByType: { [device: string]: AppDetailsArtwork[] } } };
            };
        }
    >;
    customVideoPreviewsByType: PlatformAttributes<
        Platforms,
        {
            customAttributes: {
                default: {
                    default: {
                        customVideoPreviewsByType: {
                            [device: string]: { previewFrame: AppDetailsArtwork; video: string }[];
                        };
                    };
                };
            };
        }
    >;
    description: PlatformAttributes<Platforms, { description: { standard: string } }>;
    deviceFamilies: { deviceFamilies: string[] };
    editorialArtwork: PlatformAttributes<Platforms, { editorialArtwork: Record<string, AppDetailsArtwork> }>;
    eula: { eula: string };
    externalVersionId: PlatformAttributes<Platforms, { externalVersionId: number }>;
    familyShareEnabledDate: { familyShareEnabledDate: string };
    fileSizeByDevice: { fileSizeByDevice: { [device: string]: number } };
    genreDisplayName: { genreDisplayName: GenreName };
    hasEula: { hasEula: boolean };
    hasFamilyShareableInAppPurchases: PlatformAttributes<Platforms, { hasFamilyShareableInAppPurchases: boolean }>;
    hasInAppPurchases: PlatformAttributes<Platforms, { hasInAppPurchases: boolean }>;
    hasMessagesExtension: PlatformAttributes<Platforms, { hasMessagesExtension: boolean }>;
    hasPrivacyPolicyText: PlatformAttributes<Platforms, { hasPrivacyPolicyText: boolean }>;
    hasSafariExtension: PlatformAttributes<Platforms, { hasSafariExtension: boolean }>;
    is32bitOnly: PlatformAttributes<Platforms, { is32bitOnly: boolean }>;
    isAppleWatchSupported: PlatformAttributes<Platforms, { isAppleWatchSupported: boolean }>;
    isDeliveredInIOSAppForWatchOS: PlatformAttributes<Platforms, { isDeliveredInIOSAppForWatchOS: boolean }>;
    isFirstPartyHideableApp: { isFirstPartyHideableApp: boolean };
    isGameCenterEnabled: PlatformAttributes<Platforms, { isGameCenterEnabled: boolean }>;
    isHiddenFromSpringboard: PlatformAttributes<Platforms, { isHiddenFromSpringboard: boolean }>;
    isIOSBinaryMacOSCompatible: { isIOSBinaryMacOSCompatible: boolean };
    isPreorder: { isPreorder: boolean };
    isSiriSupported: PlatformAttributes<Platforms, { isSiriSupported: boolean }>;
    isStandaloneForWatchOS: PlatformAttributes<Platforms, { isStandaloneForWatchOS: boolean }>;
    isStandaloneWithCompanionForWatchOS: PlatformAttributes<
        Platforms,
        { isStandaloneWithCompanionForWatchOS: boolean }
    >;
    languageList: PlatformAttributes<Platforms, { languageList: string[] }>;
    maxPlayers: PlatformAttributes<Platforms, { maxPlayers: number }>;
    messagesScreenshots: PlatformAttributes<
        Platforms,
        { messagesScreenshots?: { [device: string]: AppDetailsArtwork } }
    >;
    minimumMacOSVersion: PlatformAttributes<Platforms, { minimumMacOSVersion: string }>;
    minimumOSVersion: PlatformAttributes<Platforms, { minimumOSVersion: string }>;
    minPlayers: PlatformAttributes<Platforms, { minPlayers: number }>;
    name: { name: string };
    offers: PlatformAttributes<
        Platforms,
        {
            offers: {
                buyParams: string;
                type: string;
                priceFormatted: string;
                price: number;
                currencyCode: string;
                assets: { flavor: string; size: number }[];
            }[];
        }
    >;
    privacy: { privacy: { privacyTypes: PrivacyTypesShort } };
    privacyDetails: { privacyDetails: { managePrivacyChoicesUrl: string | null; privacyTypes: PrivacyTypes } };
    privacyPolicyText: PlatformAttributes<Platforms, { privacyPolicyText: string }>;
    privacyPolicyUrl: PlatformAttributes<Platforms, { privacyPolicyUrl: string }>;
    releaseDate: PlatformAttributes<Platforms, { releaseDate: string }>;
    remoteControllerRequirement: PlatformAttributes<Platforms, { remoteControllerRequirement: string }>;
    requiredCapabilities: PlatformAttributes<Platforms, { requiredCapabilities: string }>;
    requirementsByDeviceFamily: {
        requirementsByDeviceFamily: { [device: string]: { deviceFamily: string; requirementsString: string } };
    };
    requirementsString: PlatformAttributes<Platforms, { requirementsString: string }>;
    requires32bit: PlatformAttributes<Platforms, { requires32bit: boolean }>;
    requiresGameController: PlatformAttributes<Platforms, { requiresGameController: boolean }>;
    reviewsRestricted: { reviewsRestricted: boolean };
    seller: PlatformAttributes<Platforms, { seller: string }>;
    sellerLabel: { sellerLabel: string };
    supportedLocales: PlatformAttributes<Platforms, { supportedLocales: { name: string; tag: string }[] }>;
    supportsArcade: { supportsArcade: boolean };
    supportsFunCamera: PlatformAttributes<Platforms, { supportsFunCamera: boolean }>;
    supportsGameController: PlatformAttributes<Platforms, { supportsGameController: boolean }>;
    supportsPassbook: PlatformAttributes<Platforms, { supportsPassbook: boolean }>;
    supportURLForLanguage: PlatformAttributes<Platforms, { supportURLForLanguage: string }>;
    url: { url: string };
    userRating: {
        userRating: {
            value: number;
            ratingCount: number;
            ratingCountList: [number, number, number, number, number];
            ariaLabelForRating: string;
        };
    };
    usesLocationBackgroundMode: { usesLocationBackgroundMode: boolean };
    versionHistory: PlatformAttributes<
        Platforms,
        {
            versionHistory: {
                versionDisplay: string;
                releaseNotes: string;
                releaseDate: string;
                releaseTimestamp: string;
            }[];
        }
    >;
    websiteUrl: PlatformAttributes<Platforms, { websiteUrl: string }>;
};

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
