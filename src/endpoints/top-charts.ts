import fetch from 'cross-fetch';
import type { Genre, StorefrontCountry } from '../common/consts';

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

/** Parameters for a top chart request. */
export type TopChartRequest = {
    /** The genre (category) for which to fetch the top apps. @see {@link genres} */
    genre: Genre;
    /** The chart of top apps to fetch. @see {@link charts} */
    chart: Chart;
    /** The country for which to fetch the respective top chart. @see {@link countries} */
    country: StorefrontCountry;
};

/** A list of the app IDs of the apps on the requested top chart. */
export type TopChartResult = string[];

export const topAppsApiUrl = (genreId: Genre, chartId: Chart) =>
    `https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?genreId=${genreId}&popId=${chartId}`;

/**
 * Fetch the app IDs of the top apps in a given top chart.
 *
 * @param request The parameters for which top chart to fetch.
 *
 * @returns A list of numerical app IDs in the requested top chart. The list is sorted by rank. Currently always has 200
 *   items.
 */
export async function fetchTopApps(request: TopChartRequest): Promise<TopChartResult> {
    // Depending on the platform set in the `X-Apple-Store-Front` header, Apple returns different data and different
    // formats. We want JSON, which from experimentation is returned for the `K*` and `P*` platforms (cf.
    // https://github.com/tweaselORG/parse-tunes/issues/1).
    // As per the investigation in https://github.com/tweaselORG/parse-tunes/issues/2#issuecomment-1377283817, only
    // platforms `25` and `30` return the iPad top charts. Those are `K8` and `K84`, respectively. Assuming that the
    // number represents the iOS version where the platform was first introduced, it makes sense to go with the newer,
    // i.e. `30`, which is `K84` and presumably iOS 8.4.
    // Accordingly, we use `29` (`P84`) for iPhone.
    const ipadCharts = Object.entries(charts).reduce<Chart[]>((acc, [name, id]) => {
        if (name.endsWith('Ipad')) acc.push(id);
        return acc;
    }, []);
    const platform = ipadCharts.includes(request.chart) ? 30 : 29;

    const res = await fetch(topAppsApiUrl(request.genre, request.chart), {
        method: 'GET',
        headers: {
            // We are deliberately not setting a language, since we are only retrieving the app IDs.
            'X-Apple-Store-Front': `${request.country},${platform}`,
        },
    }).then((response) => response.json());

    // Note: It's a bit silly but `$.pageData.segmentedControl.segments[0].pageData.topCharts` contains _all_ top charts
    // and we're just throwing away the other ones (see
    // https://github.com/tweaselORG/parse-tunes/issues/2#issuecomment-1377239436). But I haven't found a way to
    // make the request more specific.
    return res.pageData.segmentedControl.segments[0].pageData.selectedChart.adamIds;
}
