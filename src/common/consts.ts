/**
 * The countries that can appear as the first parameter for the `X-Apple-Store-Front` header in a request to an iTunes
 * endpoint.
 *
 * @remarks
 * Generated from:
 * https://web.archive.org/web/20191206001952/https://affiliate.itunes.apple.com/resources/documentation/linking-to-the-itunes-music-store/#appendix
 * (using [this script](https://github.com/tweaselORG/parse-tunes/issues/1#issuecomment-1377105173)).
 */
export const countries = {
    DZ: 143563,
    AO: 143564,
    AI: 143538,
    AG: 143540,
    AR: 143505,
    AM: 143524,
    AU: 143460,
    AT: 143445,
    AZ: 143568,
    BH: 143559,
    BD: 143490,
    BB: 143541,
    BY: 143565,
    BE: 143446,
    BZ: 143555,
    BM: 143542,
    BO: 143556,
    BW: 143525,
    BR: 143503,
    VG: 143543,
    BN: 143560,
    BG: 143526,
    CA: 143455,
    KY: 143544,
    CL: 143483,
    CN: 143465,
    CO: 143501,
    CR: 143495,
    CI: 143527,
    HR: 143494,
    CY: 143557,
    CZ: 143489,
    DK: 143458,
    DM: 143545,
    DO: 143508,
    EC: 143509,
    EG: 143516,
    SV: 143506,
    EE: 143518,
    FI: 143447,
    FR: 143442,
    DE: 143443,
    GH: 143573,
    GR: 143448,
    GD: 143546,
    GT: 143504,
    GY: 143553,
    HN: 143510,
    HK: 143463,
    HU: 143482,
    IS: 143558,
    IN: 143467,
    ID: 143476,
    IE: 143449,
    IL: 143491,
    IT: 143450,
    JM: 143511,
    JP: 143462,
    JO: 143528,
    KZ: 143517,
    KE: 143529,
    KR: 143466,
    KW: 143493,
    LV: 143519,
    LB: 143497,
    LI: 143522,
    LT: 143520,
    LU: 143451,
    MO: 143515,
    MK: 143530,
    MG: 143531,
    MY: 143473,
    MV: 143488,
    ML: 143532,
    MT: 143521,
    MU: 143533,
    MX: 143468,
    MD: 143523,
    MS: 143547,
    NP: 143484,
    NL: 143452,
    NZ: 143461,
    NI: 143512,
    NE: 143534,
    NG: 143561,
    NO: 143457,
    OM: 143562,
    PK: 143477,
    PA: 143485,
    PY: 143513,
    PE: 143507,
    PH: 143474,
    PL: 143478,
    PT: 143453,
    QA: 143498,
    RO: 143487,
    RU: 143469,
    SA: 143479,
    SN: 143535,
    RS: 143500,
    SG: 143464,
    SK: 143496,
    SI: 143499,
    ZA: 143472,
    ES: 143454,
    LK: 143486,
    KN: 143548,
    LC: 143549,
    VC: 143550,
    SR: 143554,
    SE: 143456,
    CH: 143459,
    TW: 143470,
    TZ: 143572,
    TH: 143475,
    BS: 143539,
    TT: 143551,
    TN: 143536,
    TR: 143480,
    TC: 143552,
    UG: 143537,
    GB: 143444,
    UA: 143492,
    AE: 143481,
    UY: 143514,
    US: 143441,
    UZ: 143566,
    VE: 143502,
    VN: 143471,
    YE: 143571,
} as const;
/**
 * The ID of a country that can appear as the first parameter for the `X-Apple-Store-Front` header in a request to an
 * iTunes endpoint.
 */
export type StorefrontCountry = (typeof countries)[keyof typeof countries];

/**
 * The languages language that can appear as the second parameter for the `X-Apple-Store-Front` header in a request to
 * an iTunes endpoint.
 *
 * Note: Not all combinations between country and language are possible. A list of possible combinations can be obtained
 * from this Apple Music endpoint: https://api.music.apple.com/v1/storefronts. If no language is included in the header,
 * a sensible default is used (also listed in the API response).
 *
 * @remarks
 * Adapted after: https://stackoverflow.com/a/58776183/3211062.
 *
 * @todo Is this list complete? Can we find a better source?
 *   ([#1](https://github.com/tweaselORG/parse-tunes/issues/1#issuecomment-1384047420))
 */
export const languages = {
    'en-US': 1,
    'en-GB': 2,
    'fr-FR': 3,
    'de-DE': 4,
    'fr-CA': 5,
    'en-CA': 6,
    'it-IT': 7,
    'es-ES': 8,
    'ja-JP': 9,
    'nl-NL': 10,
    'da-DK': 11,
    'fi-FI': 12,
    'ko-KR': 13,
    'no-NO': 14,
    'pt-BR': 15,
    'ru-RU': 16,
    'sv-SE': 17,
    'zh-TW': 18,
    'zh-CN': 19,
    'pl-PL': 20,
    'hu-HU': 21,
    'cs-CZ': 22,
    'el-GR': 23,
    'pt-PT': 24,
    'tr-TR': 25,
    'en-AU': 27,
    'es-MX': 28,
    'uk-UA': 29,
    'th-TH': 35,
    'id-ID': 37,
    'ms-MY': 38,
    'ro-RO': 39,
    'sk-SK': 40,
    'hr-HR': 41,
    'ca-ES': 42,
    'vi-VI': 43,
    'zh-HK': 45,
    'hi-IN': 50,
    'de-CH': 57,
} as const;
/**
 * The ID of a language that can appear as the second parameter for the `X-Apple-Store-Front` header in a request to an
 * iTunes endpoint.
 */
export type StorefrontLanguage = (typeof languages)[keyof typeof languages];

/**
 * The platforms that can appear as the third parameter for the `X-Apple-Store-Front` header in a request to an iTunes
 * endpoint. The list is not complete.
 *
 * From experimentation, `K8`, `P8`, `P84`, and `K84` always have a JSON response with the desired data. The others
 * return UI markup as HTML or XML (PLIST), some don't even include the desired data in the response.
 *
 * @remarks
 * Adapted after: https://gist.github.com/sgmurphy/1878352?permalink_comment_id=2977743#gistcomment-2977743.
 *
 * @todo Is this list complete? Can we find a better source?
 *   ([#1](https://github.com/tweaselORG/parse-tunes/issues/1#issuecomment-1384068713))
 */
export const platforms = {
    VolumeStore: 11,
    iTunes10: 12,
    EnterpriseStore: 14,
    K6: 15,
    P6: 16,
    iTunes11: 17,
    K7: 20,
    P7: 21,
    K71: 23,
    P71: 24,
    K8: 25,
    P8: 26,
    iTunes12: 28,
    P84: 29,
    K84: 30,
    iTunes122: 32,
    Configurator: 34,
    MacPodcasts1: 38,
    MacMusic1: 39,
    MacAMPLibrary1: 40,
    MacTV1: 41,
    Mac1: 42,
} as const;
/**
 * The ID of a platform that can appear as the third parameter for the `X-Apple-Store-Front` header in a request to an
 * iTunes endpoint. The list is not complete.
 */
export type StorefrontPlatform = (typeof platforms)[keyof typeof platforms];

/**
 * The genres and subgenres of apps on the App Store.
 *
 * @remarks
 * Generated from https://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/genres (using [this
 * script](https://github.com/tweaselORG/parse-tunes/issues/3#issuecomment-1384373531)).
 */
export const genres = {
    all: 36,
    Business: 6000,
    Weather: 6001,
    Utilities: 6002,
    Travel: 6003,
    Sports: 6004,
    'Social Networking': 6005,
    Reference: 6006,
    Productivity: 6007,
    'Photo & Video': 6008,
    News: 6009,
    Navigation: 6010,
    Music: 6011,
    Lifestyle: 6012,
    'Health & Fitness': 6013,
    Games: 6014,
    Finance: 6015,
    Entertainment: 6016,
    Education: 6017,
    Books: 6018,
    Medical: 6020,
    'Magazines & Newspapers': 6021,
    Catalogs: 6022,
    'Food & Drink': 6023,
    Shopping: 6024,
    Stickers: 6025,
    'Developer Tools': 6026,
    'Graphics & Design': 6027,
} as const;
/** The ID of a genre or subgenre on the App Store. */
export type Genre = (typeof genres)[keyof typeof genres];

/**
 * The App Store top charts that can be fetched.
 *
 * @see https://github.com/tweaselORG/parse-tunes/issues/2#issuecomment-1377239436
 */
export const charts = {
    topFreeIphone: 27,
    topPaidIphone: 30,
    topGrossingIphone: 38,
    topFreeIpad: 44,
    topPaidIpad: 45,
    topGrossingIpad: 46,
} as const;
/** The `popId` of a chart on the App Store. */
export type Chart = (typeof charts)[keyof typeof charts];
