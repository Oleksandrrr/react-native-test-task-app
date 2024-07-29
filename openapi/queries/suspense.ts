// generated with @7nohe/openapi-react-query-codegen@1.4.1

import { UseQueryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { DefaultService } from '../requests/services.gen'
import * as Common from './common'
/**
 * get all activities
 * @returns unknown A list of activities
 * @throws ApiError
 */
export const useDefaultServiceGetActivitiesSuspense = <
  TData = Common.DefaultServiceGetActivitiesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseDefaultServiceGetActivitiesKeyFn(queryKey),
    queryFn: () => DefaultService.getActivities() as TData,
    ...options,
  })
