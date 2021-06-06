import {ApolloError} from "@apollo/client";
import {NET_WORK_ERROR, INTERNAL_SERVER_ERROR} from "../constants/errors.constants";

export const getApolloErrorMessage = (error:ApolloError):string=>{
    if(error.networkError){
        return NET_WORK_ERROR;
    }
    else if(error.graphQLErrors) {
        return INTERNAL_SERVER_ERROR;
    }
     return error.message;
}