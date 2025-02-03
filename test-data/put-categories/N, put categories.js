// test-data/negative-scenario.js

const negativeScenarios = [
    {
        name: 'Get Category By ID - Invalid ID',
        description: 'Try to retrieve category with a non-existing ID',
        request: {
            method: 'GET',
            url: 'https://api.practicesoftwaretesting.com/categories/9999'
        },
        expectedStatusCode: 404,
        expectedErrorMessage: 'Category not found'
    }
];

module.exports = negativeScenarios;
