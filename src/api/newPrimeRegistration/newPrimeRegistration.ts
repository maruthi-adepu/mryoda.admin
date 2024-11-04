import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = process.env.NEXT_PUBLIC_BASE_APP_API_URL_DIAGNOSTICS;
const membershipOTPURL=process.env.NEXT_PUBLIC_BASE_APP_API_URL_MEMBERSHIP;

export const newMemberShipRegistration = createApi({
  reducerPath: 'newMemberShipRegistration',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    newMemberShipRegistration: builder.mutation({
      query: (body) => ({
        url: '/users/addUser',
        method: 'POST',
        body,
      }),
    }),
    addNewMembership: builder.mutation({
        query: (body) => ({
          url: `${membershipOTPURL}/customer/addMembership`,
          method: 'POST',
          body,
        }),
      }),
  }),
});

export const { useNewMemberShipRegistrationMutation ,useAddNewMembershipMutation} = newMemberShipRegistration;
