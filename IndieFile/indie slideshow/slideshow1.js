function slide()
{
    return `   <div class="slider">
    <div class="slides">
        <input type="radio" name="radio_btn" id="radio1">
        <input type="radio" name="radio_btn" id="radio2">
        <input type="radio" name="radio_btn" id="radio3">
        


        <div class="slide first">
        
            <img  class="zoom_img" src="https://assets.ajio.com/cms/AJIO/WEB/15102021-D-ILP-festivecollective-sarees-upto80.jpg" alt="">
        </div>

            <div class="slide">

               <img  class="zoom_img"src="https://assets.ajio.com/cms/AJIO/WEB/15102021-D-ILP-festivecollective-templejewellery-upto80.jpg" alt="">
           </div> 

           <div class="slide">

               <img  class="zoom_img"src="https://assets.ajio.com/cms/AJIO/WEB/15102021-D-ILP-festivecollective-apparel-upto80.jpg" alt="">
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
<label for="radio1" class="manual-btn"></label>
<label for="radio2" class="manual-btn"></label>
<label for="radio3" class="manual-btn"></label>

</div>
       
    </div>
</div>


`
}
export default slide