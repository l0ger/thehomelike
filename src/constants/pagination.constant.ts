import {GraphPagination} from "../types/app.types";

const initialGraphPagination:GraphPagination = {
        endCursor:null,
        startCursor:null,
        hasNextPage: false,
        hasPreviousPage:false,
        totalCount:0,
}
export default initialGraphPagination;