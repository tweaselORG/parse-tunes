# parse-tunes

> Library for fetching select data on iOS apps from the Apple Apple Store via undocumented internal iTunes APIs.

This library is able to fetch and parse data from undocumented internal API endpoints of the Apple App Store. Currently, it can fetch the charts of the most popular apps, according to various criteria. We'll extend the supported API endpoints in the future. The focus will mostly be on functions useful for research into mobile privacy and data protection.

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

## License

This code is licensed under the MIT license, see the [`LICENSE`](LICENSE) file for details.

Issues and pull requests are welcome! Please be aware that by contributing, you agree for your work to be licensed under an MIT license.
