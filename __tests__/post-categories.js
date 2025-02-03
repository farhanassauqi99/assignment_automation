// __tests__/post-categories.js

const axios = require('axios');

test('[success] create new category', async () => {
    try {
        let angkaRandom = Math.ceil(Math.random() * 100) 
        const newCategory = {
            name: `New Category ${angkaRandom}`,
            slug: `new-category-${angkaRandom}`
        };
        
        // console.log("MASUK SINI 1", newCategory);
        const response = await axios.post('https://api.practicesoftwaretesting.com/categories',
            newCategory, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        // console.log("MASUK SINI 2");
        expect(response.status).toBe(201);
        expect(response.data).toBeTruthy();
        expect(response.data.id).toBeTruthy();
        expect(response.data.name).toBe(`New Category ${angkaRandom}`)
        expect(response.data.slug).toBe(`new-category-${angkaRandom}`)
    } catch (error) {
        console.log("Error Response:", {
            status: error.response?.status,
            data: error.response?.data
        });
        throw error; // Pastikan error dilempar agar Jest bisa menangkapnya
    }    
});

// // Skenario negatif
test('[failed] empty name', async () => {
    const newCategory = {
        // Name tidak disertakan untuk menyebabkan validasi gagal
        slug: "ini-name"
    };

    try {
        res = await axios.post('https://api.practicesoftwaretesting.com/categories', newCategory);
        console.log("ga bakal sampe sini", res.data)
    } catch (error) {
        console.log("masuknya disini", error.response.data)
        // Memastikan respons memiliki status 422 Unprocessable Entity atau sesuai dengan validasi yang diharapkan
        expect(error.response.status).toBe(422);
        // Memastikan respons berisi pesan atau data yang sesuai dengan validasi
        expect(error.response.data.name[0]).toBe('The name field is required.');
    }
});
