const { v4: uuidv4 } = require('uuid'); 

const positiveScenarios = [
    {
        name: 'Create Valid Category',
        request: {
            data: {
                name: `New Category ${uuidv4()}`,  
                slug: `new-category-${uuidv4()}`   
            }
        },
        expectedStatusCode: 201  
    }
];

module.exports = positiveScenarios;
