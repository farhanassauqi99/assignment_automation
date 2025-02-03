const axios = require('axios');
const apiCollection = require('../collections/categories');
const positiveScenarios = require('../test-data/patch-categories/P-valid-input');
const negativeScenarios = require('../test-data/patch-categories/N-invalid-input');

describe('PATCH /categories/{categoryId}', () => {
    let categoryId;

    beforeAll(async () => {
        // Ambil URL dari apiCollection dengan index yang sesuai untuk GET Categories
        const getManyResp = await axios.get(apiCollection[0].request.url); // Menggunakan apiCollection[0] untuk Get Categories

        if (!getManyResp.data || getManyResp.data.length < 2) {
            throw new Error("Tidak ada kategori yang cukup untuk diuji.");
        }

        // Ambil kategori ke-2
        categoryId = getManyResp.data[1].id;
    });

    // Uji skenario positif
    positiveScenarios.forEach((scenario) => {
        // test(`[Success] ${scenario.name}`, async () => {
        //     const response = await axios.patch(
        //         apiCollection.patchCategory(categoryId).url,
        //         scenario.request.body,
        //         { headers: { 'Content-Type': 'application/json' } }
        //     );

        //     console.log("Response Data:", JSON.stringify(response.data, null, 2));

        //     expect(response.status).toBe(scenario.expectedStatusCode);
        //     expect(response.data).toMatchObject(scenario.expectedResponse);
        // });
        test(`[Success] ${scenario.name}`, async () => {
            const patchCategoryUrl = apiCollection[3].request.url; // Mengakses index 3 untuk PATCH URL
            const response = await axios.patch(
                patchCategoryUrl.replace("{categoryId}", categoryId), // Gantilah {categoryId} dengan id yang sesuai
                scenario.request.body,
                { headers: { 'Content-Type': 'application/json' } }
            );

            console.log("Response Data:", JSON.stringify(response.data, null, 2));

            expect(response.status).toBe(scenario.expectedStatusCode);
            expect(response.data).toMatchObject(scenario.expectedResponse);
        });
    });
    // Uji skenario negatif
    negativeScenarios.forEach((scenario) => {
        test(`[Failed] ${scenario.name}`, async () => {
            const invalidCategoryId = scenario.request.invalidCategoryId || categoryId;
            const url = apiCollection[3].request.url.replace('{categoryId}', invalidCategoryId); // Ganti {categoryId} dengan invalidCategoryId

            try {
                console.log("Request Body:", JSON.stringify(scenario.request.body, null, 2));

                const response = await axios.patch(
                    url,
                    scenario.request.body,
                    { headers: { 'Content-Type': 'application/json' } }
                );
            } catch (error) {
                if (error.response) {
                    console.log("Error Response:", JSON.stringify(error.response.data, null, 2));
                    console.log("Actual Response:", JSON.stringify(response.data, null, 2));
                    expect(error.response.status).toBe(scenario.expectedStatusCode);
                    expect(error.response.data).toMatchObject(scenario.expectedResponse);
                } else {
                    console.log("Error Message:", error.message);
                }
            }
        });
    });
});