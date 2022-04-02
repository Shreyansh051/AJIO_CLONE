

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
      }

      // {
      //   "_id": {
      //     "$oid": "61b87f8bd599c29bf7d14a0e"
      //   },
      //   "display_img": "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product2/display.jpeg",
      //   "images": [
      //     "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product2/img1.jpeg",
      //     "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product2/img2.jpeg",
      //     "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product2/img3.jpeg"
      //   ],
      //   "name": "Panelled Zip-Front Training Tracksuit Jacket",
      //   "brand": "PERFORMAX",
      //   "price": 1349,
      //    "quantity" : 1,
      //    "size": "M",
      //   "MRP": 1499,
      //   "discount": 10,
      //   "offer_price": 1274,
      //   "color": "Jet-Black",
      //   "category": "MEN",
      //   "sub_category": "Jackets & Coats",
      //   "createdAt": {
      //     "$date": "2021-12-14T11:27:07.643Z"
      //   },
      //   "updatedAt": {
      //     "$date": "2021-12-14T11:27:07.643Z"
      //   }
      // },
      // {
      //   "_id": {
      //     "$oid": "61b8804cd599c29bf7d14a11"
      //   },
      //   "display_img": "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product3/display.jpeg",
      //   "images": [
      //     "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product3/img1.jpeg",
      //     "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product3/img2.jpeg",
      //     "https://raw.githubusercontent.com/alhassan069/AJIO/main/src/Public/images/mensImages/product3/img3.jpeg"
      //   ],
      //   "name": "Quilted Zip-Front Jackets with Insert Pockets",
      //   "brand": "PERFKT-U",
      //   "price": 1033,
      //    "quantity" : 1,
      //    "size": "S",
      //   "MRP": 3333,
      //   "discount": 69,
      //   "offer_price": 1000,
      //   "color": "",
      //   "category": "MEN",
      //   "sub_category": "Jackets & Coats",
      //   "createdAt": {
      //     "$date": "2021-12-14T11:30:20.601Z"
      //   },
      //   "updatedAt": {
      //     "$date": "2021-12-14T11:30:20.601Z"
      //   }
      // },



]

localStorage.setItem("cart",JSON.stringify(arrCart))
// localStorage.clear()


 let  arr11 =    JSON.parse(localStorage.getItem("cart")) || []

// Variables for differect prices
let price = 0
let discount_money = 0
let bag_total = 0

// Main display fucntion
function displayCart(arr){
arr.map((ele) =>{
    let diffVal = ele.MRP-ele.offer_price
    
    
    
     let som = ` 
       <div id="singleItem">
       <img src="${ele.display_img}">
       <p>${ele.name}</p>
       <p>
       <span id="sizo">
          Size ${ele.size}
       </span>
       <select class='choose'  onchange="changeSize(${JSON.stringify(ele).split('"').join("&quot;")})" id="sel1">
        <option selected disabled hidden value="">Sizes</option>
        <option value="S">Sizes S</option>
        <option value="M">Sizes M</option>
        <option value="L">Sizes L</option>
        <option value="XL">Sizes XL</option>
        <option value="XXL">Sizes XXL</option>
        </select>
        </p>
        

       <p>Qty ${ele.quantity} 
       <br>
       <br>
       
       <button onclick="Increase(${JSON.stringify(ele).split('"').join("&quot;")})">Add</button><br>
       <button onclick="Decrease(${JSON.stringify(ele).split('"').join("&quot;")})">Rem</button>

       
        </p>
       <div class="del_btn_div">
       <button id="del_btn" onclick="Delete(${JSON.stringify(ele).split('"').join("&quot;")})">Delete</button>
       </div>
       <div id="last_part">
       <p>Savings : Rs.${diffVal}</p>
       <p><s>Rs.${ele.MRP}</s><span>(${ele.discount}&#x25;)</span></p>
       <p id="offer_price"><span>Rs.${ele.offer_price} </span></p>
       <button onclick="toCloset()">Move to Closet</button>
       </div>
       </div>
     
              `
        price += ele.quantity*ele.offer_price
        discount_money += ele.quantity*diffVal
        bag_total  += ele.quantity*ele.MRP

         document.getElementById("items").innerHTML += som     
})

let off = localStorage.getItem("couponOff")
 off = +off
 

document.getElementById("price").innerHTML = `<p>&#8377;  ${price-off}<p>`
document.getElementById("bag_discount").innerHTML = `<p>-&#8377;  ${discount_money}<p>`
document.getElementById("bag_total").innerHTML = `<p>&#8377;  ${bag_total}<p>`


}

displayCart(arr11)


// Increasing Function

function Increase(ele){
  
    let arr145 = JSON.parse(localStorage.getItem("cart"))
   
    for(let i in arr145 ){
       
        if(arr145[i].name === ele.name){
            console.log(arr145[i].quantity,typeof(arr145[i].quantity))
            console.log("yes")
            arr145[i].quantity += 1
            console.log( arr145[i].quantity)
        }
    }
    

    localStorage.setItem("cart",JSON.stringify(arr145))
    document.getElementById("items").innerHTML = ""
    price = 0
    discount_money = 0
    bag_total = 0
    displayCart(arr145)
}

// Decreasing Function

function Decrease(ele){
  
    let arr145 = JSON.parse(localStorage.getItem("cart"))
   
    for(let i in arr145 ){
       
        if(arr145[i].name === ele.name){
            if(arr145[i].quantity !== 0){
           
           
            arr145[i].quantity += -1
            console.log( arr145[i].quantity)
            }
        }
    }
    

    localStorage.setItem("cart",JSON.stringify(arr145))
    document.getElementById("items").innerHTML = ""
    price = 0
    discount_money = 0
    bag_total = 0
    displayCart(arr145)

}


// Delete Function
let cnt = 0
function Delete(ele){
   
    if(cnt===0){
      cnt++
      alert("If You press delete button again this item will get deleted")
    }
     else if(cnt ===1){
      cnt++
    }

    
    if(cnt === 2){
      cnt = 0
    let arr145 = JSON.parse(localStorage.getItem("cart"))
    let arrNew = arr145.filter((i) => {
           return i.name !== ele.name
    })
    localStorage.setItem("cart",JSON.stringify(arrNew))
    document.getElementById("items").innerHTML = ""
    price = 0
    discount_money = 0
    bag_total = 0
    displayCart(arrNew)
    }
   
    
}


document.getElementById("rad1").addEventListener("click",function(){
       let val12 = document.getElementById("rad1").value
       let v4 = document.getElementById("rightHere")
       v4.value = val12
})

document.getElementById("rad2").addEventListener("click",function(){
    let val12 = document.getElementById("rad2").value
    let v4 = document.getElementById("rightHere")
    v4.value = val12
})

document.getElementById("rad3").addEventListener("click",function(){
    let val12 = document.getElementById("rad3").value
    let v4 = document.getElementById("rightHere")
    v4.value = val12
})

document.getElementById("apply").addEventListener("click",() => {

    
      let couponVal = document.getElementById("rightHere").value
  

      let arr2 = JSON.parse(localStorage.getItem("cart"))
      price = 0
      arr2.map(function(ele){
        price += ele.quantity*ele.offer_price
      })
      amount = price

      if(couponVal === "Welcome"){
         let  amountNew =  amount - 423.75
         let off = 423.75
         obj1 = {
          off : 423.75,
          coupon : "Bad Day"
        }
        localStorage.setItem("couponOff",off)
        localStorage.setItem("couponObj",JSON.stringify(obj1))
         document.getElementById("price").innerHTML = `<p>&#8377;  ${amountNew}<p>`
         document.getElementById("yourSaving").innerText = `You save Rs.423.75`
         document.getElementById("whichCoupon").innerText = `Coupon Applied : WELCOME`
         document.getElementById("magic").style.display = "block"
         
          
      }
     else if(couponVal === "Frist Buy"){
        let  amountNew =  amount - 500.75
        let off = 500.75
        obj1 = {
          off : 500.75,
          coupon : "Bad Day"
        }
        localStorage.setItem("couponOff",off)
        localStorage.setItem("couponObj",JSON.stringify(obj1))
        document.getElementById("price").innerHTML = `<p>&#8377;  ${amountNew}<p>`
        document.getElementById("yourSaving").innerText = `You save Rs.500.75`
        document.getElementById("whichCoupon").innerText = `Coupon Applied : FIRST BUY`
        document.getElementById("magic").style.display = "block"
         
     }

     else if(couponVal === "Bad day"){
      let  amountNew =  amount - 300
      let off = 300
      obj1 = {
        off : 300,
        coupon : "Bad Day"
      }
      localStorage.setItem("couponOff",off)
      localStorage.setItem("couponObj",JSON.stringify(obj1))
      document.getElementById("price").innerHTML = `<p>&#8377;  ${amountNew}<p>`
      document.getElementById("yourSaving").innerText = `You save Rs.300`
        document.getElementById("whichCoupon").innerText = `Coupon Applied : BAD DAY`
        document.getElementById("magic").style.display = "block"
       
   }
     
})


// magic rework
let off2 = JSON.parse(localStorage.getItem("couponObj"))

if(off2){
document.getElementById("yourSaving").innerText = `You save Rs.${off2.off}`
document.getElementById("whichCoupon").innerText = `Coupon Applied : ${off2.coupon}`
document.getElementById("magic").style.display = "block"
}
 
 
document.getElementById("jaadu_btn").addEventListener("click",()=>{
    localStorage.removeItem("couponObj")
    let off = 0
    localStorage.setItem("couponOff",off)

    let arr2 = JSON.parse(localStorage.getItem("cart"))
      price = 0
      arr2.map(function(ele){
        price += ele.quantity*ele.offer_price
      })
      amount = price
      document.getElementById("price").innerHTML = `<p>&#8377;  ${amount}<p>`

      document.getElementById("magic").style.display = "none"

})


// TO CLOSET PAGE
function toCloset(){
  window.location.href = "closet.html"
}


function toDeliveryPage(){
  window.location.href = "delivery.html"
}

function changeSize(ele){
//   console.log(ele)
   let val = document.getElementsByClassName("choose")
   let arr = JSON.parse(localStorage.getItem("cart"))
   for(let i in arr){
     if(val[i].value){
        arr[i].size = val[i].value
     }
   }
   localStorage.setItem("cart",JSON.stringify(arr))
   document.getElementById("items").innerHTML = ""
    price = 0
    discount_money = 0
    bag_total = 0
   displayCart(arr)


  }


