import { baseApi } from "@/services/api";
import type { Office } from "@/types";

export const officesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOffices: builder.query<Office[], void>({
            query: () => '/offices'
        })
    })
})

export const { useGetAllOfficesQuery } = officesApi;