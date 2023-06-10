const categoryModel = require('./CategoryModel')

const getAllCategory = async() =>{
    try {
        // return data
        return await categoryModel.find(); // select * categories
    } catch (error) {
        console.log("Error Service Category: ", error)
    }
}

module.exports = {getAllCategory}

var data = [{
    "_id": 1,
    "name": "Willyt"
  }, {
    "_id": 2,
    "name": "Zach"
  }, {
    "_id": 3,
    "name": "Jesselyn"
  }, {
    "_id": 4,
    "name": "Phil"
  }, {
    "_id": 5,
    "name": "Lorine"
  }, {
    "_id": 6,
    "name": "Hannis"
  }, {
    "_id": 7,
    "name": "Ogdan"
  }, {
    "_id": 8,
    "name": "Bernice"
  }, {
    "_id": 9,
    "name": "Raina"
  }, {
    "_id": 10,
    "name": "Terrye"
  }]