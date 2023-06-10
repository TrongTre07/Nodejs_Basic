
const productService = require('./ProductService');

const getAllProduct = async() =>{
    try{
        return await productService.getAllProduct();
    }catch(error){
        console.log('get product: ', error)
        throw error;
    }
}

const deleteProductById = async (id) =>{
    try{
        return await productService.deleteProductById(id);
    }catch{
        console.log('Delete: ', error)
        return false;
    }
}

const addProduct = async (name, price, quantity, image, category) =>{
    try {
        return await productService.addProduct(name, price, quantity, image, category)
    } catch (error) {
        return false
    }
}

const getProductById = async(id) =>{
    try {
        return await productService.getProductById(id);
    } catch (error) {
        console.log("get pr id controller: ", error)
    }
}

const updateProductById = async(id, name, price, quantity, image, category) =>{
    try {
        return await productService.updateProductById(id, name, price, quantity, image, category)
    } catch (error) {
        console.log("update pr controller: ", error)
    }
}

const searchProduct = async(name) =>{
    try {
        return await productService.searchProduct(name)
    } catch (error) {
        console.log("search product error: ", error)
    }
    return null;
}

module.exports = {getAllProduct, deleteProductById, addProduct, getProductById, updateProductById, searchProduct}