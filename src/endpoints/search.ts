import fetch from 'cross-fetch';
import type { UnionToIntersection } from 'type-fest';
import type {
    AppDetailsPlatformInRequest,
    AppDetailsPlatformInResponse,
    AppDetailsPlatformInResponseForRequest,
    AppDetailsResponseFragmentPerAttribute,
} from '../common/app-meta';
import type { AllowedLanguagesPerCountryInMediaApi, MediaApiCountry } from '../common/consts';

/** Parameters for an app search request. */
export type AppSearchRequest<Country extends MediaApiCountry, Platforms extends AppDetailsPlatformInRequest[]> = {
    /** The term to search for. */
    searchTerm: string;

    /**
     * The platform(s) for which to fetch details about the found apps. Will fetch details for all platforms if this
     * parameter isn't specified.
     */
    platforms?: Platforms;

    /** Which country's App Store to use. */
    country: Country;
    /** The language in which to fetch the app details. */
    language: AllowedLanguagesPerCountryInMediaApi[Country];
};

export const appSearchApiUrl = <Country extends MediaApiCountry, Platforms extends AppDetailsPlatformInRequest[]>(
    request: AppSearchRequest<Country, Platforms>
) =>
    // The `limit` parameter is hard-coded because other values result in 403 errors, see: https://github.com/tweaselORG/parse-tunes/issues/12#issuecomment-2122503518
    `https://tools.applemediaservices.com/api/apple-media/apps/${request.country}/search.json?types=apps&term=${
        request.searchTerm
    }&l=${request.language}&limit=25&platform=${request.platforms?.[0] || 'web'}&additionalPlatforms=${
        request.platforms ? request.platforms?.slice(1).join(',') : 'iphone,appletv,ipad,mac,watch'
    }`;

/**
 * The attributes that are returned in the app search response.
 *
 * These are currently not configurable.
 */
export type AppSearchReturnedAttribute =
    | 'supportsArcade'
    | 'familyShareEnabledDate'
    | 'isFirstPartyHideableApp'
    | 'contentRatingsBySystem'
    | 'deviceFamilies'
    | 'chartPositions'
    | 'url'
    | 'usesLocationBackgroundMode'
    | 'userRating'
    | 'name'
    | 'genreDisplayName'
    | 'isPreorder'
    | 'isIOSBinaryMacOSCompatible'
    | 'artistName'
    | 'reviewsRestricted'
    | 'sellerLabel'
    | 'hasEula'
    | 'seller'
    | 'copyright'
    | 'minimumMacOSVersion'
    | 'isStandaloneWithCompanionForWatchOS'
    | 'isAppleWatchSupported'
    | 'is32bitOnly'
    | 'hasSafariExtension'
    | 'languageList'
    | 'requiresGameController'
    | 'requiredCapabilities'
    | 'offers'
    | 'supportedLocales'
    | 'requires32bit'
    | 'isSiriSupported'
    | 'isGameCenterEnabled'
    | 'releaseDate'
    | 'minimumOSVersion'
    | 'hasInAppPurchases'
    | 'bundleId'
    | 'hasMessagesExtension'
    | 'supportsGameController'
    | 'artwork'
    | 'hasFamilyShareableInAppPurchases'
    | 'isStandaloneForWatchOS'
    | 'isHiddenFromSpringboard'
    | 'isDeliveredInIOSAppForWatchOS'
    | 'hasPrivacyPolicyText'
    | 'editorialArtwork'
    | 'supportsPassbook'
    | 'requirementsString'
    | 'externalVersionId';

/**
 * The response from the app search API.
 *
 * Note: There is no publicly available documentation for the API responses. The types were extrapolated from a few
 * tested responses. They may not be 100 % accurate.
 */
export type AppSearchResponse<Platforms extends AppDetailsPlatformInResponse> = UnionToIntersection<
    AppDetailsResponseFragmentPerAttribute<Platforms>[AppSearchReturnedAttribute]
>[];

/**
 * Search for apps on the the App Store. You can request a lot of different information about the app. The `attributes`
 * parameter specifies which attributes to fetch. See {@link appDetailsAvailableAttributes} for a list of all available
 * attributes.
 *
 * @param request The request parameters.
 *
 * @returns The app details, typed according to the attributes you specified.
 */
export async function searchApps<Country extends MediaApiCountry, Platforms extends AppDetailsPlatformInRequest[]>(
    request: AppSearchRequest<Country, Platforms>
): Promise<AppSearchResponse<AppDetailsPlatformInResponseForRequest[Platforms[number]]>> {
    const res = await fetch(appSearchApiUrl(request), { method: 'GET' })
        .then((response) => response.text())
        .then((r) => JSON.parse(r.trim()));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return res.apps.data.map((a: any) => a.attributes);
}
