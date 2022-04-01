function slide()
{
    return `   <div class="slider">
    <div class="slides">
        <input type="radio" name="radio_btn" id="radio1">
        <input type="radio" name="radio_btn" id="radio2">
        <input type="radio" name="radio_btn" id="radio3">
        <input type="radio" name="radio_btn" id="radio4">
        <input type="radio" name="radio_btn" id="radio5">
    
        


        <div class="slide first">
        
            <img  class="zoom_img" src="https://assets.ajio.com/cms/AJIO/WEB/01042022-D-Unisex-topbannercarousel-p1-ajiobirthday-5080.jpg" alt="">
        </div>

            <div class="slide">

               <img  class="zoom_img"src="https://assets.ajio.com/cms/AJIO/WEB/01042022-D-Unisex-topbannercarousel-p2-reebok-3060.jpg" alt="">
           </div> 

           <div class="slide">

               <img  class="zoom_img"src="https://assets.ajio.com/cms/AJIO/WEB/01042022-D-Unisex-topbannercarousel-p3-brands-4090.jpg" alt="">
           </div> 

           <div class="slide">

               <img  class="zoom_img"src="https://assets.ajio.com/cms/AJIO/WEB/01042022-D-Unisex-topbannercarousel-p4-tops&tees-startingat199.jpg" alt="">
           </div> 
           <div class="slide">

           <img  class="zoom_img"src="https://assets.ajio.com/cms/AJIO/WEB/01042022-D-Unisex-topbannercarousel-p5-brands-4070.jpg" alt="">
       </div> 

       
           

<!-- autonavigation part -->
<div class="navigation-auto">
<div class="auto-btn1"></div>
<div class="auto-btn2"></div>
<div class="auto-btn3"></div>
<div class="auto-btn4"></div>
<div class="auto-btn5"></div>
</div>
<!-- 
manual navigation -->

<div class="navigation-manual">
<label for="radio1" class="manual-btn"></label>
<label for="radio2" class="manual-btn"></label>
<label for="radio3" class="manual-btn"></label>
<label for="radio4" class="manual-btn"></label>
<label for="radio5" class="manual-btn"></label>


</div>
       
    </div>
</div>


`
}
export default slide