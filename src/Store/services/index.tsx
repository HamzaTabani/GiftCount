import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import endpoints, { BASE_URL } from '../constants'


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().authReducer.token
            // console.log('state ===>', token)
            if (token) {
                headers.set("authorization", `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (userData) => ({
                url: endpoints.SIGNUP,
                method: 'POST',
                body: userData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }),
        getCuisineTypes: builder.query({
            query: () => ({
                url: endpoints.CUISINE_TYPES,
                method: 'GET',
            })
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: endpoints.LOGIN,
                method: 'POST',
                body: credentials,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }),
        sendCodeEmail: builder.mutation({
            query: (email) => ({
                url: endpoints.FORGET_PASSWORD,
                method: 'POST',
                body: email
            })
        }),
        verifyOTP: builder.mutation({
            query: (data) => ({
                url: endpoints.OTP,
                method: 'POST',
                body: data
            })
        }),
        resetPassword: builder.mutation({
            query: (data) => ({
                url: endpoints.RESET_PASSWORD,
                method: 'POST',
                body: data

            })
        }),
        changePassword: builder.mutation({
            query: (data) => ({
                url: endpoints.CHANGE_PASSWORD,
                method: 'POST',
                body: data
            })
        }),
        editProfile: builder.mutation({
            query: (data) => ({
                url: endpoints.EDIT_PROFILE,
                method: 'POST',
                body: data
            })
        }),
        createDiscountCoupon: builder.mutation({
            query: (data) => ({
                url: endpoints.CREATE_COUPON,
                method: 'POST',
                body: data
            })
        }),
        getOwnerCoupons: builder.query({
            query: () => ({
                url: endpoints.GET_OWNER_COUPONS,
                method: 'GET'
            }),
        }),
        getAllCoupons: builder.query({
            query: () => ({
                url: endpoints.GET_COUPONS,
                method: 'GET',
            }),
        }),
        getCouponDetails: builder.mutation({
            query: ({type,coupon_id}) => {
                console.log('type and id',type,coupon_id)
               return { 
                url: endpoints.COUPON_DETAIL(coupon_id),
                method: 'POST',
                body: type
            }
            }
        }),
        couponStatus: builder.mutation({
            query: ({ status, coupon_id }) => {
                // console.log('statuts',status)
                return {
                    url: endpoints.SET_COUPON_STATUS(coupon_id),
                    method: 'POST',
                    body: status,
                }
            },
        }),
        qrCodeScan: builder.mutation({
            query: (data) => ({
                url: endpoints.QRCODE_SCAN,
                method: 'POST',
                body: data
            })
        }),
        searchCoupons: builder.query({
            query: (text) => ({
                url: endpoints.SEARCH_COUPONS(text),
                method: 'GET'
            })
        }),
        filterCouponsByCuisine: builder.query({
            query: (id) => {
                console.log('cuisine id',id)
               return { 
                url: endpoints.FILTER_COUPONS_BY_CUISINES(id),
                method: 'GET'
            }
            }
        }),
        editDiscountCoupon: builder.mutation({
            query: ({ data, id }) => ({
                url: endpoints.EDIT_DISCOUNT_COUPON(id),
                method: 'POST',
                body: data
            })
        }),
        deleteDiscountCoupon: builder.query({
            query: (coupon_id) => ({
                url: endpoints.DELETE_DISCOUNT_COUPON(coupon_id),
                method: 'GET'
            })
        }),
        getCustomerCoupons: builder.query({
            query: () => ({
                url: endpoints.GET_CUSTOMER_COUPONS,
                method: 'GET'
            })
        })
    }),
})

export const {
    useCreateUserMutation,
    useLoginMutation,
    useLazyGetCuisineTypesQuery,
    useSendCodeEmailMutation,
    useVerifyOTPMutation,
    useResetPasswordMutation,
    useChangePasswordMutation,
    useEditProfileMutation,
    useCreateDiscountCouponMutation,
    useCouponStatusMutation,
    useLazyGetAllCouponsQuery,
    useLazyGetOwnerCouponsQuery,
    useGetCouponDetailsMutation,
    useQrCodeScanMutation,
    useLazySearchCouponsQuery,
    useLazyFilterCouponsByCuisineQuery,
    useEditDiscountCouponMutation,
    useLazyDeleteDiscountCouponQuery,
    useLazyGetCustomerCouponsQuery
} = authApi;