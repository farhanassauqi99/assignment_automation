const axios = require('axios');
const apiCollection = require('../collections/categories');  
const positiveScenarios = require('../test-data/get-categories/P-valid-id-categories');  
const negativeScenarios = require('../test-data/get-categories/N-invalid-id-categories');

describe('GET /categories/tree/{categoryId} - Positive Scenarios', () => {
    positiveScenarios.forEach((scenario) => {
        test(`[Success] ${scenario.name}`, async () => {
            const request = apiCollection.find(api => api.name === 'Get Category By ID').request;
            const categoryId = scenario.request.categoryId;
            const url = request.url.replace('{categoryId}', categoryId);

            try {
                const response = await axios.get(url, {
                    headers: { 'Content-Type': 'application/json' }
                });

                console.log('Response Data:', response.data); // Debug log
                
                expect(response.status).toBe(scenario.expectedStatusCode);
                expect(response.data).toHaveProperty('id', categoryId); // Pastikan ID cocok
            } catch (error) {
                console.error('Error Response:', error.response?.data);
                throw error; // Lempar ulang error agar Jest menangkapnya
            }
        });
    });
});

describe('GET /categories/tree/{categoryId} - Negative Scenarios', () => {
    negativeScenarios.forEach((scenario) => {
        test(`[Failed] ${scenario.name}`, async () => {
            const request = apiCollection.find(api => api.name === 'Get Category By ID').request;
            const categoryId = scenario.request.categoryId;
            const url = request.url.replace('{categoryId}', categoryId);

            try {
                await axios.get(url, { headers: { 'Content-Type': 'application/json' } });
            } catch (error) {
                console.log('Actual Error Message:', error.response?.data.message); // Debug log
                expect(error.response.status).toBe(scenario.expectedStatusCode);
            }
        });
    });
});
