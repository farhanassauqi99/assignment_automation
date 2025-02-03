const invalidNameScenarios = [
    {
        name: 'Empty Category Name',
        request: {
            data: {
                name: '', 
                slug: 'empty-category'
            }
        },
        expectedStatusCode: 422,
        expectedErrorMessage: 'The name field is required'
    },
    {
        name: 'Invalid Characters in Category Name',
        request: {
            data: {
                name: 'Invalid!Category#Name',  
                slug: 'invalid-category-name'
            }
        },
        expectedStatusCode: 400,
        expectedErrorMessage: 'Invalid characters in name'
    }
];

module.exports = invalidNameScenarios;
