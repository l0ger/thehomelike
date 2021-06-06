import {  gql } from '@apollo/client';

const ISSUE_LIST_QUERY = gql`query issueList($first:Int!, $issueStates:[IssueState!], $after:String, $before:String) {
    repository(owner:"reactjs", name:"reactjs.org") {
        issues(first:$first, after:$after, before:$before, states:$issueStates, orderBy:{field:CREATED_AT, direction:DESC}) {
            totalCount
            pageInfo {
                endCursor
                startCursor
                hasNextPage
                hasPreviousPage
            }
            edges {
                cursor
                node {
                    title
                    url
                    labels(first:3) {
                        edges {
                            node {
                                name
                                color
                            }
                        }
                    }
                }
            }
        }
    }
}`;

export default ISSUE_LIST_QUERY;