function slide()
{
    return `    
    <div class="slider">
        <div class="slides">
            <input type="radio" name="radio_btn1" id="r1">
            <input type="radio" name="radio_btn1" id="r2">
            <input type="radio" name="radio_btn1" id="r3">
            <input type="radio" name="radio_btn1" id="r4">
            <input type="radio" name="radio_btn1" id="r5">


            <div class="slide second">
                <img src="https://assets.ajio.com/cms/AJIO/WEB/31032022-D-WHP-banner1-p1-halfpricestore-only-soch.jpg" alt="">
            </div>
                <div class="slide">

                   <img src="https://assets.ajio.com/cms/AJIO/WEB/31032022-WHP-D-Banner1-p2-VeroModa-Only-40to70.jpg" alt="">
               </div> 
               <div class="slide">

                   <img src="https://assets.ajio.com/cms/AJIO/WEB/31032022-WHP-D-banner1-p3-leecooper-min30.jpg" alt="">
               </div> 
               <div class="slide">

                   <img src="https://assets.ajio.com/cms/AJIO/WEB/31032022-WHP-D-Banner1-p4-pannkh-min50.jpg" alt="">
               </div> 
               <div class="slide">

                   <img src="https://assets.ajio.com/cms/AJIO/WEB/31032022_WHP_D_banner1_p5_innerwear_loungewear_upto70.jpg" alt="">
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
    <label for="r1" class="manual-btn"></label>
    <label for="r2" class="manual-btn"></label>
    <label for="r3" class="manual-btn"></label>
    <label for="r4" class="manual-btn"></label>
    <label for="r5" class="manual-btn"></label>
</div>
           
        </div>
    </div>`
}
export default slide