import {act, renderHook} from '@testing-library/react-hooks';
import expect from 'expect';
import { usePagination } from "../pagination.utils";
import {graphPageSize} from "../../constants/apollo.constants";
import {GraphPagination} from "../../types/app.types";

describe("Pagination hooks", () => {
    it("Cursor based pagination hook", () => {
        const pageInfo:GraphPagination = {
            totalCount:417,
            endCursor: "Y3Vyc29yOnYyOpK5MjAyMS0wNC0yN1QxMDo0MDowNiswNDozMM4zxCgB",
            startCursor: "Y3Vyc29yOnYyOpK5MjAyMS0wNi0wM1QyMDo0NjowNiswNDozMM42R3mr",
            hasNextPage: true,
            hasPreviousPage: false,
        }
        const { result } = renderHook(()=>{
            return usePagination({pageSize:graphPageSize,loadedItemsCount:graphPageSize,pageInfo:pageInfo});
        });

        expect(result.current.current).toBe(1);
        expect(result.current.after).toBe(null);
        expect(result.current.total).toBe(pageInfo.totalCount);
        expect(result.current.totalPageNumber).toBe(42);

        act(()=>{
            result.current.onChange && result.current.onChange(2);
        })
        expect(result.current.after).toBe("Y3Vyc29yOnYyOpK5MjAyMS0wNC0yN1QxMDo0MDowNiswNDozMM4zxCgB");
    });
})