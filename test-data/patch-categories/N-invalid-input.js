const negativeScenarios = [
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
