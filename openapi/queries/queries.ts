// generated with @7nohe/openapi-react-query-codegen@1.4.1

import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query'
import { DefaultService } from '../requests/services.gen'
import * as Common from './common'
/**
 * get all activities
 * @returns unknown A list of activities
 * @throws ApiError
 */
export const useDefaultServiceGetActivities = <
  TData = Common.DefaultServiceGetActivitiesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseDefaultServiceGetActivitiesKeyFn(queryKey),
    queryFn: () => DefaultService.getActivities() as TData,
    ...options,
  })
/**
 * add an activity to favorites
 * @param data The data for the request.
 * @param data.requestBody
 * @returns unknown Favorite added
 * @throws ApiError
 */
export const useDefaultServicePostFavorites = <
  TData = Common.DefaultServicePostFavoritesMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: { id: number }
      },
      TContext
    >,
    'mutationFn'
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: { id: number }
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      DefaultService.postFavorites({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  })
