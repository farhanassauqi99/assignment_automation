// test-data/negative-scenario.js

const negativeScenarios = [
    {
        name: 'Create Category - Negative Scenario (Missing Name)',
        description: 'Attempt to create category without providing name.',
        request: {
            data: {
                // Name tidak disertakan untuk menyebabkan validasi gagal
            }
        },
        expectedStatusCode: 400,
        expectedErrorMessage: 'Name is required'
    }
    // Tambahkan skenario negatif lainnya jika diperlukan
];

module.exports = negativeScenarios;
