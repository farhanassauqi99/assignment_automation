const positiveScenarios = [
    {
        "name": "Update category name successfully",
        "request": {
            "body": {
                "name": "Updated Category Name"
            }
        },
        "expectedStatusCode": 200,
        "expectedResponse": {
            "success": true 
        }
    }
];

module.exports = positiveScenarios;
