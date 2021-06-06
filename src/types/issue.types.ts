import {EdgeList, AsyncStateWithPagination} from "./app.types";

export interface IssueLabel {
    node:{
        color: string;
        name: string;
    }
}

export interface Issue {
    title: string;
    url: string;
    cursor?: string;
    labels: { edges: Array<IssueLabel> };
}

export interface IssueState extends AsyncStateWithPagination<Array<Issue>> {

}


export interface IssueListSchema {
    repository: {
        issues: EdgeList<Issue>
    }
}