import {AsyncState, AsyncStateWithPagination} from "../types/app.types";

export function asyncSuccessReducer(state:AsyncState, payload:{ data:Array<any> , pageInfo:any}, isPaginated:boolean):AsyncStateWithPagination<any>{
    return  {
        data:  isPaginated?  [...state.data, ...payload.data] : payload.data,
        pageInfo: payload.pageInfo,
        loading:false,
        error:'',
        readMore: false
    }
}