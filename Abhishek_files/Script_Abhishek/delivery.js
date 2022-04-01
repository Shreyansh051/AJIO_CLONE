
let arr2 = [
      {
          "HouseNo" : "b-14",
          "Mobile"  : 98262697742,
          "PinCode" :  474022 ,
          "Locality": "Hanuman Gali,Lajpat Nagar",
          "City"  :    "Banaras",
          "State" :     "Uttar Pradesh"
          
      }
]
// localStorage.setItem("address",JSON.stringify(arr2))

let arr3 =  JSON.parse(localStorage.getItem("address"))   || []

if(arr3.length === 1){
    document.getElementById("first").innerText = `${arr3[0].HouseNo},${arr3[0].Locality} `
    document.getElementById("second").innerText = ` ${arr3[0].City},${arr3[0].State}`
    document.getElementById("third").innerText = ` India ${arr3[0].PinCode}`
    document.getElementById("fourth").innerText = ` Moblile ${arr3[0].Mobile}`
}


// MODAL JAVA SCRIPT
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

btn.addEventListener("click",()=>{
    modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Form Submission

document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault()
   let form1 = document.getElementById("form")
   let flatNo1 = form1.flatNo.value
   let locality1 = form1.locality.value
   let phoneNo1 = form1.phoneNo.value
   let pinCode1 = form1.pinCode.value
   let city1 = form1.city.value
   let state1 = form1.state.value
   
   let obj1 = {
    
    "HouseNo" : flatNo1,
    "Mobile"  : phoneNo1,
    "PinCode" :  pinCode1,
    "Locality": locality1,
    "City"  :    city1,
    "State" :    state1
        
         
   }
  
   let arr4 = []
   arr4.push(obj1)
   localStorage.setItem("address",JSON.stringify(arr4))

   let arr3 =  JSON.parse(localStorage.getItem("address"))   || []

if(arr3.length === 1){
    document.getElementById("first").innerText = `${arr3[0].HouseNo},${arr3[0].Locality} `
    document.getElementById("second").innerText = ` ${arr3[0].City},${arr3[0].State}`
    document.getElementById("third").innerText = ` India ${arr3[0].PinCode}`
    document.getElementById("fourth").innerText = ` Moblile ${arr3[0].Mobile}`
}
   
})

// Variables for differect prices


let price = 0
let discount_money = 0
let bag_total = 0



let arrCart = JSON.parse(localStorage.getItem("cart"))
arrCart.map((ele) => {
    let diffVal = ele.MRP-ele.offer_price
    let x = Math.floor(Math.random()*6)+12
      let som = `
       
          <div class="d1">
          <img src="${ele.display_img}">
          <div class="d2">
          <p class="date"> ${x} April</p>
          <p>${ele.brand}</p>
          <p>${ele.name}</p>
         
          </div>
          </div>
          
      
      `
      price += ele.quantity*ele.offer_price
      discount_money += ele.quantity*diffVal
      bag_total  += ele.quantity*ele.MRP

      document.getElementById("mainItems").innerHTML += som
})

 let off = localStorage.getItem("couponOff")
 off = +off
 console.log(off,typeof(off))

document.getElementById("price").innerHTML = `<p>&#8377;  ${price - off}<p>`
document.getElementById("bag_discount").innerHTML = `<p>-&#8377;  ${discount_money}<p>`
document.getElementById("bag_total").innerHTML = `<p>&#8377;  ${bag_total}<p>`


function toPay(){
    window.location.href = "payment.html"
}