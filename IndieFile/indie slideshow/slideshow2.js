function slide()
{
    return `    
    <div class="slider">
        <div class="slides">
            <input type="radio" name="radio_btn1" id="r1">
            <input type="radio" name="radio_btn1" id="r2">
            <input type="radio" name="radio_btn1" id="r3">
            <input type="radio" name="radio_btn1" id="r4">
          


            <div class="slide second">
                <img class="zoom_img" src="https://assets.ajio.com/cms/AJIO/WEB/25092022-D-IHP-bestofbrands-indiepicks-upto80.jpg" alt="">
            </div>
                <div class="slide">

                   <img class="zoom_img" src="https://assets.ajio.com/cms/AJIO/WEB/INDIE-Fabindia-D.jpg" alt="">
               </div> 
               <div class="slide">

                   <img class="zoom_img" src="https://assets.ajio.com/cms/AJIO/WEB/25092022-D-IHP-bestofbrands-pothys-upto50.jpg" alt="">
               </div> 
               <div class="slide">

                   <img class="zoom_img" src="https://assets.ajio.com/cms/AJIO/WEB/25092022-D-IHP-bestofbrands-fashor-upto80.jpg" alt="">
               </div> 
               

<!-- autonavigation part -->
<div class="navigation-auto">
    <div class="auto-btn1"></div>
    <div class="auto-btn2"></div>
    <div class="auto-btn3"></div>
    <div class="auto-btn4"></div>
  
</div>
<!-- 
manual navigation -->

<div class="navigation-manual">
    <label for="r1" class="manual-btn"></label>
    <label for="r2" class="manual-btn"></label>
    <label for="r3" class="manual-btn"></label>
    <label for="r4" class="manual-btn"></label>
  
</div>
           
        </div>
    </div>`
}
export default slide