// test-data/positive-scenario.js

const positiveScenarios = [
    {
        name: 'Get Category By ID - Valid ID',
        description: 'Retrieve category details using a valid category ID',
        request: {
            method: 'GET',
            url: 'https://api.practicesoftwaretesting.com/categories/1'
        },
        expectedStatusCode: 200,
        expectedResponse: {
            id: 1,
            name: 'Category 1'
        }
    }
];

module.exports = positiveScenarios;
