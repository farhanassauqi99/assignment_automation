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
]
  
  module.exports = negativeScenarios;