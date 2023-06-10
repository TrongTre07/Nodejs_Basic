const categoryService = require('./CategoryService')

const getAllCategory = async() =>{
    try {
        return categoryService.getAllCategory();
    } catch (error) {
        
    }
}
module.exports = {getAllCategory}