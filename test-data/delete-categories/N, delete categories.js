const negativeScenarios=[
    {
        "name": "Delete category with invalid ID",
        "request": {
            "invalidCategoryId": 9999
        },
        "expectedStatusCode": 404,
        "expectedResponse": {
            "success": false,
            "message": "Category not found"
        }
    },
];
module.exports = negativeScenarios;