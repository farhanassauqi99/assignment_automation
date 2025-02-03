// __tests__/put-category.js



// test('Get Category By ID - Success', async () => {
//     const getManyResp = await axios.get(`https://api.practicesoftwaretesting.com/categories`)
//     let category = getManyResp.data[1]
//     let categoryId = category.id
//     const response = await axios.put(`https://api.practicesoftwaretesting.com/categories/${categoryId}`, category);
//     console.log(response.data)

//     expect(response.status).toBe(200);
//     expect(response.data).toHaveProperty('message', "");
// })
const axios = require('axios');

test('Update Category By ID - Success', async () => {
    // Ambil daftar kategori terlebih dahulu
    const getManyResp = await axios.get(`https://api.practicesoftwaretesting.com/categories`);

    // Pastikan respons tidak kosong
    if (!getManyResp.data || getManyResp.data.length === 0) {
        throw new Error("Tidak ada kategori yang tersedia untuk diuji.");
    }

    let category = getManyResp.data[1]; // Ambil kategori ke-2 untuk diperbarui
    let categoryId = category?.id; // Pastikan ID ada

    // Pastikan categoryId valid sebelum lanjut
    if (!categoryId) {
        throw new Error("categoryId tidak ditemukan! Pastikan ada kategori sebelum mengupdate.");
    }

    // Buat data yang akan diperbarui
    const updatedCategory = {
        name: "new category updated",
        slug: "new-category-updated"
    };

    // Kirim request PUT untuk memperbarui kategori
    const response = await axios.put(
        `https://api.practicesoftwaretesting.com/categories/${categoryId}`,
        updatedCategory,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    // Debugging: Pastikan response API sesuai harapan
    console.log("Response Data:", JSON.stringify(response.data, null, 2));

    // Pastikan response status 200
    expect(response.status).toBe(200);

    // Perbaiki validasi agar sesuai dengan API
    expect(response.data).toHaveProperty('success', true); 
});
