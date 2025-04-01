/** @format */

import { routeNames } from '~/routes';

export type Keys = 'push' | 'replace';
export type Methods = Record<Keys, MethodFn>;
type MethodFn = (
    routeKey: RouteKey,
    query?: Record<string, any>,
    state?: Record<string, any>
) => void;
export type RouteKey = keyof typeof routeNames;
