import {useState, useEffect} from 'react';
import {GraphPagination} from "../types/app.types";

export interface PaginationHookParam {
    pageSize: number;
    pageInfo: GraphPagination;
    loadedItemsCount: number | undefined;
}

export interface PaginationHookResult {
    current: number,
    pageSize: number,
    total: number,
    onChange: ((page: number, pageSize?: number | undefined) => void) | undefined,
    totalPageNumber: number,
    after: string | null,
}

export function usePagination(
    {
        pageSize,
        pageInfo,
        loadedItemsCount
    }: PaginationHookParam
): PaginationHookResult {
    const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const [after, setAfter] = useState<string | null>(null);

    const totalPageNumber = pageSize ? Math.ceil(pageInfo.totalCount / pageSize) : 0;
    const handlePagination = (nextPageNumber: number) => {
        const notInCash = loadedItemsCount && nextPageNumber > currentPageNumber && loadedItemsCount < nextPageNumber * pageSize;
        if (pageInfo.hasNextPage && notInCash) {
            setAfter(pageInfo.endCursor);
        }
        setCurrentPageNumber(nextPageNumber);
    };

    const defaultPaginationParam = {
        current: 1,
        pageSize,
        total: 0,
        onChange: handlePagination,
        cursor: null,
        after,
        totalPageNumber,
    };

    useEffect(() => {
        setTotal(pageInfo ? pageInfo.totalCount : 0);
    }, [pageInfo]);

    if (!pageInfo || pageInfo.totalCount === 0) {
        return defaultPaginationParam;
    }

    return {
        current: currentPageNumber,
        pageSize,
        total,
        onChange: handlePagination,
        totalPageNumber,
        after,
    };
};

