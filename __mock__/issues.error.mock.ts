export const issuesErrorMock = {
    errors: [
        {
            path: ["query issueList", "repository", "issues", "pageInfo", "x"],
            extensions: {code: "undefinedField", typeName: "PageInfo", fieldName: "x"},
            locations: [{"line": 16, "column": 9}],
            message: "Field 'x' doesn't exist on type 'PageInfo'"
        }
    ]
}
