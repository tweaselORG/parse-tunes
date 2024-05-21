# parse-tunes

> Library for fetching select data on iOS apps from the Apple Apple Store via undocumented internal iTunes APIs.

This library is able to fetch and parse data from undocumented internal API endpoints of the Apple App Store. Currently, it has the following features:

* Fetch the **charts of the most popular apps**, including filtering by genre and chart.
* **Fetch details** (including **privacy labels**) for individual apps.
* **Search** for apps.

We'll extend the supported API endpoints in the future. The focus will mostly be on functions useful for research into mobile privacy and data protection.

As all the used endpoints are undocumented, we had to resort to reverse-engineering them. It is possible that we have misinterpreted the meaning of parameters or endpoints. It is also entirely possible that some or all of the endpoints will stop working out of the blue at some point, or change their request and/or response formats.

## Installation

You can install parse-tunes using yarn or npm:

```sh
yarn add parse-tunes
# or `npm i parse-tunes`
```

## API reference

A full API reference can be found in the [`docs` folder](/docs/README.md).

## Example usage

### Fetch app top charts

The following example fetches the app IDs of the current 200 top free iPhone apps across all categories for Germany:

```ts
import { fetchTopApps, charts, countries, genres } from 'parse-tunes';

(async () => {
    const topChart = await fetchTopApps({ genre: genres.all, chart: charts.topFreeIphone, country: countries.DE });
    console.log(topChart.length); // 200
    console.log(topChart[0]); // 1186271926
})();
```

Fetching more app metadata in addition to the app IDs is currently not possible due to server-side limitations by the endpoint we're using. See [#2](https://github.com/tweaselORG/parse-tunes/issues/2) for details.

### Fetch app metadata

The following example fetches the developer name and custom artwork for the Facebook app on iPhone for the German App Store in German:

```ts
import { fetchAppDetails } from 'parse-tunes';

(async () => {
    const appDetails = await fetchAppDetails({
        appId: 284882215,
        platforms: ['iphone'],
        attributes: ['artistName', 'customArtwork'],
        country: 'DE',
        language: 'de-DE',
    });
    console.log(appDetails.artistName);
    // Meta Platforms, Inc.
    console.log(appDetails.platformAttributes.ios?.customAttributes.default.default.customArtwork.url);
    // https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/45/ab/be/45abbeac-3a7e-aa86-c1c5-007c09df6d7c/Icon-Production-0-1x_U007emarketing-0-7-0-85-220.png/{w}x{h}{c}.{f}
})();
```

This function uses Apple's internal media API (amp-api.apps.apple.com), which requires a token. If you don't provide a token, one will be fetched automatically. If you want to fetch data for multiple apps, it is recommended to fetch the token once using `fetchMediaApiToken()` and pass it to all subsequent calls to `fetchAppDetails()` to avoid the unnecessary requests:

```ts
import { fetchAppDetails, fetchMediaApiToken } from 'parse-tunes';

(async () => {
    const token = await fetchMediaApiToken();

    for (const appId of [1444383602, 490109661, 462054704]) {
        const appDetails = await fetchAppDetails({
            appId,
            platforms: ['ipad', 'watch'],
            attributes: ['bundleId', 'isIOSBinaryMacOSCompatible'],
            country: 'US',
            language: 'en-US',
            token,
        });
        console.log(appDetails.platformAttributes.ios?.bundleId, '::', appDetails.isIOSBinaryMacOSCompatible);
    }
})();
```

Through the app details function, you can also fetch an app's privacy labels:

```ts
import { fetchAppDetails } from 'parse-tunes';

(async () => {
    const { privacyDetails } = await fetchAppDetails({
        appId: 1113153706,
        platforms: ['iphone'],
        attributes: ['privacyDetails'],
        country: 'DE',
        language: 'en-GB',
    });

    console.dir(privacyDetails, { depth: null });
})();
```

<details>
<summary>Privacy label response</summary>
The response looks like this:

```ts
{
  managePrivacyChoicesUrl: null,
  privacyTypes: [
    {
      privacyType: 'Data Linked to You',
      identifier: 'DATA_LINKED_TO_YOU',
      description: 'The following data, which may be collected and linked to your identity, may be used for the following purposes:',
      dataCategories: [],
      purposes: [
        {
          purpose: 'Analytics',
          identifier: 'ANALYTICS',
          dataCategories: [
            {
              dataCategory: 'Location',
              identifier: 'LOCATION',
              dataTypes: [ 'Coarse Location' ]
            },
            {
              dataCategory: 'Identifiers',
              identifier: 'IDENTIFIERS',
              dataTypes: [ 'User ID', 'Device ID' ]
            },
            {
              dataCategory: 'Usage Data',
              identifier: 'USAGE_DATA',
              dataTypes: [ 'Product Interaction' ]
            },
            {
              dataCategory: 'Diagnostics',
              identifier: 'DIAGNOSTICS',
              dataTypes: [ 'Performance Data' ]
            }
          ]
        },
        {
          purpose: 'App Functionality',
          identifier: 'APP_FUNCTIONALITY',
          dataCategories: [
            {
              dataCategory: 'Location',
              identifier: 'LOCATION',
              dataTypes: [ 'Precise Location', 'Coarse Location' ]
            },
            {
              dataCategory: 'Contact Info',
              identifier: 'CONTACT_INFO',
              dataTypes: [ 'Email Address', 'Name', 'Phone Number' ]
            },
            {
              dataCategory: 'Contacts',
              identifier: 'CONTACTS',
              dataTypes: [ 'Contacts' ]
            },
            {
              dataCategory: 'User Content',
              identifier: 'USER_CONTENT',
              dataTypes: [
                'Photos or Videos',
                'Audio Data',
                'Other User Content'
              ]
            },
            {
              dataCategory: 'Identifiers',
              identifier: 'IDENTIFIERS',
              dataTypes: [ 'User ID', 'Device ID' ]
            },
            {
              dataCategory: 'Usage Data',
              identifier: 'USAGE_DATA',
              dataTypes: [ 'Product Interaction' ]
            },
            {
              dataCategory: 'Diagnostics',
              identifier: 'DIAGNOSTICS',
              dataTypes: [
                'Crash Data',
                'Performance Data',
                'Other Diagnostic Data'
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

</details>

### Search for apps

The following example searches the German App Store for apps with the term "education" and lists their names:

```ts
import { fetchAppDetails } from 'parse-tunes';

(async () => {
    const apps = await searchApps({ searchTerm: 'education', country: 'DE', language: 'en-GB' });

    for (const app of apps) console.log(app.name);
    // Microsoft OneNote
    // Goodnotes 6
    // StudyCards - Karteikarten
    // …
})();
```

The metadata in the search results has the same format as for the app details, but here, you cannot choose which fields you want to fetch.

## License

This code is licensed under the MIT license, see the [`LICENSE`](LICENSE) file for details.

Issues and pull requests are welcome! Please be aware that by contributing, you agree for your work to be licensed under an MIT license.
