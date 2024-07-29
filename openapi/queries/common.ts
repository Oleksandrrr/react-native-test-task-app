// generated with @7nohe/openapi-react-query-codegen@1.4.1

import { UseQueryResult } from '@tanstack/react-query'
import { DefaultService } from '../requests/services.gen'
export type DefaultServiceGetActivitiesDefaultResponse = Awaited<
  ReturnType<typeof DefaultService.getActivities>
>
export type DefaultServiceGetActivitiesQueryResult<
  TData = DefaultServiceGetActivitiesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const useDefaultServiceGetActivitiesKey = 'DefaultServiceGetActivities'
export const UseDefaultServiceGetActivitiesKeyFn = (
  queryKey?: Array<unknown>,
) => [useDefaultServiceGetActivitiesKey, ...(queryKey ?? [])]
export type DefaultServicePostFavoritesMutationResult = Awaited<
  ReturnType<typeof DefaultService.postFavorites>
>
