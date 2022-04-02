

document.getElementById("addtobag").addEventListener('click',()=>{
  
    let arr = JSON.parse(localStorage.getItem("cart")) || []
    let obj = {
        
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
          }


    
   

  arr.push(obj)
  localStorage.setItem("cart",JSON.stringify(arr))

      
})

