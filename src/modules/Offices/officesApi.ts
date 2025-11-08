import { baseApi } from "@/services/api";

export const officesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOffices: builder.query({
            query: () => '/offices'
        })
    })
})

export const {useGetAllOfficesQuery} = officesApi;