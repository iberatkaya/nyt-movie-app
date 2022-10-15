import DotEnv from 'react-native-config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchAPIResponse } from './types';
import { Movie } from '../types';

export const baseUrlStr = 'https://api.nytimes.com/svc/movies/v2';

export const apiKey = DotEnv.API_KEY;

export const nytApi = createApi({
  reducerPath: 'nytApi',
  tagTypes: ['Movies'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlStr }),
  endpoints: (builder) => ({
    getCriticsPicks: builder.query<Movie[], string>({
      query: () => ({
        url: `reviews/search.json?query=picks&order=by-publication-date&api-key=${apiKey}`,
      }),
    }),
    searchForMovie: builder.query<Movie[], string>({
      query: (name) => ({
        url: `reviews/search.json?query=${name}&order=by-publication-date&api-key=${apiKey}`,
      }),
      transformResponse: (response: SearchAPIResponse) => {
        return (
          response.results?.map((i) => ({
            title: i.display_title,
            rating: i.mpaa_rating,
            summary: i.summary_short,
            link: i.link.url,
            date: i.publication_date,
            opening_date: i.opening_date,
            headline: i.headline,
            image: i.multimedia
              ? {
                  src: i.multimedia.src,
                  height: i.multimedia.height,
                  width: i.multimedia.width,
                }
              : null,
          })) ?? null
        );
      },
    }),
  }),
});

export const { useSearchForMovieQuery, useGetCriticsPicksQuery } = nytApi;
