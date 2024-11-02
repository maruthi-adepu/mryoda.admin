import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = process.env.NEXT_PUBLIC_BASE_APP_API_URL_DIAGNOSTICS;

export const viewAllMembersDetails = createApi({
    reducerPath: 'viewAllMembersDetails',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
      viewAllMembersDetails: builder.query({
        query: (body) => ({
          url: '/users/getAdminUsers',
          method: 'POST',
          body,
        }),
      }),
    }),
});

export const { useViewAllMembersDetailsQuery } = viewAllMembersDetails;
