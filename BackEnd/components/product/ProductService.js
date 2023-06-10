const productModel = require("./ProductModel");

const getAllProduct = async () => {
  try {
    // return data;
    return await productModel.find()
  } catch (error) {
    console.log("Get all products error: ", error);
    throw error;
  }
};
// skip = (page - 1) * size
// limit = size

const deleteProductById = async (id) => {
  try {
    // const index = data.findIndex(
    //   (item) => item._id.toString() == id.toString()
    // );
    // if (index !== -1) {
    //   data.splice(index, 1);
    //   console.log(data);
    //   return true;
    // }
    // return false;
    await productModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.log("Delete Got Error", error);
    throw error;
  }
  return false;
};

const addProduct = async (name, price, quantity, image, category) => {
  try {
    // const newProduct = {
    //   _id: data.length + 1,
    //   name,
    //   price,
    //   quantity,
    //   image,
    //   category,
    // };
    // data.push(newProduct);
    // return true;

    const newProduct = new productModel({
      name,
      price,
      quantity,
      image,
      category,
    });
    const product = await newProduct.save();
    console.log("PRODUCT: ", product)
    return true
  } catch (error) {
    console.log("Add product got error: ", error);
    return false;
  }
  return false;
};

const getProductById = async (id) => {
  try {
    // const product = data.find((item) => item._id.toString() == id.toString());
    // return product;

    return productModel.findById(id);
  } catch (error) {
    console.log("get pr id error: ", error);
    return null;
  }
  return null;
};

const updateProductById = async (
  id,
  name,
  price,
  quantity,
  image,
  category
) => {
  try {
    // const product = data.find((item) => item._id.toString() == id.toString());
    // if (product) {
    //   data = data.map((item) => {
    //     if (item._id.toString() == id.toString()) {
    //       item.name = name ? name : item.name;
    //       item.price = price ? price : item.price;
    //       item.quantity = quantity ? quantity : item.quantity;
    //       item.image = image ? image : item.image;
    //       item.category = category ? category : item.category;
    //     }
    //     return item;
    //   });
    //   return true;
    // }

    const item = await productModel.findById(id);
    if (item) {
      item.name = name ? name : item.name;
      item.price = price ? price : item.price;
      item.quantity = quantity ? quantity : item.quantity;
      item.image = image ? image : item.image;
      item.category = category ? category : item.category;
      await item.save();
      return true;
    }
  } catch (error) {
    console.log("Update pr id error: ", error);
  }
  return false;
};

const searchProduct = async (keyword) => {
  try {
    let query = {
      price: { $gt: 10, $lt: 100 },
      name: { $regex: keyword, $options: "i" },
      $or: [{ quantity: { $gte: 20 } }, { quantity: { $lte: 40 } }],
    };
    let product = await productModel.find(query);
    return product;
  } catch (error) {
    console.log("Search product error: ", error);
  }
};

var data = [
  {
    _id: 1,
    name: "Berge-Dickens",
    price: 37,
    quantity: 90,
    image: "https://picsum.photos/id/237/200/300",
    category: 1,
  },
  {
    _id: 2,
    name: "Muller LLC",
    price: 59,
    quantity: 94,
    image: "https://picsum.photos/id/237/200/300",
    category: 2,
  },
  {
    _id: 3,
    name: "Wisoky-Howell",
    price: 90,
    quantity: 23,
    image: "https://picsum.photos/id/237/200/300",
    category: 3,
  },
  {
    _id: 4,
    name: "Keeling-Nader",
    price: 88,
    quantity: 51,
    image: "https://picsum.photos/id/237/200/300",
    category: 1,
  },
  {
    _id: 5,
    name: "Christiansen, Herzog and Torp",
    price: 67,
    quantity: 94,
    image: "https://picsum.photos/id/237/200/300",
    category: 2,
  },
  {
    _id: 6,
    name: "Ferry-Ziemann",
    price: 83,
    quantity: 12,
    image: "https://picsum.photos/id/237/200/300",
    category: 5,
  },
  {
    _id: 7,
    name: "Nader, Ruecker and Waters",
    price: 46,
    quantity: 80,
    image: "https://picsum.photos/id/237/200/300",
    category: 6,
  },
  {
    _id: 8,
    name: "D'Amore, O'Connell and Armstrong",
    price: 88,
    quantity: 27,
    image: "https://picsum.photos/id/237/200/300",
    category: 8,
  },
  {
    _id: 9,
    name: "Mann and Sons",
    price: 24,
    quantity: 93,
    image: "https://picsum.photos/id/237/200/300",
    category: 9,
  },
];

module.exports = {
  getAllProduct,
  deleteProductById,
  addProduct,
  getProductById,
  updateProductById,
  searchProduct,
};
