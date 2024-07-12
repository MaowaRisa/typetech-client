import { baseApi } from "../../api/baseApi";

const brandApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBrands: builder.query({
            query: () => ({
                url: '/brands',
                method: 'GET'
            })
        })
    })
})

export const {useGetAllBrandsQuery} = brandApi;