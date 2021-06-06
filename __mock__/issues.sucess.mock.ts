const issuesSuccessMock = {
    data: {
        repository: {
            issues: {
                totalCount: 417,
                pageInfo: {
                    endCursor: "Y3Vyc29yOnYyOpK5MjAyMS0wNC0yN1QxMDo0MDowNiswNDozMM4zxCgB",
                    startCursor: "Y3Vyc29yOnYyOpK5MjAyMS0wNi0wM1QyMDo0NjowNiswNDozMM42R3mr",
                    hasNextPage: true,
                    hasPreviousPage: false,
                },
                edges: [
                    {
                        cursor: "Y3Vyc29yOnYyOpK5MjAyMS0wNi0wM1QyMDo0NjowNiswNDozMM42R3mr",
                        node: {
                            title: "ISO-8859-1 encoding.",
                            url: "https://github.com/reactjs/reactjs.org/issues/3721",
                            labels: {
                                edges: []
                            }
                        }
                    }
                ]
            }
        }
    }
}

export default issuesSuccessMock;