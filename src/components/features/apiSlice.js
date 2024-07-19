import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rocket-bank-6ac2a01241f4.herokuapp.com/' }),
  tagtypes: ['Account'],

  endpoints: (build) => ({
    getAccounts: build.query({
      query: () => ({ url: 'accounts' }),
      // Provides a list of `Accounts` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Accounts` element was added.
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
          [
            ...result.map(({ id }) => ({ type: 'Accounts', id })),
            { type: 'Accounts', id: 'LIST' },
          ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Accounts', id: 'LIST' }` is invalidated
          [{ type: 'Accounts', id: 'LIST' }],
    }),

    getAccount: build.query({
      query: (id) => ({ url: `accounts/${id}` }),
      providesTags: (result, error, id) => [{ type: 'Account', id }],
    }),

    getTransaction: build.query({
      query: (id) => ({ url: `accounts/${id}/transaction` }),
      providesTags: (result, error, id) => [{ type: 'Account', id }],
    }),

    createAccount: build.mutation({
      query(body) {
        return {
          url: 'accounts',
          method: 'POST',
          body
        }
      }
    }),

    updateAccount: build.mutation({
      query(data) {
        const {id, body} = data
        return {
          url: `accounts/${id}`,
          method: 'PUT',
          body
        }

      },
      // Invalidates all queries that subscribe to this Post `id` only.
      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
    }),

    updateAccountBalance: build.mutation({
      query(data) {
        const {id, balance} = data
        return {
          url: `accounts/${id}`,
          method: 'PUT',
          body: { balance }
        }

      },
      // Invalidates all queries that subscribe to this Post `id` only.
      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
    }),

    deleteAccount: build.mutation({
      query(id) {
        return {
          url: `accounts/${id}`,
          method: 'DELETE'
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      // invalidatesTags: (result, error, id) => [{ type: 'Posts', id }],
    })
  })
})


export const {
  useGetAccountsQuery,
  useGetAccountQuery,
  useGetTransactionQuery,
  useCreateAccountMutation,
  useUpdateAccountMutation,
  useUpdateAccountBalanceMutation,
  useDeleteAccountMutation
} = apiSlice;

