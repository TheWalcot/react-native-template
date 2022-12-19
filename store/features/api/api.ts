import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../common/constant";
import { RootState } from "../../store";

export const deliveryApi = createApi({
  reducerPath: "deliveryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/`,
    prepareHeaders(headers, api) {
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      headers.set("User-Agent", "DeliveryMobile-Native");

      const token = (api.getState() as RootState).user.auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "v1/auth/login",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const { endpoints, useLoginMutation } = deliveryApi;
