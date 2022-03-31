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
            <img src="https://assets.ajio.com/cms/AJIO/WEB/31032022-D-WHP-topbanner-p1-levis-30to60.jpg" alt="">
        </div>
            <div class="slide">

               <img src="https://assets.ajio.com/cms/AJIO/WEB/31032022-WHP-D-TopBanner-p2-kurtasandkurtis-under699.jpg" alt="">
           </div> 
           <div class="slide">

               <img src="https://assets.ajio.com/cms/AJIO/WEB/31032022_WHP_D_topbanner_p3_levis_ck_trendyol_30to70.jpg" alt="">
           </div> 
           <div class="slide">

               <img src="https://assets.ajio.com/cms/AJIO/WEB/31032022_WHP_D_topbanner_p4_clarks_dune_aldo_upto50.jpg" alt="">
           </div> 
           <div class="slide">

               <img src="https://assets.ajio.com/cms/AJIO/WEB/31032022-WHP-D-TopBanner-p5-womenswear-zivame-misschase-coverstory-under999.jpg" alt="">
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