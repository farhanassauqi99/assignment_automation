// /** @type {import('jest').Config} */
// const config = {
//     verbose: true,
//     "reporters": [
//         "default",
//         "jest-html-reporters"
//     ],
// };
// module.exports = config;

// const config = {
//     verbose: true,
//     reporters: [
//       "default",
//       "jest-html-reporters"
//     ],
//     moduleNameMapper: {
//       '^axios$': 'axios'
//     }
//   };

//   module.exports = config;

const config = {
    verbose: true,
    reporters: ["default", "jest-html-reporters"],
    testEnvironment: "node",
    testTimeout: 10000, // Tambahkan timeout jika perlu
};

module.exports = config;


