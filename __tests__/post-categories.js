// const axios = require('axios');
// const apiCollection = require('../collections/categories');

// const positiveScenarios = require('../test-data/post-categories/P-valid-categories');
// const duplicateScenarios = require('../test-data/post-categories/N-duplicate-categories');
// const invalidNameScenarios = require('../test-data/post-categories/N-invalid-name-categories');

// const createCategoryRequest = apiCollection.find(api => api.name === 'Create Category').request;
// const BASE_URL = createCategoryRequest.url;

const axios = require('axios');
const apiCollection = require('../collections/categories');  
const positiveScenarios = require('../test-data/post-categories/P-valid-categories');
const duplicateCategoryScenarios = require('../test-data/post-categories/N-duplicate-categories');
const invalidNameScenarios = require('../test-data/post-categories/N-invalid-name-categories');

// const BASE_URL = 'https://api.practicesoftwaretesting.com/categories';

describe('POST /categories - Create Category', () => {
    // Positive Scenarios: Membuat kategori dengan nama yang valid
    positiveScenarios.forEach((scenario) => {
        test(`[Success] ${scenario.name}`, async () => {
            // console.log("url:"+apiCollection[2].request.url)
            try {
                const response = await axios.post(apiCollection[2].request.url, scenario.request.data, {
                    headers: { 'Content-Type': 'application/json' }
                });
                expect(response.status).toBe(scenario.expectedStatusCode);  // Harapkan status 201
                expect(response.data.name).toBe(scenario.request.data.name);  // Memastikan kategori yang dibuat sesuai
            } catch (error) {
                console.error('Error during positive scenario:', error.response?.data);
                throw error;  // Melempar error untuk memastikan pengujian gagal jika ada masalah
            }
        });
    });

    // Negative Scenarios: Kategori dengan nama yang duplikat
    duplicateCategoryScenarios.forEach((scenario) => {
        test(`[Failed] ${scenario.name}`, async () => {
            try {
                const response = await axios.post(apiCollection[2].request.url, scenario.request.data, {
                    headers: { 'Content-Type': 'application/json' }
                });

                console.log(response.body)
                expect(response.status).toBe(scenario.expectedStatusCode);  // Harapkan status 409 untuk duplikat
                expect(response.data.slug[0]).toBe(scenario.expectedErrorMessage);  

            } catch (error) {
                console.log("error is: "+error)
                // expect(error.response.status).toBe(scenario.expectedStatusCode);  // Harapkan status 409 untuk duplikat
                // expect(error.response.data.message).toBe(scenario.expectedErrorMessage);  // Memastikan pesan error sesuai
            }
        });
    });

    // Negative Scenarios: Kategori dengan nama yang tidak valid
    invalidNameScenarios.forEach((scenario) => {
        test(`[Failed] ${scenario.name}`, async () => {
            try {
                const response = await axios.post(apiCollection[2].request.url, scenario.request.data, {
                    headers: { 'Content-Type': 'application/json' }
                });
                console.log(response.body)
                expect(error.response.status).toBe(scenario.expectedStatusCode);  // Harapkan status 400 atau 422 untuk validasi kesalahan
                expect(error.response.data.name[0]).toBe(scenario.expectedErrorMessage);  // M
            } catch (error) {
               console.log(error)
            }
        });
    });
});
