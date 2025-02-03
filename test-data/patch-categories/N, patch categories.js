const negativeScenarios = [
    {
        name: "Update with invalid category ID",
        description: "Try to update a non-existing category",
        request: {
            method: "PATCH",
            invalidCategoryId: 999999, // ID yang tidak ada
            body: {
                name: "Invalid Update"
            }
        },
        expectedStatusCode: 400,
        expectedResponse: {
            success: false,
            error: "Invalid category ID"
        }
    },
    {
        name: "Update without sending any data",
        description: "Try to update a category without sending data",
        request: {
            method: "PATCH",
            body: {} // Mengirim body kosong
        },
        expectedStatusCode: 422,
        expectedResponse: {
            success: false,
            error: "No update data provided"
        }
    }
];

module.exports = negativeScenarios;
