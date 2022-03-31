
    let search_list = document.getElementById("search_list");
    let search = document.getElementById("search_box");
    console.log(search_list);
    console.log(search);
  
    function display_searchList() {
      search_list.style.visibility = "visible";
    }
    function hide_searchList() {
      search_list.style.visibility = "hidden";
    }
    search.addEventListener("click", display_searchList);
    search_list.addEventListener("mouseleave", hide_searchList);

    let menu_options = document.getElementsByClassName("one");
    let flycontainer = document.getElementById("flying_container");
    


    function displayNavContainer() {
   
      flycontainer.style.visibility = "visible";
      console.log("hello")
    
    }
    function hideNavContainer() {
 
      flycontainer.style.visibility = "hidden";
    
    }
   
    console.log(menu_options);
    for (let i = 0; i < menu_options.length; i++) {
      menu_options[i].addEventListener("mouseenter", displayNavContainer);
      menu_options[i].addEventListener("mouseleave", hideNavContainer);
    }
    flycontainer.addEventListener("mouseenter", displayNavContainer); 
    flycontainer.addEventListener("mouseleave", hideNavContainer);

    let close = document.getElementById("close");
    let navbarSignIn = document.getElementById("navbar_signin_btn");
    let login_popup = document.getElementById("login_signup");
  
    function displaySigninPopup() {
      login_popup.style.visibility = "visible";
     
    }
  
    function hideSigninPopup() {
      login_popup.style.visibility = "hidden";
      
    }
    
      navbarSignIn.addEventListener("click", displaySigninPopup);
      close.addEventListener("click", hideSigninPopup);
    
      let cart_container = document.getElementById("cart_hover");
    let cart_btn = document.getElementById("cart_icon");

    cart_btn.addEventListener("mouseenter", displayCartContainer);
    cart_btn.addEventListener("mouseleave", hideCartContainer);

    function displayCartContainer() {
      cart_container.style.visibility = "visible";
        
      
    }
  
    function hideCartContainer() {
    
        cart_container.style.visibility = "hidden";
    
    }
