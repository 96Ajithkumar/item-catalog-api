require('dotenv').config()

const productData = require('./data/products')
const {connectDB} = require('./config/db')
const Product = require('./models/Product')

// var fs = require("fs")
connectDB()

const importData = async () => {
  try {
    await Product.deleteMany({})

    await Product.insertMany(productData)

    console.log('Data Import Success')

    process.exit()
  } catch (error) {
    console.error('Error with data import', error)
    process.exit(1)
  }
}


// const formatData = () => {
//   const test = [];
//   productList.forEach(element => {
//     test.push({
//       name: element.title,
//       imageUrl: element.image,
//       description: element.description,
//       price: element.price,
//       countInStock: element.rating.count,
//     })
//   });

//   fs.writeFileSync("input.txt", JSON.stringify(test));
// };

importData()
// formatData()
