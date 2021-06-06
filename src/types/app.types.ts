export interface GraphPagination {
    totalCount: number;
    endCursor:string | null;
    startCursor:string | null;
    hasNextPage:boolean;
    hasPreviousPage: boolean;
}
/** Github Edge node */
export interface Edge<T> {
    node:T;
    cursor:string | undefined;
}

/** Github Edge List */
export interface EdgeList<T> {
    edges: Array<Edge<T>>
    totalCount: number;
    pageInfo: Omit<GraphPagination, "totalCount">
}
export interface AsyncState<T=any> {
    loading: boolean,
    error:string,
    data:T;
    readMore:boolean;
}
export interface GraphPaginationList {
    pageInfo:GraphPagination
}

export type AsyncStateWithPagination<T> = AsyncState<T> & GraphPaginationList;

export interface GraphPaginatedQueryVariables {
    after: string | null;
    first: number;
}

/** Ant design Select Component, Options prop */
export interface SelectOption {
    value: string;
    label: string;
    key?: number|string;
}
export interface GraphFetch<V> {
    (variables: V, readMore: boolean,payload?:object): void;
}
export interface GraphService<V> {
    (payload?:object): {fetch:GraphFetch<V>};
}

export interface GraphErrorResponseItem {
    path:Array<string>;
    extensions:{ code :string, typeName :string, fieldName:string};
    locations:Array<{line:number,column:number}>;
    message:string;
}
/** Graphql server error response */
export interface GraphErrorResponse {
    errors: Array<GraphErrorResponseItem>
}
