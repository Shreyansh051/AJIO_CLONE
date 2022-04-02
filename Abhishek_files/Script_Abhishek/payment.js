
let price = 0
let discount_money = 0
let bag_total = 0



let arrCart = JSON.parse(localStorage.getItem("cart"))
arrCart.map((ele) => {
    let diffVal = ele.MRP-ele.offer_price
    let x = Math.floor(Math.random()*6)+12
     
      price += ele.quantity*ele.offer_price
      discount_money += ele.quantity*diffVal
      bag_total  += ele.quantity*ele.MRP

     
})

let off = localStorage.getItem("couponOff")
 off = +off
 console.log(off,typeof(off))


document.getElementById("price").innerHTML = `<p>&#8377;  ${price-off}<p>`
document.getElementById("bag_discount").innerHTML = `<p>-&#8377;  ${discount_money}<p>`
document.getElementById("bag_total").innerHTML = `<p>&#8377;  ${bag_total}<p>`





// Changing payment different forms windows by using button event add listeners

document.getElementById("b5").addEventListener("click",()=>{
      let x1 = document.getElementById('t3')
      x1.innerHTML = ""
      x1.innerHTML += `
      
      <div class="cash">
                       <h3>Cash on Delivery</h3>
                       <p class="nano">For safe, contactless and hassle free delivery, pay using card/wallet/netbanking
                    </p>
                    <button class="donebtn" onclick="theEnd()">Place Order</button>
                    <p class="bottom">
                        By placing this order, you agree to AJIO's T&C
                    </p>
                   </div>
      
      `

})

document.getElementById("b4").addEventListener("click",()=>{
  let x1 = document.getElementById('t3')
  x1.innerHTML = ""
  x1.innerHTML += `
  
        <div class="upi">
        <h3>Enter your UPI ID</h3>
        <p class="nano">Pay instantly from your bank using your UPI ID.
        </p>
        <p class="blue">How to find UPI ID?</p>
        <form>
        <input class="inp" type="text" required placeholder="1234567890@upi">
      <div class="checky">
            <div class="c4">
            <input  type="checkbox">
          </div>
            <p class="checkbox">Save this UPI ID for faster checkout</p>
        </div>
      <button type="submit" class="donebtn" onclick="theEnd()" >Place Order</button>
      </form>
      <p class="bottom">By placing this order, you agree to AJIO's T&C</p>
      </div>
  
  `

})


document.getElementById("b3").addEventListener("click",()=>{
  let x1 = document.getElementById('t3')
  x1.innerHTML = ""
  console.log("wallet")
  x1.innerHTML += `
  
  <div class="wallet">
                        <h3>Select Wallet</h3>
                        <div class="flex">
                          <div class="img-names">
                            <div class="img">
                                <img src="https://assets.ajio.com/static/peImages/Paytm.png" alt="">
                            </div>
                            <p class="names">Paytm</p>
                            </div>
                            <div class="img-names">
                            <div class="img">
                                <img src="https://assets.ajio.com/static/peImages/Phone-pe.png" alt="">
                            </div>
                            <p class="names">PhonePe</p>
                            </div>
                            <div class="img-names">
                            <div class="img">
                                <img src="https://assets.ajio.com/static/peImages/Jio-Money.png" alt="">
                            </div>
                            <p class="names">Jio </p>
                            </div>
                            <div class="img-names">
                               <div class="img">
                                <img src="https://assets.ajio.com/static/peImages/Mobikwik.png" alt="">
                                </div>
                              <p class="names">MOBIKWIK</p>
                         </div>
                         </div>
                         <div class='radio'>
                         <input type="radio" name="wallet">
                         <input type="radio" name="wallet">
                         <input type="radio" name="wallet">
                         <input type="radio" name="wallet">
                         </div>
                         <button class="donebtn" onclick="theEnd()">Place Order</button>
                         <p class="bottom">
                          By placing this order, you agree to AJIO's T&C
                      </p>
                       
                    </div> 
                    `

})


document.getElementById("b2").addEventListener('click',function(){
  console.log('ara')
  let x1 = document.getElementById('t3')
  x1.innerHTML = ""
  console.log("wallet")
  x1.innerHTML += `
     
  <div class="card">

                    <form>
                    <h3>Add New Card</h3>
                    <p class="tags">Card Number</p>
                    <input class="topTwo padLeft focus" type="text" required>
                    <p class="tags">Name on Card</p>
                    <input class="topTwo padLeft focus" type="text" required>
                    <p class="tags">Expiration Date</p>
                    <div class="three">
                    <select required class="select1 hov1 focus">
                        <option  selected disabled hidden value="">Month</option>
                        <option value="">Jan</option>
                        <option value="">Feb</option>
                        <option value="">March</option>
                        <option value="">April</option>
                        <option value="">May</option>
                        <option value="">June</option>
                        <option value="">July</option>
                        <option value="">August</option>
                        <option value="">September</option>
                        <option value="">October</option>
                        <option value="">November</option>
                        <option value="">December</option>
                    </select>
                    <select required class="select1 hov1 focus">
                        <option  selected disabled hidden value="">Year</option>
                        <option value="">2022</option>
                        <option value="">2023</option>
                        <option value="">2024</option>
                        <option value="">2025</option>
                        <option value="">2026</option>
                        <option value="">2027</option>
                        <option value="">2028</option>
                        <option value="">2029</option>
                        <option value="">2030</option>
                        <option value="">2031</option>
                        <option value="">2032</option>
                        <option value="">2033</option>
                    </select>
                    <input required class="select1 padLeft focus" type="text" placeholder="CVV">
                </div>
                   
                    <div class="checky">
                        <div class="c4">
                        <input  type="checkbox">
                    </div>
                        <p class="checkbox">Save this card securely</p>
                    </div>

                    <button type="submit" class="donebtn" onclick="theEnd()" >Place Order</button>
                
                    <p class="bottom">By placing this order, you agree to AJIO's T&C</p>
                    </form>
                  </div> 
     
  `
})


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

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


document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault()
     document.getElementById("myBtn").click()
     setTimeout(() => {
        window.location.href="../../index.html"
     }, 2000);
});
function theEnd(){
  console.log("end")
  alert('Order Placed')

  setTimeout(() => {
      window.location.href = '../../index.html'
  }, 100);
 
}