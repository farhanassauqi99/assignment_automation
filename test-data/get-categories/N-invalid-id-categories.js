const negativeScenarios = [
    {
        name: 'Category Not Found',
        description: 'Attempt to retrieve a category that does not exist',
        request: {
            categoryId: 99999 // Gunakan ID yang tidak valid
        },
        expectedStatusCode: 404
    }
];

module.exports = negativeScenarios;
