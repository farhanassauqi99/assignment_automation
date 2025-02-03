// negative-scenario.js

// Definisi skenario negatif
const negativeScenarios = [
    {
        name: 'Get Categories - Invalid Token',
        description: 'Attempt to retrieve categories with an invalid token.',
        request: {
            // Permintaan yang akan menghasilkan kesalahan
        },
        expectedStatusCode: 401,
        expectedErrorMessage: 'Unauthorized'
    },
    // Tambahkan skenario negatif lain sesuai kebutuhan
];

module.exports = negativeScenarios;
