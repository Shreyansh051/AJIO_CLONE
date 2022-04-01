function slide()
{
    return `    
    <div class="slider">
        <div class="slides">
            <input type="radio" name="radio_btn1" id="r1">
            <input type="radio" name="radio_btn1" id="r2">
            <input type="radio" name="radio_btn1" id="r3">
         
          


            <div class="slide second">
                <img class="zoom_img" src="https://assets.ajio.com/cms/AJIO/WEB/01042022-D-KHP-banner1-p1-topwear-under499.jpg" alt="">
            </div>
                <div class="slide">

                   <img class="zoom_img" src="https://assets.ajio.com/cms/AJIO/WEB/01042022-D-KHP-banner1-p2-bestofkidswear-min40extraupto30.jpg" alt="">
               </div> 
               <div class="slide">

                   <img class="zoom_img" src="https://assets.ajio.com/cms/AJIO/WEB/01042022-D-KHP-banner1-p3-bestbrands-min40.jpg" alt="">
               </div> 
              
<!-- autonavigation part -->
<div class="navigation-auto">
    <div class="auto-btn1"></div>
    <div class="auto-btn2"></div>
    <div class="auto-btn3"></div>
   
  
</div>
<!-- 
manual navigation -->

<div class="navigation-manual">
    <label for="r1" class="manual-btn"></label>
    <label for="r2" class="manual-btn"></label>
    <label for="r3" class="manual-btn"></label>

</div>
           
        </div>
    </div>`
}
export default slide