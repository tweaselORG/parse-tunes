parse-tunes

# parse-tunes

## Table of contents

### Type Aliases

- [AllowedLanguagesPerCountryInMediaApi](README.md#allowedlanguagespercountryinmediaapi)
- [AppDetailsArtwork](README.md#appdetailsartwork)
- [AppDetailsAvailableAttribute](README.md#appdetailsavailableattribute)
- [AppDetailsPlatformInRequest](README.md#appdetailsplatforminrequest)
- [AppDetailsPlatformInResponse](README.md#appdetailsplatforminresponse)
- [AppDetailsPlatformInResponseForRequest](README.md#appdetailsplatforminresponseforrequest)
- [AppDetailsRequest](README.md#appdetailsrequest)
- [AppDetailsResponse](README.md#appdetailsresponse)
- [AppDetailsResponseFragmentPerAttribute](README.md#appdetailsresponsefragmentperattribute)
- [Chart](README.md#chart)
- [Genre](README.md#genre)
- [GenreName](README.md#genrename)
- [MediaApiCountry](README.md#mediaapicountry)
- [PlatformAttributes](README.md#platformattributes)
- [PrivacyTypes](README.md#privacytypes)
- [PrivacyTypesShort](README.md#privacytypesshort)
- [StorefrontCountry](README.md#storefrontcountry)
- [StorefrontCountryCode](README.md#storefrontcountrycode)
- [StorefrontLanguage](README.md#storefrontlanguage)
- [StorefrontLanguageCode](README.md#storefrontlanguagecode)
- [StorefrontPlatform](README.md#storefrontplatform)
- [StorefrontPlatformName](README.md#storefrontplatformname)
- [TopChartRequest](README.md#topchartrequest)
- [TopChartResult](README.md#topchartresult)

### Variables

- [allowedLanguagesPerCountryInMediaApi](README.md#allowedlanguagespercountryinmediaapi-1)
- [appDetailsAvailableAttributes](README.md#appdetailsavailableattributes)
- [appDetailsTokenUrls](README.md#appdetailstokenurls)
- [charts](README.md#charts)
- [countries](README.md#countries)
- [genres](README.md#genres)
- [languages](README.md#languages)
- [platforms](README.md#platforms)

### Functions

- [fetchAppDetails](README.md#fetchappdetails)
- [fetchMediaApiToken](README.md#fetchmediaapitoken)
- [fetchTopApps](README.md#fetchtopapps)

## Type Aliases

### AllowedLanguagesPerCountryInMediaApi

Ƭ **AllowedLanguagesPerCountryInMediaApi**: { [country in MediaApiCountry]: typeof allowedLanguagesPerCountryInMediaApi[country][number] }

A type mapping from the ISO 3166-1 alpha-2 code of countries to the language codes that they support in Apple's media
API (amp-api.apps.apple.com).

**`See`**

[allowedLanguagesPerCountryInMediaApi](README.md#allowedlanguagespercountryinmediaapi-1)

#### Defined in

[common/consts.ts:502](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L502)

___

### AppDetailsArtwork

Ƭ **AppDetailsArtwork**: `Object`

An artwork image in a response fragment.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bgColor` | `string` |
| `height` | `number` |
| `textColor1` | `string` |
| `textColor2` | `string` |
| `textColor3` | `string` |
| `textColor4` | `string` |
| `url` | `string` |
| `width` | `number` |

#### Defined in

[app-details.ts:169](https://github.com/tweaselORG/parse-tunes/blob/main/src/app-details.ts#L169)

___

### AppDetailsAvailableAttribute

Ƭ **AppDetailsAvailableAttribute**: typeof [`appDetailsAvailableAttributes`](README.md#appdetailsavailableattributes)[`number`]

An attribute (field) that can be requested from the app details endpoint.

#### Defined in

[app-details.ts:131](https://github.com/tweaselORG/parse-tunes/blob/main/src/app-details.ts#L131)

___

### AppDetailsPlatformInRequest

Ƭ **AppDetailsPlatformInRequest**: ``"web"`` \| ``"iphone"`` \| ``"appletv"`` \| ``"ipad"`` \| ``"mac"`` \| ``"watch"``

A platform that can appear in the `platform` or `additionalPlatforms` parameter of a request to the app details
endpoint.

#### Defined in

[app-details.ts:139](https://github.com/tweaselORG/parse-tunes/blob/main/src/app-details.ts#L139)

___

### AppDetailsPlatformInResponse

Ƭ **AppDetailsPlatformInResponse**: [`AppDetailsPlatformInResponseForRequest`](README.md#appdetailsplatforminresponseforrequest)[keyof [`AppDetailsPlatformInResponseForRequest`](README.md#appdetailsplatforminresponseforrequest)]

A platform that can appear in the response from the app details endpoint as a key of the `platformAttributes` object.

**`See`**

[https://github.com/tweaselORG/parse-tunes/issues/6#issuecomment-1400240548](https://github.com/tweaselORG/parse-tunes/issues/6#issuecomment-1400240548)

#### Defined in

[app-details.ts:159](https://github.com/tweaselORG/parse-tunes/blob/main/src/app-details.ts#L159)

___

### AppDetailsPlatformInResponseForRequest

Ƭ **AppDetailsPlatformInResponseForRequest**: `Object`

A type mapping from the platforms that can appear in a request to the app details endpoint to the key of the
`platformAttributes` object in the response that they cause to be included.

**`See`**

[https://github.com/tweaselORG/parse-tunes/issues/6#issuecomment-1400240548](https://github.com/tweaselORG/parse-tunes/issues/6#issuecomment-1400240548)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appletv` | ``"appletvos"`` |
| `ipad` | ``"ios"`` |
| `iphone` | ``"ios"`` |
| `mac` | ``"osx"`` |
| `watch` | ``"ios"`` |
| `web` | `undefined` |

#### Defined in

[app-details.ts:146](https://github.com/tweaselORG/parse-tunes/blob/main/src/app-details.ts#L146)

___

### AppDetailsRequest

Ƭ **AppDetailsRequest**<`Country`, `Platforms`, `Attributes`\>: `Object`

Parameters for an app details request.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Country` | extends [`MediaApiCountry`](README.md#mediaapicountry) |
| `Platforms` | extends [`AppDetailsPlatformInRequest`](README.md#appdetailsplatforminrequest)[] |
| `Attributes` | extends [`AppDetailsAvailableAttribute`](README.md#appdetailsavailableattribute)[] |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `number` | The numerical ID of the app for which to fetch the details. |
| `attributes` | `Attributes` | The attributes to fetch. See [appDetailsAvailableAttributes](README.md#appdetailsavailableattributes) for a list. |
| `country` | `Country` | Which country's App Store to use. |
| `language` | [`AllowedLanguagesPerCountryInMediaApi`](README.md#allowedlanguagespercountryinmediaapi)[`Country`] | The language in which to fetch the details. |
| `platforms?` | `Platforms` | The platform(s) for which to fetch details about the requested app. Will fetch details for all platforms if this parameter isn't specified. |
| `token?` | `string` | The token to use for authentication. If you don't provide one, it will be fetched automatically. However, if you want to fetch the details for multiple apps, it's recommended to fetch the token once and then pass it to all the requests instead of re-fetching the token for each request. You can use [fetchMediaApiToken](README.md#fetchmediaapitoken) to fetch a token beforehand. |

#### Defined in

[app-details.ts:356](https://github.com/tweaselORG/parse-tunes/blob/main/src/app-details.ts#L356)

___

### AppDetailsResponse

Ƭ **AppDetailsResponse**<`Platforms`, `Attributes`\>: `UnionToIntersection`<[`AppDetailsResponseFragmentPerAttribute`](README.md#appdetailsresponsefragmentperattribute)<`Platforms`\>[`Attributes`]\>

The response from the app details API, typed according to the attributes specified in the request.

Note: There is no publicly available documentation for the API responses. The types were extrapolated from a few
tested responses. They may not be 100 % accurate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Platforms` | extends [`AppDetailsPlatformInResponse`](README.md#appdetailsplatforminresponse) |
| `Attributes` | extends [`AppDetailsAvailableAttribute`](README.md#appdetailsavailableattribute) |

#### Defined in

[app-details.ts:406](https://github.com/tweaselORG/parse-tunes/blob/main/src/app-details.ts#L406)

___

### AppDetailsResponseFragmentPerAttribute

Ƭ **AppDetailsResponseFragmentPerAttribute**<`Platforms`\>: `Object`

Type mapping from the possible attributes to the additional data they add in the response.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Platforms` | extends [`AppDetailsPlatformInResponse`](README.md#appdetailsplatforminresponse) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `artistName` | { `artistName`: `string`  } |
| `artistName.artistName` | `string` |
| `artwork` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `artwork`: [`AppDetailsArtwork`](README.md#appdetailsartwork)  }\> |
| `bundleId` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `bundleId`: `string`  }\> |
| `chartPositions` | { `chartPositions?`: { [store in "appStore" \| "messages"]?: Object }  } |
| `chartPositions.chartPositions?` | { [store in "appStore" \| "messages"]?: Object } |
| `contentRatingsBySystem` | { `contentRatingsBySystem`: { `appsApple`: { `advisories?`: `string`[] ; `name`: `string` ; `rank`: `number` ; `value`: `number`  }  }  } |
| `contentRatingsBySystem.contentRatingsBySystem` | { `appsApple`: { `advisories?`: `string`[] ; `name`: `string` ; `rank`: `number` ; `value`: `number`  }  } |
| `contentRatingsBySystem.contentRatingsBySystem.appsApple` | { `advisories?`: `string`[] ; `name`: `string` ; `rank`: `number` ; `value`: `number`  } |
| `contentRatingsBySystem.contentRatingsBySystem.appsApple.advisories?` | `string`[] |
| `contentRatingsBySystem.contentRatingsBySystem.appsApple.name` | `string` |
| `contentRatingsBySystem.contentRatingsBySystem.appsApple.rank` | `number` |
| `contentRatingsBySystem.contentRatingsBySystem.appsApple.value` | `number` |
| `copyright` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `copyright`: `string`  }\> |
| `customArtwork` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `customAttributes`: { `default`: { `default`: { `customArtwork`: [`AppDetailsArtwork`](README.md#appdetailsartwork)  }  }  }  }\> |
| `customScreenshotsByType` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `customAttributes`: { `default`: { `default`: { `customScreenshotsByType`: { `[device: string]`: [`AppDetailsArtwork`](README.md#appdetailsartwork)[];  }  }  }  }  }\> |
| `customVideoPreviewsByType` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `customAttributes`: { `default`: { `default`: { `customVideoPreviewsByType`: { `[device: string]`: { `previewFrame`: [`AppDetailsArtwork`](README.md#appdetailsartwork) ; `video`: `string`  }[];  }  }  }  }  }\> |
| `description` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `description`: { `standard`: `string`  }  }\> |
| `deviceFamilies` | { `deviceFamilies`: `string`[]  } |
| `deviceFamilies.deviceFamilies` | `string`[] |
| `editorialArtwork` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `editorialArtwork`: `Record`<`string`, [`AppDetailsArtwork`](README.md#appdetailsartwork)\>  }\> |
| `eula` | { `eula`: `string`  } |
| `eula.eula` | `string` |
| `externalVersionId` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `externalVersionId`: `number`  }\> |
| `familyShareEnabledDate` | { `familyShareEnabledDate`: `string`  } |
| `familyShareEnabledDate.familyShareEnabledDate` | `string` |
| `fileSizeByDevice` | { `fileSizeByDevice`: { `[device: string]`: `number`;  }  } |
| `fileSizeByDevice.fileSizeByDevice` | { `[device: string]`: `number`;  } |
| `genreDisplayName` | { `genreDisplayName`: [`GenreName`](README.md#genrename)  } |
| `genreDisplayName.genreDisplayName` | [`GenreName`](README.md#genrename) |
| `hasEula` | { `hasEula`: `boolean`  } |
| `hasEula.hasEula` | `boolean` |
| `hasFamilyShareableInAppPurchases` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `hasFamilyShareableInAppPurchases`: `boolean`  }\> |
| `hasInAppPurchases` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `hasInAppPurchases`: `boolean`  }\> |
| `hasMessagesExtension` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `hasMessagesExtension`: `boolean`  }\> |
| `hasPrivacyPolicyText` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `hasPrivacyPolicyText`: `boolean`  }\> |
| `hasSafariExtension` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `hasSafariExtension`: `boolean`  }\> |
| `is32bitOnly` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `is32bitOnly`: `boolean`  }\> |
| `isAppleWatchSupported` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `isAppleWatchSupported`: `boolean`  }\> |
| `isDeliveredInIOSAppForWatchOS` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `isDeliveredInIOSAppForWatchOS`: `boolean`  }\> |
| `isFirstPartyHideableApp` | { `isFirstPartyHideableApp`: `boolean`  } |
| `isFirstPartyHideableApp.isFirstPartyHideableApp` | `boolean` |
| `isGameCenterEnabled` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `isGameCenterEnabled`: `boolean`  }\> |
| `isHiddenFromSpringboard` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `isHiddenFromSpringboard`: `boolean`  }\> |
| `isIOSBinaryMacOSCompatible` | { `isIOSBinaryMacOSCompatible`: `boolean`  } |
| `isIOSBinaryMacOSCompatible.isIOSBinaryMacOSCompatible` | `boolean` |
| `isPreorder` | { `isPreorder`: `boolean`  } |
| `isPreorder.isPreorder` | `boolean` |
| `isSiriSupported` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `isSiriSupported`: `boolean`  }\> |
| `isStandaloneForWatchOS` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `isStandaloneForWatchOS`: `boolean`  }\> |
| `isStandaloneWithCompanionForWatchOS` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `isStandaloneWithCompanionForWatchOS`: `boolean`  }\> |
| `languageList` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `languageList`: `string`[]  }\> |
| `maxPlayers` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `maxPlayers`: `number`  }\> |
| `messagesScreenshots` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `messagesScreenshots?`: { `[device: string]`: [`AppDetailsArtwork`](README.md#appdetailsartwork);  }  }\> |
| `minPlayers` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `minPlayers`: `number`  }\> |
| `minimumMacOSVersion` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `minimumMacOSVersion`: `string`  }\> |
| `minimumOSVersion` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `minimumOSVersion`: `string`  }\> |
| `name` | { `name`: `string`  } |
| `name.name` | `string` |
| `offers` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `offers`: { `assets`: { `flavor`: `string` ; `size`: `number`  }[] ; `buyParams`: `string` ; `currencyCode`: `string` ; `price`: `number` ; `priceFormatted`: `string` ; `type`: `string`  }[]  }\> |
| `privacy` | { `privacy`: { `privacyTypes`: [`PrivacyTypesShort`](README.md#privacytypesshort)  }  } |
| `privacy.privacy` | { `privacyTypes`: [`PrivacyTypesShort`](README.md#privacytypesshort)  } |
| `privacy.privacy.privacyTypes` | [`PrivacyTypesShort`](README.md#privacytypesshort) |
| `privacyDetails` | { `privacyDetails`: { `managePrivacyChoicesUrl`: `string` \| ``null`` ; `privacyTypes`: [`PrivacyTypes`](README.md#privacytypes)  }  } |
| `privacyDetails.privacyDetails` | { `managePrivacyChoicesUrl`: `string` \| ``null`` ; `privacyTypes`: [`PrivacyTypes`](README.md#privacytypes)  } |
| `privacyDetails.privacyDetails.managePrivacyChoicesUrl` | `string` \| ``null`` |
| `privacyDetails.privacyDetails.privacyTypes` | [`PrivacyTypes`](README.md#privacytypes) |
| `privacyPolicyText` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `privacyPolicyText`: `string`  }\> |
| `privacyPolicyUrl` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `privacyPolicyUrl`: `string`  }\> |
| `releaseDate` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `releaseDate`: `string`  }\> |
| `remoteControllerRequirement` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `remoteControllerRequirement`: `string`  }\> |
| `requiredCapabilities` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `requiredCapabilities`: `string`  }\> |
| `requirementsByDeviceFamily` | { `requirementsByDeviceFamily`: { `[device: string]`: { `deviceFamily`: `string` ; `requirementsString`: `string`  };  }  } |
| `requirementsByDeviceFamily.requirementsByDeviceFamily` | { `[device: string]`: { `deviceFamily`: `string` ; `requirementsString`: `string`  };  } |
| `requirementsString` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `requirementsString`: `string`  }\> |
| `requires32bit` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `requires32bit`: `boolean`  }\> |
| `requiresGameController` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `requiresGameController`: `boolean`  }\> |
| `reviewsRestricted` | { `reviewsRestricted`: `boolean`  } |
| `reviewsRestricted.reviewsRestricted` | `boolean` |
| `seller` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `seller`: `string`  }\> |
| `sellerLabel` | { `sellerLabel`: `string`  } |
| `sellerLabel.sellerLabel` | `string` |
| `supportURLForLanguage` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `supportURLForLanguage`: `string`  }\> |
| `supportedLocales` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `supportedLocales`: { `name`: `string` ; `tag`: `string`  }[]  }\> |
| `supportsArcade` | { `supportsArcade`: `boolean`  } |
| `supportsArcade.supportsArcade` | `boolean` |
| `supportsFunCamera` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `supportsFunCamera`: `boolean`  }\> |
| `supportsGameController` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `supportsGameController`: `boolean`  }\> |
| `supportsPassbook` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `supportsPassbook`: `boolean`  }\> |
| `url` | { `url`: `string`  } |
| `url.url` | `string` |
| `userRating` | { `userRating`: { `ariaLabelForRating`: `string` ; `ratingCount`: `number` ; `ratingCountList`: [`number`, `number`, `number`, `number`, `number`] ; `value`: `number`  }  } |
| `userRating.userRating` | { `ariaLabelForRating`: `string` ; `ratingCount`: `number` ; `ratingCountList`: [`number`, `number`, `number`, `number`, `number`] ; `value`: `number`  } |
| `userRating.userRating.ariaLabelForRating` | `string` |
| `userRating.userRating.ratingCount` | `number` |
| `userRating.userRating.ratingCountList` | [`number`, `number`, `number`, `number`, `number`] |
| `userRating.userRating.value` | `number` |
| `usesLocationBackgroundMode` | { `usesLocationBackgroundMode`: `boolean`  } |
| `usesLocationBackgroundMode.usesLocationBackgroundMode` | `boolean` |
| `versionHistory` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `versionHistory`: { `releaseDate`: `string` ; `releaseNotes`: `string` ; `releaseTimestamp`: `string` ; `versionDisplay`: `string`  }[]  }\> |
| `websiteUrl` | [`PlatformAttributes`](README.md#platformattributes)<`Platforms`, { `websiteUrl`: `string`  }\> |

#### Defined in

[app-details.ts:213](https://github.com/tweaselORG/parse-tunes/blob/main/src/app-details.ts#L213)

___

### Chart

Ƭ **Chart**: typeof [`charts`](README.md#charts)[keyof typeof [`charts`](README.md#charts)]

The `popId` of a chart on the App Store.

#### Defined in

[top-charts.ts:18](https://github.com/tweaselORG/parse-tunes/blob/main/src/top-charts.ts#L18)

___

### Genre

Ƭ **Genre**: typeof [`genres`](README.md#genres)[keyof typeof [`genres`](README.md#genres)]

The ID of a genre or subgenre on the App Store.

#### Defined in

[common/consts.ts:305](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L305)

___

### GenreName

Ƭ **GenreName**: keyof typeof [`genres`](README.md#genres)

The name of a genre or subgenre on the App Store.

#### Defined in

[common/consts.ts:307](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L307)

___

### MediaApiCountry

Ƭ **MediaApiCountry**: keyof typeof [`allowedLanguagesPerCountryInMediaApi`](README.md#allowedlanguagespercountryinmediaapi-1)

The ISO 3166-1 alpha-2 code of a country supported by Apple's media API (amp-api.apps.apple.com).

#### Defined in

[common/consts.ts:495](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L495)

___

### PlatformAttributes

Ƭ **PlatformAttributes**<`Platforms`, `ResponseFragment`\>: `Object`

Small helper for response fragments that are listed under `platformAttributes`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Platforms` | extends [`AppDetailsPlatformInResponse`](README.md#appdetailsplatforminresponse) |
| `ResponseFragment` | `ResponseFragment` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `platformAttributes` | { [key in Exclude<Platforms, undefined\>]?: ResponseFragment } |

#### Defined in

[app-details.ts:163](https://github.com/tweaselORG/parse-tunes/blob/main/src/app-details.ts#L163)

___

### PrivacyTypes

Ƭ **PrivacyTypes**: { `dataCategories`: { `dataCategory`: `string` ; `dataTypes`: `string`[] ; `identifier`: `string`  }[] ; `description`: `string` ; `identifier`: ``"DATA_NOT_COLLECTED"`` \| ``"DATA_USED_TO_TRACK_YOU"`` \| ``"DATA_LINKED_TO_YOU"`` \| ``"DATA_NOT_LINKED_TO_YOU"`` ; `privacyType`: `string` ; `purposes`: { `dataCategories`: { `dataCategory`: `string` ; `dataTypes`: `string`[] ; `identifier`: `string`  }[] ; `identifier`: `string` ; `purpose`: `string`  }[]  }[]

A list of privacy types as declared in a privacy label, in long format as returned for the `privacyDetails`
attribute.

#### Defined in

[app-details.ts:193](https://github.com/tweaselORG/parse-tunes/blob/main/src/app-details.ts#L193)

___

### PrivacyTypesShort

Ƭ **PrivacyTypesShort**: { `dataCategories`: { `dataCategory`: `string` ; `identifier`: `string`  }[] ; `description`: `string` ; `identifier`: ``"DATA_NOT_COLLECTED"`` \| ``"DATA_USED_TO_TRACK_YOU"`` \| ``"DATA_LINKED_TO_YOU"`` \| ``"DATA_NOT_LINKED_TO_YOU"`` ; `privacyType`: `string`  }[]

A list of privacy types as declared in a privacy label, in short format as returned for the `privacy` attribute.

#### Defined in

[app-details.ts:180](https://github.com/tweaselORG/parse-tunes/blob/main/src/app-details.ts#L180)

___

### StorefrontCountry

Ƭ **StorefrontCountry**: typeof [`countries`](README.md#countries)[keyof typeof [`countries`](README.md#countries)]

The ID of a country that can appear as the first parameter for the `X-Apple-Store-Front` header in a request to an
iTunes endpoint.

#### Defined in

[common/consts.ts:146](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L146)

___

### StorefrontCountryCode

Ƭ **StorefrontCountryCode**: keyof typeof [`countries`](README.md#countries)

The ISO 3166-1 alpha-2 code of a country that can appear as the first parameter for the `X-Apple-Store-Front` header
in a request to an iTunes endpoint.

#### Defined in

[common/consts.ts:151](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L151)

___

### StorefrontLanguage

Ƭ **StorefrontLanguage**: typeof [`languages`](README.md#languages)[keyof typeof [`languages`](README.md#languages)]

The ID of a language that can appear as the second parameter for the `X-Apple-Store-Front` header in a request to an
iTunes endpoint.

#### Defined in

[common/consts.ts:212](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L212)

___

### StorefrontLanguageCode

Ƭ **StorefrontLanguageCode**: keyof typeof [`languages`](README.md#languages)

The ISO 639-1 code of a language that can appear as the second parameter for the `X-Apple-Store-Front` header in a
request to an iTunes endpoint.

#### Defined in

[common/consts.ts:217](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L217)

___

### StorefrontPlatform

Ƭ **StorefrontPlatform**: typeof [`platforms`](README.md#platforms)[keyof typeof [`platforms`](README.md#platforms)]

The ID of a platform that can appear as the third parameter for the `X-Apple-Store-Front` header in a request to an
iTunes endpoint. The list is not complete.

#### Defined in

[common/consts.ts:260](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L260)

___

### StorefrontPlatformName

Ƭ **StorefrontPlatformName**: keyof typeof [`platforms`](README.md#platforms)

The internal name of a platform that can appear as the third parameter for the `X-Apple-Store-Front` header in a
request to an iTunes endpoint. The list is not complete.

#### Defined in

[common/consts.ts:265](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L265)

___

### TopChartRequest

Ƭ **TopChartRequest**: `Object`

Parameters for a top chart request.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chart` | [`Chart`](README.md#chart) | The chart of top apps to fetch. **`See`** [charts](README.md#charts) |
| `country` | [`StorefrontCountry`](README.md#storefrontcountry) | The country for which to fetch the respective top chart. **`See`** [countries](README.md#countries) |
| `genre` | [`Genre`](README.md#genre) | The genre (category) for which to fetch the top apps. **`See`** [genres](README.md#genres) |

#### Defined in

[top-charts.ts:21](https://github.com/tweaselORG/parse-tunes/blob/main/src/top-charts.ts#L21)

___

### TopChartResult

Ƭ **TopChartResult**: `string`[]

A list of the app IDs of the apps on the requested top chart.

#### Defined in

[top-charts.ts:31](https://github.com/tweaselORG/parse-tunes/blob/main/src/top-charts.ts#L31)

## Variables

### allowedLanguagesPerCountryInMediaApi

• `Const` **allowedLanguagesPerCountryInMediaApi**: `Object`

A mapping from the ISO 3166-1 alpha-2 code of countries to the language codes that they support in Apple's media API
(amp-api.apps.apple.com).

**`Remarks`**

Generated from https://amp-api.apps.apple.com/v1/storefronts using ([this
script](https://github.com/tweaselORG/parse-tunes/issues/6#issuecomment-1397015499)).

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AE` | readonly [``"en-GB"``, ``"ar"``] |
| `AF` | readonly [``"en-GB"``] |
| `AG` | readonly [``"en-GB"``] |
| `AI` | readonly [``"en-GB"``] |
| `AL` | readonly [``"en-GB"``] |
| `AM` | readonly [``"en-GB"``] |
| `AO` | readonly [``"en-GB"``] |
| `AR` | readonly [``"es-MX"``, ``"en-GB"``] |
| `AT` | readonly [``"de-DE"``, ``"en-GB"``] |
| `AU` | readonly [``"en-AU"``, ``"en-GB"``] |
| `AZ` | readonly [``"en-GB"``] |
| `BA` | readonly [``"en-GB"``, ``"hr"``] |
| `BB` | readonly [``"en-GB"``] |
| `BE` | readonly [``"en-GB"``, ``"fr-FR"``, ``"nl"``] |
| `BF` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `BG` | readonly [``"en-GB"``] |
| `BH` | readonly [``"en-GB"``, ``"ar"``] |
| `BJ` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `BM` | readonly [``"en-GB"``] |
| `BN` | readonly [``"en-GB"``] |
| `BO` | readonly [``"es-MX"``, ``"en-GB"``] |
| `BR` | readonly [``"pt-BR"``, ``"en-GB"``] |
| `BS` | readonly [``"en-GB"``] |
| `BT` | readonly [``"en-GB"``] |
| `BW` | readonly [``"en-GB"``] |
| `BY` | readonly [``"en-GB"``] |
| `BZ` | readonly [``"en-GB"``, ``"es-MX"``] |
| `CA` | readonly [``"en-CA"``, ``"fr-CA"``] |
| `CD` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `CG` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `CH` | readonly [``"de-CH"``, ``"de-DE"``, ``"en-GB"``, ``"fr-FR"``, ``"it"``] |
| `CI` | readonly [``"fr-FR"``, ``"en-GB"``] |
| `CL` | readonly [``"es-MX"``, ``"en-GB"``] |
| `CM` | readonly [``"fr-FR"``, ``"en-GB"``] |
| `CN` | readonly [``"zh-Hans-CN"``, ``"en-GB"``] |
| `CO` | readonly [``"es-MX"``, ``"en-GB"``] |
| `CR` | readonly [``"es-MX"``, ``"en-GB"``] |
| `CV` | readonly [``"en-GB"``] |
| `CY` | readonly [``"en-GB"``, ``"el"``, ``"tr"``] |
| `CZ` | readonly [``"en-GB"``, ``"cs"``] |
| `DE` | readonly [``"de-DE"``, ``"en-GB"``] |
| `DK` | readonly [``"en-GB"``, ``"da"``] |
| `DM` | readonly [``"en-GB"``] |
| `DO` | readonly [``"es-MX"``, ``"en-GB"``] |
| `DZ` | readonly [``"en-GB"``, ``"fr-FR"``, ``"ar"``] |
| `EC` | readonly [``"es-MX"``, ``"en-GB"``] |
| `EE` | readonly [``"en-GB"``] |
| `EG` | readonly [``"en-GB"``, ``"fr-FR"``, ``"ar"``] |
| `ES` | readonly [``"es-ES"``, ``"en-GB"``, ``"ca"``] |
| `FI` | readonly [``"en-GB"``, ``"fi"``] |
| `FJ` | readonly [``"en-GB"``] |
| `FM` | readonly [``"en-GB"``] |
| `FR` | readonly [``"fr-FR"``, ``"en-GB"``] |
| `GA` | readonly [``"fr-FR"``, ``"en-GB"``] |
| `GB` | readonly [``"en-GB"``] |
| `GD` | readonly [``"en-GB"``] |
| `GE` | readonly [``"en-GB"``] |
| `GH` | readonly [``"en-GB"``] |
| `GM` | readonly [``"en-GB"``] |
| `GR` | readonly [``"en-GB"``, ``"el"``] |
| `GT` | readonly [``"es-MX"``, ``"en-GB"``] |
| `GW` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `GY` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `HK` | readonly [``"zh-Hant-HK"``, ``"en-GB"``, ``"zh-Hant-TW"``] |
| `HN` | readonly [``"es-MX"``, ``"en-GB"``] |
| `HR` | readonly [``"en-GB"``, ``"hr"``] |
| `HU` | readonly [``"en-GB"``, ``"hu"``] |
| `ID` | readonly [``"en-GB"``, ``"id"``] |
| `IE` | readonly [``"en-GB"``] |
| `IL` | readonly [``"en-GB"``, ``"he"``] |
| `IN` | readonly [``"en-GB"``, ``"hi"``] |
| `IQ` | readonly [``"en-GB"``, ``"ar"``] |
| `IS` | readonly [``"en-GB"``] |
| `IT` | readonly [``"it"``, ``"en-GB"``] |
| `JM` | readonly [``"en-GB"``] |
| `JO` | readonly [``"en-GB"``, ``"ar"``] |
| `JP` | readonly [``"ja"``, ``"en-US"``] |
| `KE` | readonly [``"en-GB"``] |
| `KG` | readonly [``"en-GB"``] |
| `KH` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `KN` | readonly [``"en-GB"``] |
| `KR` | readonly [``"ko"``, ``"en-GB"``] |
| `KW` | readonly [``"en-GB"``, ``"ar"``] |
| `KY` | readonly [``"en-GB"``] |
| `KZ` | readonly [``"en-GB"``] |
| `LA` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `LB` | readonly [``"en-GB"``, ``"fr-FR"``, ``"ar"``] |
| `LC` | readonly [``"en-GB"``] |
| `LK` | readonly [``"en-GB"``] |
| `LR` | readonly [``"en-GB"``] |
| `LT` | readonly [``"en-GB"``] |
| `LU` | readonly [``"en-GB"``, ``"fr-FR"``, ``"de-DE"``] |
| `LV` | readonly [``"en-GB"``] |
| `LY` | readonly [``"en-GB"``, ``"ar"``] |
| `MA` | readonly [``"en-GB"``, ``"fr-FR"``, ``"ar"``] |
| `MD` | readonly [``"en-GB"``] |
| `ME` | readonly [``"en-GB"``, ``"hr"``] |
| `MG` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `MK` | readonly [``"en-GB"``] |
| `ML` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `MM` | readonly [``"en-GB"``] |
| `MN` | readonly [``"en-GB"``] |
| `MO` | readonly [``"zh-Hant-HK"``, ``"en-GB"``, ``"zh-Hant-TW"``] |
| `MR` | readonly [``"en-GB"``, ``"fr-FR"``, ``"ar"``] |
| `MS` | readonly [``"en-GB"``] |
| `MT` | readonly [``"en-GB"``] |
| `MU` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `MV` | readonly [``"en-GB"``] |
| `MW` | readonly [``"en-GB"``] |
| `MX` | readonly [``"es-MX"``, ``"en-GB"``] |
| `MY` | readonly [``"en-GB"``, ``"ms"``] |
| `MZ` | readonly [``"en-GB"``] |
| `NA` | readonly [``"en-GB"``] |
| `NE` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `NG` | readonly [``"en-GB"``] |
| `NI` | readonly [``"es-MX"``, ``"en-GB"``] |
| `NL` | readonly [``"nl"``, ``"en-GB"``] |
| `NO` | readonly [``"en-GB"``, ``"nb"``] |
| `NP` | readonly [``"en-GB"``] |
| `NR` | readonly [``"en-GB"``] |
| `NZ` | readonly [``"en-AU"``, ``"en-GB"``] |
| `OM` | readonly [``"en-GB"``, ``"ar"``] |
| `PA` | readonly [``"es-MX"``, ``"en-GB"``] |
| `PE` | readonly [``"es-MX"``, ``"en-GB"``] |
| `PG` | readonly [``"en-GB"``] |
| `PH` | readonly [``"en-GB"``] |
| `PK` | readonly [``"en-GB"``] |
| `PL` | readonly [``"en-GB"``, ``"pl"``] |
| `PT` | readonly [``"pt-PT"``, ``"en-GB"``] |
| `PW` | readonly [``"en-GB"``] |
| `PY` | readonly [``"es-MX"``, ``"en-GB"``] |
| `QA` | readonly [``"en-GB"``, ``"ar"``] |
| `RO` | readonly [``"en-GB"``, ``"ro"``] |
| `RS` | readonly [``"en-GB"``, ``"hr"``] |
| `RU` | readonly [``"ru"``, ``"en-GB"``, ``"uk"``] |
| `RW` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `SA` | readonly [``"en-GB"``, ``"ar"``] |
| `SB` | readonly [``"en-GB"``] |
| `SC` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `SE` | readonly [``"sv"``, ``"en-GB"``] |
| `SG` | readonly [``"en-GB"``, ``"zh-Hans-CN"``] |
| `SI` | readonly [``"en-GB"``] |
| `SK` | readonly [``"en-GB"``, ``"sk"``] |
| `SL` | readonly [``"en-GB"``] |
| `SN` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `SR` | readonly [``"en-GB"``, ``"nl"``] |
| `ST` | readonly [``"en-GB"``] |
| `SV` | readonly [``"es-MX"``, ``"en-GB"``] |
| `SZ` | readonly [``"en-GB"``] |
| `TC` | readonly [``"en-GB"``] |
| `TD` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `TH` | readonly [``"en-GB"``, ``"th"``] |
| `TJ` | readonly [``"en-GB"``] |
| `TM` | readonly [``"en-GB"``] |
| `TN` | readonly [``"en-GB"``, ``"fr-FR"``, ``"ar"``] |
| `TO` | readonly [``"en-GB"``] |
| `TR` | readonly [``"en-GB"``, ``"tr"``] |
| `TT` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `TW` | readonly [``"zh-Hant-TW"``, ``"en-GB"``] |
| `TZ` | readonly [``"en-GB"``] |
| `UA` | readonly [``"en-GB"``, ``"uk"``, ``"ru"``] |
| `UG` | readonly [``"en-GB"``] |
| `US` | readonly [``"en-US"``, ``"es-MX"``, ``"ar"``, ``"ru"``, ``"zh-Hans-CN"``, ``"fr-FR"``, ``"ko"``, ``"pt-BR"``, ``"vi"``, ``"zh-Hant-TW"``] |
| `UY` | readonly [``"en-GB"``, ``"es-MX"``] |
| `UZ` | readonly [``"en-GB"``] |
| `VC` | readonly [``"en-GB"``] |
| `VE` | readonly [``"es-MX"``, ``"en-GB"``] |
| `VG` | readonly [``"en-GB"``] |
| `VN` | readonly [``"en-GB"``, ``"vi"``] |
| `VU` | readonly [``"en-GB"``, ``"fr-FR"``] |
| `XK` | readonly [``"en-GB"``] |
| `YE` | readonly [``"en-GB"``, ``"ar"``] |
| `ZA` | readonly [``"en-GB"``] |
| `ZM` | readonly [``"en-GB"``] |
| `ZW` | readonly [``"en-GB"``] |

#### Defined in

[common/consts.ts:317](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L317)

___

### appDetailsAvailableAttributes

• `Const` **appDetailsAvailableAttributes**: readonly [``"artistName"``, ``"artwork"``, ``"bundleId"``, ``"chartPositions"``, ``"contentRatingsBySystem"``, ``"copyright"``, ``"customArtwork"``, ``"customScreenshotsByType"``, ``"customVideoPreviewsByType"``, ``"description"``, ``"deviceFamilies"``, ``"editorialArtwork"``, ``"eula"``, ``"externalVersionId"``, ``"familyShareEnabledDate"``, ``"fileSizeByDevice"``, ``"genreDisplayName"``, ``"hasEula"``, ``"hasFamilyShareableInAppPurchases"``, ``"hasInAppPurchases"``, ``"hasMessagesExtension"``, ``"hasPrivacyPolicyText"``, ``"hasSafariExtension"``, ``"is32bitOnly"``, ``"isAppleWatchSupported"``, ``"isDeliveredInIOSAppForWatchOS"``, ``"isFirstPartyHideableApp"``, ``"isGameCenterEnabled"``, ``"isHiddenFromSpringboard"``, ``"isIOSBinaryMacOSCompatible"``, ``"isPreorder"``, ``"isSiriSupported"``, ``"isStandaloneForWatchOS"``, ``"isStandaloneWithCompanionForWatchOS"``, ``"languageList"``, ``"maxPlayers"``, ``"messagesScreenshots"``, ``"minimumMacOSVersion"``, ``"minimumOSVersion"``, ``"minPlayers"``, ``"name"``, ``"offers"``, ``"privacy"``, ``"privacyDetails"``, ``"privacyPolicyText"``, ``"privacyPolicyUrl"``, ``"releaseDate"``, ``"remoteControllerRequirement"``, ``"requiredCapabilities"``, ``"requirementsByDeviceFamily"``, ``"requirementsString"``, ``"requires32bit"``, ``"requiresGameController"``, ``"reviewsRestricted"``, ``"seller"``, ``"sellerLabel"``, ``"supportedLocales"``, ``"supportsArcade"``, ``"supportsFunCamera"``, ``"supportsGameController"``, ``"supportsPassbook"``, ``"supportURLForLanguage"``, ``"url"``, ``"userRating"``, ``"usesLocationBackgroundMode"``, ``"versionHistory"``, ``"websiteUrl"``]

The attributes (fields) that can be requested from the app details endpoint.

No publicly available documentation exists for these. In most cases, it is quite obvious what they mean from the name
and/or returned data.

**`Remarks`**

Compiled through trial and error and from looking at requests made by the App Store app.

**`See`**

[https://github.com/tweaselORG/parse-tunes/issues/6](https://github.com/tweaselORG/parse-tunes/issues/6)

#### Defined in

[app-details.ts:61](https://github.com/tweaselORG/parse-tunes/blob/main/src/app-details.ts#L61)

___

### appDetailsTokenUrls

• `Const` **appDetailsTokenUrls**: readonly [``"https://apps.apple.com/404"``, ``"https://apps.apple.com/story/id1538632801"``, ``"https://apps.apple.com/us/app/facebook/id284882215"``]

List of URLs to pages on the App Store that contain a token for Apple's media API (amp-api.apps.apple.com) in their
response.

**`Remarks`**

These are in the order of their response size. We'll try the smallest one first.

#### Defined in

[app-details.ts:12](https://github.com/tweaselORG/parse-tunes/blob/main/src/app-details.ts#L12)

___

### charts

• `Const` **charts**: `Object`

The App Store top charts that can be fetched.

**`See`**

https://github.com/tweaselORG/parse-tunes/issues/2#issuecomment-1377239436

#### Type declaration

| Name | Type |
| :------ | :------ |
| `topFreeIpad` | ``44`` |
| `topFreeIphone` | ``27`` |
| `topGrossingIpad` | ``46`` |
| `topGrossingIphone` | ``38`` |
| `topPaidIpad` | ``45`` |
| `topPaidIphone` | ``30`` |

#### Defined in

[top-charts.ts:9](https://github.com/tweaselORG/parse-tunes/blob/main/src/top-charts.ts#L9)

___

### countries

• `Const` **countries**: `Object`

The countries that can appear as the first parameter for the `X-Apple-Store-Front` header in a request to an iTunes
endpoint.

**`Remarks`**

Generated from:
https://web.archive.org/web/20191206001952/https://affiliate.itunes.apple.com/resources/documentation/linking-to-the-itunes-music-store/#appendix
(using [this script](https://github.com/tweaselORG/parse-tunes/issues/1#issuecomment-1377105173)).

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AE` | ``143481`` |
| `AG` | ``143540`` |
| `AI` | ``143538`` |
| `AM` | ``143524`` |
| `AO` | ``143564`` |
| `AR` | ``143505`` |
| `AT` | ``143445`` |
| `AU` | ``143460`` |
| `AZ` | ``143568`` |
| `BB` | ``143541`` |
| `BD` | ``143490`` |
| `BE` | ``143446`` |
| `BG` | ``143526`` |
| `BH` | ``143559`` |
| `BM` | ``143542`` |
| `BN` | ``143560`` |
| `BO` | ``143556`` |
| `BR` | ``143503`` |
| `BS` | ``143539`` |
| `BW` | ``143525`` |
| `BY` | ``143565`` |
| `BZ` | ``143555`` |
| `CA` | ``143455`` |
| `CH` | ``143459`` |
| `CI` | ``143527`` |
| `CL` | ``143483`` |
| `CN` | ``143465`` |
| `CO` | ``143501`` |
| `CR` | ``143495`` |
| `CY` | ``143557`` |
| `CZ` | ``143489`` |
| `DE` | ``143443`` |
| `DK` | ``143458`` |
| `DM` | ``143545`` |
| `DO` | ``143508`` |
| `DZ` | ``143563`` |
| `EC` | ``143509`` |
| `EE` | ``143518`` |
| `EG` | ``143516`` |
| `ES` | ``143454`` |
| `FI` | ``143447`` |
| `FR` | ``143442`` |
| `GB` | ``143444`` |
| `GD` | ``143546`` |
| `GH` | ``143573`` |
| `GR` | ``143448`` |
| `GT` | ``143504`` |
| `GY` | ``143553`` |
| `HK` | ``143463`` |
| `HN` | ``143510`` |
| `HR` | ``143494`` |
| `HU` | ``143482`` |
| `ID` | ``143476`` |
| `IE` | ``143449`` |
| `IL` | ``143491`` |
| `IN` | ``143467`` |
| `IS` | ``143558`` |
| `IT` | ``143450`` |
| `JM` | ``143511`` |
| `JO` | ``143528`` |
| `JP` | ``143462`` |
| `KE` | ``143529`` |
| `KN` | ``143548`` |
| `KR` | ``143466`` |
| `KW` | ``143493`` |
| `KY` | ``143544`` |
| `KZ` | ``143517`` |
| `LB` | ``143497`` |
| `LC` | ``143549`` |
| `LI` | ``143522`` |
| `LK` | ``143486`` |
| `LT` | ``143520`` |
| `LU` | ``143451`` |
| `LV` | ``143519`` |
| `MD` | ``143523`` |
| `MG` | ``143531`` |
| `MK` | ``143530`` |
| `ML` | ``143532`` |
| `MO` | ``143515`` |
| `MS` | ``143547`` |
| `MT` | ``143521`` |
| `MU` | ``143533`` |
| `MV` | ``143488`` |
| `MX` | ``143468`` |
| `MY` | ``143473`` |
| `NE` | ``143534`` |
| `NG` | ``143561`` |
| `NI` | ``143512`` |
| `NL` | ``143452`` |
| `NO` | ``143457`` |
| `NP` | ``143484`` |
| `NZ` | ``143461`` |
| `OM` | ``143562`` |
| `PA` | ``143485`` |
| `PE` | ``143507`` |
| `PH` | ``143474`` |
| `PK` | ``143477`` |
| `PL` | ``143478`` |
| `PT` | ``143453`` |
| `PY` | ``143513`` |
| `QA` | ``143498`` |
| `RO` | ``143487`` |
| `RS` | ``143500`` |
| `RU` | ``143469`` |
| `SA` | ``143479`` |
| `SE` | ``143456`` |
| `SG` | ``143464`` |
| `SI` | ``143499`` |
| `SK` | ``143496`` |
| `SN` | ``143535`` |
| `SR` | ``143554`` |
| `SV` | ``143506`` |
| `TC` | ``143552`` |
| `TH` | ``143475`` |
| `TN` | ``143536`` |
| `TR` | ``143480`` |
| `TT` | ``143551`` |
| `TW` | ``143470`` |
| `TZ` | ``143572`` |
| `UA` | ``143492`` |
| `UG` | ``143537`` |
| `US` | ``143441`` |
| `UY` | ``143514`` |
| `UZ` | ``143566`` |
| `VC` | ``143550`` |
| `VE` | ``143502`` |
| `VG` | ``143543`` |
| `VN` | ``143471`` |
| `YE` | ``143571`` |
| `ZA` | ``143472`` |

#### Defined in

[common/consts.ts:10](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L10)

___

### genres

• `Const` **genres**: `Object`

The genres and subgenres of apps on the App Store.

**`Remarks`**

Generated from https://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/genres (using [this
script](https://github.com/tweaselORG/parse-tunes/issues/3#issuecomment-1384373531)).

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Books` | ``6018`` |
| `Business` | ``6000`` |
| `Catalogs` | ``6022`` |
| `Developer Tools` | ``6026`` |
| `Education` | ``6017`` |
| `Entertainment` | ``6016`` |
| `Finance` | ``6015`` |
| `Food & Drink` | ``6023`` |
| `Games` | ``6014`` |
| `Graphics & Design` | ``6027`` |
| `Health & Fitness` | ``6013`` |
| `Lifestyle` | ``6012`` |
| `Magazines & Newspapers` | ``6021`` |
| `Medical` | ``6020`` |
| `Music` | ``6011`` |
| `Navigation` | ``6010`` |
| `News` | ``6009`` |
| `Photo & Video` | ``6008`` |
| `Productivity` | ``6007`` |
| `Reference` | ``6006`` |
| `Shopping` | ``6024`` |
| `Social Networking` | ``6005`` |
| `Sports` | ``6004`` |
| `Stickers` | ``6025`` |
| `Travel` | ``6003`` |
| `Utilities` | ``6002`` |
| `Weather` | ``6001`` |
| `all` | ``36`` |

#### Defined in

[common/consts.ts:274](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L274)

___

### languages

• `Const` **languages**: `Object`

The languages language that can appear as the second parameter for the `X-Apple-Store-Front` header in a request to
an iTunes endpoint.

Note: Not all combinations between country and language are possible. A list of possible combinations can be obtained
from this Apple Music endpoint: https://api.music.apple.com/v1/storefronts. If no language is included in the header,
a sensible default is used (also listed in the API response).

**`Remarks`**

Adapted after: https://stackoverflow.com/a/58776183/3211062.

**`Todo`**

Is this list complete? Can we find a better source?
  ([#1](https://github.com/tweaselORG/parse-tunes/issues/1#issuecomment-1384047420))

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ca-ES` | ``42`` |
| `cs-CZ` | ``22`` |
| `da-DK` | ``11`` |
| `de-CH` | ``57`` |
| `de-DE` | ``4`` |
| `el-GR` | ``23`` |
| `en-AU` | ``27`` |
| `en-CA` | ``6`` |
| `en-GB` | ``2`` |
| `en-US` | ``1`` |
| `es-ES` | ``8`` |
| `es-MX` | ``28`` |
| `fi-FI` | ``12`` |
| `fr-CA` | ``5`` |
| `fr-FR` | ``3`` |
| `hi-IN` | ``50`` |
| `hr-HR` | ``41`` |
| `hu-HU` | ``21`` |
| `id-ID` | ``37`` |
| `it-IT` | ``7`` |
| `ja-JP` | ``9`` |
| `ko-KR` | ``13`` |
| `ms-MY` | ``38`` |
| `nl-NL` | ``10`` |
| `no-NO` | ``14`` |
| `pl-PL` | ``20`` |
| `pt-BR` | ``15`` |
| `pt-PT` | ``24`` |
| `ro-RO` | ``39`` |
| `ru-RU` | ``16`` |
| `sk-SK` | ``40`` |
| `sv-SE` | ``17`` |
| `th-TH` | ``35`` |
| `tr-TR` | ``25`` |
| `uk-UA` | ``29`` |
| `vi-VI` | ``43`` |
| `zh-CN` | ``19`` |
| `zh-HK` | ``45`` |
| `zh-TW` | ``18`` |

#### Defined in

[common/consts.ts:167](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L167)

___

### platforms

• `Const` **platforms**: `Object`

The platforms that can appear as the third parameter for the `X-Apple-Store-Front` header in a request to an iTunes
endpoint. The list is not complete.

From experimentation, `K8`, `P8`, `P84`, and `K84` always have a JSON response with the desired data. The others
return UI markup as HTML or XML (PLIST), some don't even include the desired data in the response.

**`Remarks`**

Adapted after: https://gist.github.com/sgmurphy/1878352?permalink_comment_id=2977743#gistcomment-2977743.

**`Todo`**

Is this list complete? Can we find a better source?
  ([#1](https://github.com/tweaselORG/parse-tunes/issues/1#issuecomment-1384068713))

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Configurator` | ``34`` |
| `EnterpriseStore` | ``14`` |
| `K6` | ``15`` |
| `K7` | ``20`` |
| `K71` | ``23`` |
| `K8` | ``25`` |
| `K84` | ``30`` |
| `Mac1` | ``42`` |
| `MacAMPLibrary1` | ``40`` |
| `MacMusic1` | ``39`` |
| `MacPodcasts1` | ``38`` |
| `MacTV1` | ``41`` |
| `P6` | ``16`` |
| `P7` | ``21`` |
| `P71` | ``24`` |
| `P8` | ``26`` |
| `P84` | ``29`` |
| `VolumeStore` | ``11`` |
| `iTunes10` | ``12`` |
| `iTunes11` | ``17`` |
| `iTunes12` | ``28`` |
| `iTunes122` | ``32`` |

#### Defined in

[common/consts.ts:232](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L232)

## Functions

### fetchAppDetails

▸ **fetchAppDetails**<`Country`, `Platforms`, `Attributes`\>(`request`): `Promise`<[`AppDetailsResponse`](README.md#appdetailsresponse)<[`AppDetailsPlatformInResponseForRequest`](README.md#appdetailsplatforminresponseforrequest)[`Platforms`[`number`]], `Attributes`[`number`]\>\>

Fetch the details for an app from the App Store. You can request a lot of different information about the app. The
`attributes` parameter specifies which attributes to fetch. See [appDetailsAvailableAttributes](README.md#appdetailsavailableattributes) for a list of
all available attributes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Country` | extends ``"DZ"`` \| ``"AO"`` \| ``"AI"`` \| ``"AG"`` \| ``"AR"`` \| ``"AM"`` \| ``"AU"`` \| ``"AT"`` \| ``"AZ"`` \| ``"BH"`` \| ``"BB"`` \| ``"BY"`` \| ``"BE"`` \| ``"BZ"`` \| ``"BM"`` \| ``"BO"`` \| ``"BW"`` \| ``"BR"`` \| ``"VG"`` \| ``"BN"`` \| ``"BG"`` \| ``"CA"`` \| ``"KY"`` \| ``"CL"`` \| ``"CN"`` \| ``"CO"`` \| ``"CR"`` \| ``"CI"`` \| ``"HR"`` \| ``"CY"`` \| ``"CZ"`` \| ``"DK"`` \| ``"DM"`` \| ``"DO"`` \| ``"EC"`` \| ``"EG"`` \| ``"SV"`` \| ``"EE"`` \| ``"FI"`` \| ``"FR"`` \| ``"DE"`` \| ``"GH"`` \| ``"GR"`` \| ``"GD"`` \| ``"GT"`` \| ``"GY"`` \| ``"HN"`` \| ``"HK"`` \| ``"HU"`` \| ``"IS"`` \| ``"IN"`` \| ``"ID"`` \| ``"IE"`` \| ``"IL"`` \| ``"IT"`` \| ``"JM"`` \| ``"JP"`` \| ``"JO"`` \| ``"KZ"`` \| ``"KE"`` \| ``"KR"`` \| ``"KW"`` \| ``"LV"`` \| ``"LB"`` \| ``"LT"`` \| ``"LU"`` \| ``"MO"`` \| ``"MK"`` \| ``"MG"`` \| ``"MY"`` \| ``"MV"`` \| ``"ML"`` \| ``"MT"`` \| ``"MU"`` \| ``"MX"`` \| ``"MD"`` \| ``"MS"`` \| ``"NP"`` \| ``"NL"`` \| ``"NZ"`` \| ``"NI"`` \| ``"NE"`` \| ``"NG"`` \| ``"NO"`` \| ``"OM"`` \| ``"PK"`` \| ``"PA"`` \| ``"PY"`` \| ``"PE"`` \| ``"PH"`` \| ``"PL"`` \| ``"PT"`` \| ``"QA"`` \| ``"RO"`` \| ``"RU"`` \| ``"SA"`` \| ``"SN"`` \| ``"RS"`` \| ``"SG"`` \| ``"SK"`` \| ``"SI"`` \| ``"ZA"`` \| ``"ES"`` \| ``"LK"`` \| ``"KN"`` \| ``"LC"`` \| ``"VC"`` \| ``"SR"`` \| ``"SE"`` \| ``"CH"`` \| ``"TW"`` \| ``"TZ"`` \| ``"TH"`` \| ``"BS"`` \| ``"TT"`` \| ``"TN"`` \| ``"TR"`` \| ``"TC"`` \| ``"UG"`` \| ``"GB"`` \| ``"UA"`` \| ``"AE"`` \| ``"UY"`` \| ``"US"`` \| ``"UZ"`` \| ``"VE"`` \| ``"VN"`` \| ``"YE"`` \| ``"AF"`` \| ``"AL"`` \| ``"BJ"`` \| ``"BT"`` \| ``"BA"`` \| ``"BF"`` \| ``"KH"`` \| ``"CM"`` \| ``"CV"`` \| ``"TD"`` \| ``"CD"`` \| ``"SZ"`` \| ``"FJ"`` \| ``"GA"`` \| ``"GM"`` \| ``"GE"`` \| ``"GW"`` \| ``"IQ"`` \| ``"XK"`` \| ``"KG"`` \| ``"LA"`` \| ``"LR"`` \| ``"LY"`` \| ``"MW"`` \| ``"MR"`` \| ``"FM"`` \| ``"MN"`` \| ``"ME"`` \| ``"MA"`` \| ``"MZ"`` \| ``"MM"`` \| ``"NA"`` \| ``"NR"`` \| ``"PW"`` \| ``"PG"`` \| ``"CG"`` \| ``"RW"`` \| ``"SC"`` \| ``"SL"`` \| ``"SB"`` \| ``"ST"`` \| ``"TJ"`` \| ``"TO"`` \| ``"TM"`` \| ``"VU"`` \| ``"ZM"`` \| ``"ZW"`` |
| `Platforms` | extends [`AppDetailsPlatformInRequest`](README.md#appdetailsplatforminrequest)[] |
| `Attributes` | extends (``"artistName"`` \| ``"artwork"`` \| ``"bundleId"`` \| ``"chartPositions"`` \| ``"contentRatingsBySystem"`` \| ``"copyright"`` \| ``"customArtwork"`` \| ``"customScreenshotsByType"`` \| ``"customVideoPreviewsByType"`` \| ``"description"`` \| ``"deviceFamilies"`` \| ``"editorialArtwork"`` \| ``"eula"`` \| ``"externalVersionId"`` \| ``"familyShareEnabledDate"`` \| ``"fileSizeByDevice"`` \| ``"genreDisplayName"`` \| ``"hasEula"`` \| ``"hasFamilyShareableInAppPurchases"`` \| ``"hasInAppPurchases"`` \| ``"hasMessagesExtension"`` \| ``"hasPrivacyPolicyText"`` \| ``"hasSafariExtension"`` \| ``"is32bitOnly"`` \| ``"isAppleWatchSupported"`` \| ``"isDeliveredInIOSAppForWatchOS"`` \| ``"isFirstPartyHideableApp"`` \| ``"isGameCenterEnabled"`` \| ``"isHiddenFromSpringboard"`` \| ``"isIOSBinaryMacOSCompatible"`` \| ``"isPreorder"`` \| ``"isSiriSupported"`` \| ``"isStandaloneForWatchOS"`` \| ``"isStandaloneWithCompanionForWatchOS"`` \| ``"languageList"`` \| ``"maxPlayers"`` \| ``"messagesScreenshots"`` \| ``"minimumMacOSVersion"`` \| ``"minimumOSVersion"`` \| ``"minPlayers"`` \| ``"name"`` \| ``"offers"`` \| ``"privacy"`` \| ``"privacyDetails"`` \| ``"privacyPolicyText"`` \| ``"privacyPolicyUrl"`` \| ``"releaseDate"`` \| ``"remoteControllerRequirement"`` \| ``"requiredCapabilities"`` \| ``"requirementsByDeviceFamily"`` \| ``"requirementsString"`` \| ``"requires32bit"`` \| ``"requiresGameController"`` \| ``"reviewsRestricted"`` \| ``"seller"`` \| ``"sellerLabel"`` \| ``"supportedLocales"`` \| ``"supportsArcade"`` \| ``"supportsFunCamera"`` \| ``"supportsGameController"`` \| ``"supportsPassbook"`` \| ``"supportURLForLanguage"`` \| ``"url"`` \| ``"userRating"`` \| ``"usesLocationBackgroundMode"`` \| ``"versionHistory"`` \| ``"websiteUrl"``)[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`AppDetailsRequest`](README.md#appdetailsrequest)<`Country`, `Platforms`, `Attributes`\> | The request parameters. |

#### Returns

`Promise`<[`AppDetailsResponse`](README.md#appdetailsresponse)<[`AppDetailsPlatformInResponseForRequest`](README.md#appdetailsplatforminresponseforrequest)[`Platforms`[`number`]], `Attributes`[`number`]\>\>

The app details, typed according to the attributes you specified.

#### Defined in

[app-details.ts:420](https://github.com/tweaselORG/parse-tunes/blob/main/src/app-details.ts#L420)

___

### fetchMediaApiToken

▸ **fetchMediaApiToken**(): `Promise`<`string`\>

Fetch a token for Apple's media API (amp-api.apps.apple.com), to be used with the [fetchAppDetails](README.md#fetchappdetails) function.
The token can be used many times (until it expires).

**`Remarks`**

The token is extracted from the HTML of an App Store page (see: https://github.com/tweaselORG/parse-tunes/issues/6).

The token appears to be the same for everyone, and changes from time to time (around every four months). It is a JWT,
which you can parse to get the expiration date.

#### Returns

`Promise`<`string`\>

The token.

#### Defined in

[app-details.ts:29](https://github.com/tweaselORG/parse-tunes/blob/main/src/app-details.ts#L29)

___

### fetchTopApps

▸ **fetchTopApps**(`request`): `Promise`<[`TopChartResult`](README.md#topchartresult)\>

Fetch the app IDs of the top apps in a given top chart.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`TopChartRequest`](README.md#topchartrequest) | The parameters for which top chart to fetch. |

#### Returns

`Promise`<[`TopChartResult`](README.md#topchartresult)\>

A list of numerical app IDs in the requested top chart. The list is sorted by rank. Currently always has 200
  items.

#### Defined in

[top-charts.ts:44](https://github.com/tweaselORG/parse-tunes/blob/main/src/top-charts.ts#L44)
