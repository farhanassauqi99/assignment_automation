// // api-collection.js

// const { request } = require('express');
// const axios = require('axios');

// // Definisi koleksi permintaan API
// const apiCollection = [
//     {
//         name: 'Get Categories',
//         request: {
//             method: 'GET',
//             url: 'https://api.practicesoftwaretesting.com/categories'
//         }
//     },
//     // Tambahkan permintaan API lain sesuai kebutuhan
// ];

// module.exports = apiCollection;

// collection/categories.js

// collection/categories.js

const apiCollection = [
    {
        name: 'Get Categories',
        request: {
            method: 'GET',
            url: 'https://api.practicesoftwaretesting.com/categories'
        }
    },
    {
        name: 'Get Category By ID',
        request: {
            method: 'GET',
            url: 'https://api.practicesoftwaretesting.com/categories/tree/{categoryId}',
        }
    },
    {
        name: 'Create Category',
        request: {
            method: 'POST',
            url: 'https://api.practicesoftwaretesting.com/categories',
            data: {
                name: 'New Category'
            }
        }
    },
    {
        name: 'Update Category (PATCH)',
        request: {
            method: 'PATCH',
            url: 'https://api.practicesoftwaretesting.com/categories/{categoryId}',
            data: {
                name: 'Updated Category Name', // Field yang diperbarui
                slug: 'updated-category-name' // Bisa ditambahkan jika perlu
            }
        }
    },
    {
        name: 'Delete Category By ID',
        request: {
            method: 'DELETE',
            url: 'https://api.practicesoftwaretesting.com/categories/{categoryId}', // URL dengan placeholder
        },
    }
];

module.exports = apiCollection;

