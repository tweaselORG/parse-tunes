parse-tunes

# parse-tunes

## Table of contents

### Type Aliases

- [Chart](README.md#chart)
- [Genre](README.md#genre)
- [StorefrontCountry](README.md#storefrontcountry)
- [StorefrontLanguage](README.md#storefrontlanguage)
- [StorefrontPlatform](README.md#storefrontplatform)
- [TopChartRequest](README.md#topchartrequest)
- [TopChartResult](README.md#topchartresult)

### Variables

- [charts](README.md#charts)
- [countries](README.md#countries)
- [genres](README.md#genres)
- [languages](README.md#languages)
- [platforms](README.md#platforms)

### Functions

- [fetchTopApps](README.md#fetchtopapps)

## Type Aliases

### Chart

Ƭ **Chart**: typeof [`charts`](README.md#charts)[keyof typeof [`charts`](README.md#charts)]

The `popId` of a chart on the App Store.

#### Defined in

[common/consts.ts:306](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L306)

___

### Genre

Ƭ **Genre**: typeof [`genres`](README.md#genres)[keyof typeof [`genres`](README.md#genres)]

The ID of a genre or subgenre on the App Store.

#### Defined in

[common/consts.ts:290](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L290)

___

### StorefrontCountry

Ƭ **StorefrontCountry**: typeof [`countries`](README.md#countries)[keyof typeof [`countries`](README.md#countries)]

The ID of a country that can appear as the first parameter for the `X-Apple-Store-Front` header in a request to an
iTunes endpoint.

#### Defined in

[common/consts.ts:146](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L146)

___

### StorefrontLanguage

Ƭ **StorefrontLanguage**: typeof [`languages`](README.md#languages)[keyof typeof [`languages`](README.md#languages)]

The ID of a language that can appear as the second parameter for the `X-Apple-Store-Front` header in a request to an
iTunes endpoint.

#### Defined in

[common/consts.ts:207](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L207)

___

### StorefrontPlatform

Ƭ **StorefrontPlatform**: typeof [`platforms`](README.md#platforms)[keyof typeof [`platforms`](README.md#platforms)]

The ID of a platform that can appear as the third parameter for the `X-Apple-Store-Front` header in a request to an
iTunes endpoint. The list is not complete.

#### Defined in

[common/consts.ts:250](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L250)

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

[top-charts.ts:6](https://github.com/tweaselORG/parse-tunes/blob/main/src/top-charts.ts#L6)

___

### TopChartResult

Ƭ **TopChartResult**: `string`[]

A list of the app IDs of the apps on the requested top chart.

#### Defined in

[top-charts.ts:16](https://github.com/tweaselORG/parse-tunes/blob/main/src/top-charts.ts#L16)

## Variables

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

[common/consts.ts:297](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L297)

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

[common/consts.ts:259](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L259)

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

[common/consts.ts:162](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L162)

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

[common/consts.ts:222](https://github.com/tweaselORG/parse-tunes/blob/main/src/common/consts.ts#L222)

## Functions

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

[top-charts.ts:29](https://github.com/tweaselORG/parse-tunes/blob/main/src/top-charts.ts#L29)
