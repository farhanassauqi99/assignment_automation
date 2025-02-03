const axios = require('axios');

test('fetch categories from API', async () => {
    const categoryId = 1; // ✅ Tambahkan inisialisasi variabel
    const response = await axios.get(`https://api.practicesoftwaretesting.com/categories`);

    // console.log(JSON.stringify(response.data)); // ✅ Hanya mencetak data penting
    expect(response.status).toBe(200);
    expect(response.data).toBeTruthy();
});
