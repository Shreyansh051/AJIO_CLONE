document.getElementById("addtobag").addEventListener('click',()=>{
  
    let arr = JSON.parse(localStorage.getItem("cart")) || []
    let obj = {
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
      }

  arr.push(obj)
  localStorage.setItem("cart",JSON.stringify(arr))

      
})