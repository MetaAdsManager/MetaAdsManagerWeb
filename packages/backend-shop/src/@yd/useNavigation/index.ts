/** @format */

import { useLocation, useHistory } from 'umi';
import { Methods, Keys, RouteKey } from './types';
import { transformUrlParams, throttle } from '~/utils';
import { routeNames } from '~/routes';

export default <P extends Record<string, any>>(defaultParams: Record<string, any> = {}) => {
    const { query, state, ...location } = useLocation();
    const history = useHistory();
    const methods = (['push', 'replace'] as Keys[]).reduce((obj, type) => {
        obj[type] = throttle(
            (
                routeKey: RouteKey,
                query: Record<string, any> = {},
                state: Record<string, any> = {}
            ) => {
                query = query.nativeEvent ? {} : query;
                state = state.nativeEvent ? {} : state;
                history[type]({
                    pathname: routeNames[routeKey],
                    search: transformUrlParams(query),
                    state
                });
            }
        );
        return obj;
    }, {} as Methods);
    const params = Object.assign(defaultParams, query, state) as P;
    return {
        ...location,
        ...history,
        ...methods,
        params
    };
};
