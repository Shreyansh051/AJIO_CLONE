let arrCart = [

    {
        "_id": {
          "$oid": "61b86fa5e9e4cf5ea28ae9ef"
        },
        "display_img": "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product1/display.jpeg",
        "images": [
          "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product1/img1.jpeg",
          "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product1/img2.jpeg"
        ],
        "name": "Running Zip-Front Dobby Jacket",
        "brand": "PERFORMAX",
        "price": 899,
        "quantity" : 1,
        "size": "L",
        "MRP": 999,
        "discount": 10,
        "offer_price": 849,
        "color": "Dark-Blue",
        "category": "MEN",
        "sub_category": "Jackets",
        "createdAt": {
          "$date": "2021-12-14T10:19:17.427Z"
        },
        "updatedAt": {
          "$date": "2021-12-14T10:19:17.427Z"
        }
      },

      {
        "_id": {
          "$oid": "61b87f8bd599c29bf7d14a0e"
        },
        "display_img": "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product2/display.jpeg",
        "images": [
          "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product2/img1.jpeg",
          "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product2/img2.jpeg",
          "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product2/img3.jpeg"
        ],
        "name": "Panelled Zip-Front Training Tracksuit Jacket",
        "brand": "PERFORMAX",
        "price": 1349,
         "quantity" : 1,
         "size": "M",
        "MRP": 1499,
        "discount": 10,
        "offer_price": 1274,
        "color": "Jet-Black",
        "category": "MEN",
        "sub_category": "Jackets & Coats",
        "createdAt": {
          "$date": "2021-12-14T11:27:07.643Z"
        },
        "updatedAt": {
          "$date": "2021-12-14T11:27:07.643Z"
        }
      },
      {
        "_id": {
          "$oid": "61b8804cd599c29bf7d14a11"
        },
        "display_img": "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product3/display.jpeg",
        "images": [
          "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product3/img1.jpeg",
          "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product3/img2.jpeg",
          "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product3/img3.jpeg"
        ],
        "name": "Quilted Zip-Front Jackets with Insert Pockets",
        "brand": "PERFKT-U",
        "price": 1033,
         "quantity" : 1,
         "size": "S",
        "MRP": 3333,
        "discount": 69,
        "offer_price": 1000,
        "color": "",
        "category": "MEN",
        "sub_category": "Jackets & Coats",
        "createdAt": {
          "$date": "2021-12-14T11:30:20.601Z"
        },
        "updatedAt": {
          "$date": "2021-12-14T11:30:20.601Z"
        }
      },



]



document.getElementById("addtobag").addEventListener('click',()=>{
  
    let arr = JSON.parse(localStorage.getItem("cart")) || []
   let obj = {
    "_id": {
      "$oid": "61b86fa5e9e4cf5ea28ae9ef"
    },
    "display_img": "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product1/display.jpeg",
    "images": [
      "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product1/img1.jpeg",
      "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product1/img2.jpeg"
    ],
    "name": "Running Zip-Front Dobby Jacket",
    "brand": "PERFORMAX",
    "price": 899,
    "quantity" : 1,
    "size": "L",
    "MRP": 999,
    "discount": 10,
    "offer_price": 849,
    "color": "Dark-Blue",
    "category": "MEN",
    "sub_category": "Jackets",
    "createdAt": {
      "$date": "2021-12-14T10:19:17.427Z"
    },
    "updatedAt": {
      "$date": "2021-12-14T10:19:17.427Z"
    }
  }

  arr.push(obj)
  localStorage.setItem("cart",JSON.stringify(arr))

      
})