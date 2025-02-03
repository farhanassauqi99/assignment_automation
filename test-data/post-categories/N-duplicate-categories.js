const duplicateCategoryScenarios = [
    {
        name: 'Duplicate Category Name',
        request: {
            data: {
                name: 'Existing Category',
                slug: 'existing-category'
            }
        },
        expectedStatusCode: 422,  // Status untuk kategori duplikat
        expectedErrorMessage: 'A category already exists with this slug.'
    }
];

module.exports = duplicateCategoryScenarios;
