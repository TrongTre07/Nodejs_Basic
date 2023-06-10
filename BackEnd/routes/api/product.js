var express = require('express');
var router = express.Router();
const {authenAPI} = require("../../middle/Authen")
const productController = require('../../components/product/ProductController')
const upload = require('../../middle/UploadFile')

router.get('/get-all',[], async (req, res, next)=>{
    try {
        const products = await productController.getAllProduct();
        return res.status(200).json({result: true, product: products})
    } catch (error) {
        return res.status(500).json({result: false, products: null})
    }
})

//http://localhost:3000/api/products/search?name=
router.get('/search',[authenAPI], async (req, res, next) =>{
    try {
        const {name} = req.query;
        const products = await productController.searchProduct(name)
        console.log("PRPDUCT: ", products)
        return res.status(200).json({result: true, product: products})
    } catch (error) {
        return res.status(500).json({result: false, product: null})
    }
})

// up anh
//http://localhost:3000/api/products/upload-image
router.post('/upload-image', [upload.single('image')],async (req, res, next)=>{
    try {
        let {file} = req;
        if(file) {
            let path = `http://192.168.137.202:3000/images/${file.filename}`
            return res.status(200).json({result:true, path})
        }
    } catch (error) {
        console.log("Upload File got error: ", error)
        return res.status(500).json({result: false})
    }
})

//http://localhost:3000/api/products/upload-images
router.post('/upload-images', [upload.fields( [
    { 
      name: 'images', 
      maxCount: 10 
    }
  ])],async (req, res, next)=>{
    try {
        let {file} = req;
        if(file) {
            let path = `http://192.168.137.202:3000/images/${file.filename}`
            return res.status(200).json({result:true, path})
        }
    } catch (error) {
        console.log("Upload File got error: ", error)
        return res.status(500).json({result: false})
    }
})

module.exports = router;
