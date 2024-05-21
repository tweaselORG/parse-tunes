import type { GenreName } from './consts';

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
 * A platform that can appear in the `platform` or `additionalPlatforms` parameter of a request to the app details or
 * search endpoint.
 */
export type AppDetailsPlatformInRequest = 'web' | 'iphone' | 'appletv' | 'ipad' | 'mac' | 'watch';
/**
 * A type mapping from the platforms that can appear in a request to the app details or search endpoint to the key of
 * the `platformAttributes` object in the response that they cause to be included.
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
 * A platform that can appear in the response from the app details or search endpoint as a key of the
 * `platformAttributes` object.
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
