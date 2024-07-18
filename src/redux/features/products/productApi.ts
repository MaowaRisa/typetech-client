import { baseApi } from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET'
            }),
            providesTags: ['products']
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'GET'
            }),
            providesTags: ['products']
        }),
        updateProduct: builder.mutation({
            query: ({slug, body}) => {
                console.log('inside redux',slug);
                console.log('inside redux',body);
                return {
                url: `/products/${slug}`,
                method: 'PATCH',
                body
            }},
            invalidatesTags: ['products']
        }),

    })
})

export const {useGetAllProductsQuery, useGetProductByIdQuery, useUpdateProductMutation} = productApi;