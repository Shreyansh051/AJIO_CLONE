

// Change in grid styles
function cols5() {
  // products.innerHTML = "";
  let grid5 = document.getElementById("grid5");

  parent.style.display = "grid";
  parent.style.gridTemplateColumns = "repeat(2,auto)";
  // parent.style.gridTemplateColumns = "repeat(5,1fr)";
  parent.style.gap = "20px";
  displayData(DataArray);
}

function cols3() {
  parent.innerHTML = "";
  let grid3 = document.getElementById("grid3");
  parent.style.display = "grid";
  parent.style.gridTemplateColumns = "repeat(3,1fr)";
  // parent.style.gridTemplateColumns = "repeat(3,1fr)";
  parent.style.gap = "20px";
  displayData(DataArray);
}





var DataArray = []
let page = 1;
let TotalPages = 0;
let parent = document.getElementById("content");
let pageValue = document.getElementById("pageValue");


var DataArrayDisplay = [];
function decrementPage() {
  if (page > 1) {
    page--;
    DataArray = [];
    parent.innerHTML = "";
    pageValue.innerHTML = page;
    getData(page);
  } else {
    alert("Already on first Page");
  }
}

function incrementPage() {
  if (page < TotalPages) {
    page++;
    DataArray = [];
    parent.innerHTML = "";
    pageValue.innerHTML = page;
    getData(page);
  } else {
    alert("You are on last page");
  }
}

let getData = async (pageno) => {
      let url= `https://ajioclone.herokuapp.com/products/cat/men?page=${pageno}&size=9`
      let res = await fetch(url);
      let data = await res.json();

      TotalPages = data.totalPages;
      data.products.forEach((ele) => {
        DataArray.push(ele);
        DataArrayDisplay.push(ele);
      });
    // console.log(DataArray)
    displayData(DataArray);
  };

getData(page)


// ***************************
function displayData(DataArray) {
  console.log(DataArray, "display array");
  DataArray.forEach(function (DataArray) {
    let div = document.createElement("div");
    let card = document.createElement("div");

    let img1 = document.createElement("img");
    img1.src = DataArray.display_img;
    img1.style.width = "300px"

    let quickView = document.createElement("div");
    quickView.setAttribute("id", "quickView");
    quickView.textContent = "QUICKVIEW";

    let img = document.createElement("div");
    img.append(img1, quickView);

    let brand = document.createElement("div");
    brand.innerHTML = DataArray.brand;
    brand.setAttribute("class", "w600");
    brand.style.color = "#b19975";

    let name = document.createElement("div");
    name.innerHTML = DataArray.name;
    name.setAttribute("class", "loraf13");
    // name.setAttribute("class","lora","f13");

    let price = document.createElement("span");
    price.innerHTML = "Rs. " + DataArray.price + "&nbsp;&nbsp;";
    price.setAttribute("class", "f14");

    let mrp = document.createElement("span");
    mrp.innerHTML = "Rs. " + DataArray.MRP;
    mrp.style.textDecoration = "line-through";
    mrp.setAttribute("class", "f12");

    let discount = document.createElement("span");
    discount.innerHTML = "&nbsp;" + "(" + DataArray.discount + "%" + " off)";
    discount.style.color = "#b19975";
    discount.setAttribute("class", "f12");

    let offer_price = document.createElement("span");
    // offer_price.innerHTML = "Offer Price: " + "Rs. " + DataArray.offer_price;
    offer_price.innerHTML = "Offer Price: " + "&nbsp;&nbsp;";
    offer_price.setAttribute("class", "f12");

    let offervalue = document.createElement("span");
    offervalue.innerHTML = "Rs. " + DataArray.offer_price;
    offervalue.style.color = "#3ab649";
    offervalue.setAttribute("class", "f12");

    let offer = document.createElement("div");
    offer.append(offer_price, offervalue);

    let value = document.createElement("div");

    value.append(price, mrp, discount);
    value.setAttribute("id", "value");

    div.append(brand, name, value, offer);
    div.style.textAlign = "center";
    div.style.lineHeight = "25px";

    let anchor = document.createElement("a");
    anchor.href = `../products/procuctdetails.html`;
    anchor.setAttribute("class", "anchor");
    anchor.append(div);
    card.append(img, anchor);
    div.onclick = () => {
      console.log(DataArray);
    };

    parent.append(card);

    card.addEventListener("mouseenter", enter);
    card.addEventListener("mouseleave", leave);

    function enter() {
      quickView.style.display = "block";
    }
    function leave() {
      quickView.style.display = "none";
    }
    quickView.onclick = () => {
      console.log(DataArray);
      // getData(DataArray._id);
    };
  });
}

// Sort By Functionaltiy
var select = document.getElementById("select");
    console.log(select);
    // console.log(select.value);

    select.onchange = () => {
      if (select.value == "Price(highest first)") {
        highest(DataArray);
        console.log(1);
      } else if (select.value == "Relevance") {
        parent.innerHTML = "";
        displayData(DataArrayDisplay);
        console.log(2);
      } else if (select.value == "Discount") {
        discount(DataArray);
        console.log(3);
      } else if (select.value == "Price(lowest first)") {
        lowest(DataArray);
        console.log(4);
      } else {
        parent.innerHTML = "";
        displayData(DataArrayDisplay);
        console.log(5);
      }
    };

    function lowest(DataArray) {
      let lowest = document.getElementById("low");
      console.log(lowest);
      console.log(DataArray);
      DataArray.sort((a, b) => a.price - b.price);
      console.log(parent);
      parent.innerHTML = "";
      displayData(DataArray);
    }

    function highest(DataArray) {
      let highest = document.getElementById("highest");
      console.log(highest);
      console.log(DataArray);
      DataArray.sort((a, b) => b.price - a.price);
      console.log(parent);
      parent.innerHTML = "";
      displayData(DataArray);
    }

    function discount(DataArray) {
      let discount = document.getElementById("discount");
      console.log(discount);
      console.log(DataArray);
      DataArray.sort((a, b) => b.discount - a.discount);
      console.log(parent);
      parent.innerHTML = "";
      displayData(DataArray);
    }



    // Filter By brand



    let countfort = 0;
    function fortCollins(DataArray) {
      console.log("arrarasdfsdf", DataArray);
      if (countfort % 2 == 0) {
        countfort++;
        let brand = [];
        DataArray.forEach((ele) => {
          if (ele.brand == "FORT COLLINS") {
            console.log(ele.brand);
            brand.push(ele);
          }
        });
        console.log(brand);
        parent.innerHTML = "";
        displayData(brand);
        console.log("count1:" + countfort);
      } else {
        countfort++;
        parent.innerHTML = "";
        displayData(DataArray);
        console.log("count2:" + countfort);
      }
    }

    let countlevis = 0;
    function levis(DataArray) {
      console.log(DataArray);
      if (countlevis % 2 == 0) {
        countlevis++;
        let brand = [];
        DataArray.forEach((ele) => {
          if (ele.brand == "LEVIS") {
            console.log(ele.brand);
            brand.push(ele);
          }
        });
        console.log(brand);
        parent.innerHTML = "";
        displayData(brand);
      } else {
        countlevis++;
        parent.innerHTML = "";
        displayData(DataArray);
      }
    }

    let counthigh = 0;
    function highStar(array) {
      console.log(array);
      if (counthigh % 2 == 0) {
        counthigh++;
        let brand = [];
        array.forEach((ele) => {
          if (ele.brand == "HIGH STAR") {
            console.log(ele.brand);
            brand.push(ele);
          }
        });
        console.log(brand);
        parent.innerHTML = "";
        displayData(brand);
      } else {
        counthigh++;
        parent.innerHTML = "";
        displayData(array);
      }
    }

    let countperform = 0;
    function performax(DataArray) {
      console.log(DataArray);
      if (countperform % 2 == 0) {
        countperform++;
        let brand = [];
        DataArray.forEach((ele) => {
          if (ele.brand == "PERFORMAX") {
            console.log(ele.brand);
            brand.push(ele);
          }
        });
        console.log(brand);
        parent.innerHTML = "";
        displayData(brand);
      } else {
        countperform++;
        parent.innerHTML = "";
        displayData(DataArray);
      }
    }

    let countTerrain = 0;
    function indianTerrain(DataArray) {
      console.log(DataArray);
      if (countTerrain % 2 == 0) {
        countTerrain++;
        let brand = [];
        DataArray.forEach((ele) => {
          if (ele.brand == "INDIAN TERRAIN") {
            console.log(ele.brand);
            brand.push(ele);
          }
        });
        console.log(brand);
        parent.innerHTML = "";
        displayData(brand);
      } else {
        countTerrain++;
        parent.innerHTML = "";
        displayData(DataArray);
      }
    }


    // Filter By Discount Functionality

    let countdisc0To20 = 0;
    function disc0To20(DataArray) {
      console.log(DataArray);
      if (countdisc0To20 % 2 == 0) {
        countdisc0To20++;
        let discountRange = [];
        DataArray.forEach((ele) => {
          if (ele.discount >= 0 && ele.discount <= 20) {
            console.log(ele.discount);
            discountRange.push(ele);
          }
        });
        console.log(discountRange);
        parent.innerHTML = "";
        displayData(discountRange);
      } else {
        countdisc0To20++;
        parent.innerHTML = "";
        displayData(DataArray);
      }
    }

    let countdisc21To30 = 0;
    function disc21To30(DataArray) {
      console.log(DataArray);
      if (countdisc21To30 % 2 == 0) {
        countdisc21To30++;
        let discountRange = [];
        DataArray.forEach((ele) => {
          if (ele.discount >= 21 && ele.discount <= 30) {
            console.log(ele.discount);
            discountRange.push(ele);
          }
        });
        console.log(discountRange);
        parent.innerHTML = "";
        displayData(discountRange);
      } else {
        countdisc21To30++;
        parent.innerHTML = "";
        displayData(DataArray);
      }
    }

    let countdisc31To40 = 0;
    function disc31To40(DataArray) {
      console.log(DataArray);
      if (countdisc31To40 % 2 == 0) {
        countdisc31To40++;
        let discountRange = [];
        DataArray.forEach((ele) => {
          if (ele.discount >= 31 && ele.discount <= 40) {
            console.log(ele.discount);
            discountRange.push(ele);
          }
        });
        console.log(discountRange);
        parent.innerHTML = "";
        displayData(discountRange);
      } else {
        countdisc31To40++;
        parent.innerHTML = "";
        displayData(DataArray);
      }
    }

    let countdisc41To50 = 0;
    function disc41To50(DataArray) {
      console.log(DataArray);
      if (countdisc41To50 % 2 == 0) {
        countdisc41To50++;
        let discountRange = [];
        DataArray.forEach((ele) => {
          if (ele.discount >= 41 && ele.discount <= 50) {
            console.log(ele.discount);
            discountRange.push(ele);
          }
        });
        console.log(discountRange);
        parent.innerHTML = "";
        displayData(discountRange);
      } else {
        countdisc41To50++;
        parent.innerHTML = "";
        displayData(DataArray);
      }
    }

    let countdisc51To80 = 0;
    function disc51To80(DataArray) {
      console.log(DataArray);
      if (countdisc51To80 % 2 == 0) {
        countdisc51To80++;
        let discountRange = [];
        DataArray.forEach((ele) => {
          if (ele.discount >= 51 && ele.discount <= 80) {
            console.log(ele.discount);
            discountRange.push(ele);
          }
        });
        console.log(discountRange);
        parent.innerHTML = "";
        displayData(discountRange);
      } else {
        countdisc51To80++;
        parent.innerHTML = "";
        displayData(DataArray);
      }
    }


     // Filter By Color Functionality

     let countblack = 0;
    function black(DataArray) {
      console.log(DataArray);
      if (countblack % 2 == 0) {
        countblack++;
        let color = [];
        DataArray.forEach((ele) => {
          console.log(ele.color);
          if (ele.color == "Black") {
            console.log(ele.color);
            color.push(ele);
          }
        });
        console.log(color);
        parent.innerHTML = "";
        displayData(color);
      } else {
        countblack++;
        parent.innerHTML = "";
        displayData(DataArray);
      }
    }

    let countblue = 0;
    function blue(DataArray) {
      console.log(DataArray);
      if (countblue % 2 == 0) {
        countblue++;
        let color = [];
        DataArray.forEach((ele) => {
          console.log(ele.color);
          if (ele.color == "Blue") {
            console.log(ele.color);
            color.push(ele);
          }
        });
        console.log(color);
        parent.innerHTML = "";
        displayData(color);
      } else {
        countblue++;
        parent.innerHTML = "";
        displayData(DataArray);
      }
    }

    let countjetBlack = 0;
    function jetBlack(DataArray) {
      console.log(DataArray);
      if (countjetBlack % 2 == 0) {
        countjetBlack++;
        let color = [];
        DataArray.forEach((ele) => {
          console.log(ele.color);
          if (ele.color == "Jet-Black") {
            console.log(ele.color);
            color.push(ele);
          }
        });
        console.log(color);
        parent.innerHTML = "";
        displayData(color);
      } else {
        countjetBlack++;
        parent.innerHTML = "";
        displayData(DataArray);
      }
    }

    let countgrey = 0;
    function grey(DataArray) {
      console.log(DataArray);
      if (countgrey % 2 == 0) {
        countgrey++;
        let color = [];
        DataArray.forEach((ele) => {
          console.log(ele.color);
          if (ele.color == "Grey") {
            console.log(ele.color);
            color.push(ele);
          }
        });
        console.log(color);
        parent.innerHTML = "";
        displayData(color);
      } else {
        countgrey++;
        parent.innerHTML = "";
        displayData(DataArray);
      }
    }

    let countolive = 0;
    function olive(DataArray) {
      console.log(DataArray);
      if (countolive % 2 == 0) {
        countolive++;
        let color = [];
        DataArray.forEach((ele) => {
          console.log(ele.color);
          if (ele.color == "Olive") {
            console.log(ele.color);
            color.push(ele);
          }
        });
        console.log(color);
        parent.innerHTML = "";
        displayData(color);
      } else {
        countolive++;
        parent.innerHTML = "";
        console.log("No data")
        displayData(DataArray);
      }
    }


    // Filter By Price

    let countunder500 = 0;
    function under500(DataArray) {
      let lowest = document.getElementById("low");
      if (countunder500 % 2 == 0) {
        countunder500++;
        DataArray.sort((a, b) => a.price - b.price);
        let arr1 = [];
        DataArray.forEach((element) => {
          if (element.price < 500) {
            arr1.push(element);
          }
        });

        console.log(arr1);
        parent.innerHTML = "";
        displayData(arr1);
      } else {
        countunder500++;
        parent.innerHTML = "";
        displayData(DataArrayDisplay);
      }
    }

    let count500t1000 = 0;
    function f500t1000(DataArray) {
      let lowest = document.getElementById("low");
      if (count500t1000 % 2 == 0) {
        count500t1000++;
        let arr2 = [];
        DataArray.sort((a, b) => a.price - b.price);
        DataArray.forEach((element) => {
          if (element.price > 500 && element.price <= 1000) {
            arr2.push(element);
          }
        });

        console.log(arr2);
        parent.innerHTML = "";
        displayData(arr2);
      } else {
        count500t1000++;
        parent.innerHTML = "";
        displayData(DataArrayDisplay);
      }
    }

    let count1000t1500 = 0;
    function f1000t1500(DataArray) {
      let lowest = document.getElementById("low");
      if (count1000t1500 % 2 == 0) {
        count1000t1500++;
        let arr3 = [];
        DataArray.sort((a, b) => a.price - b.price);
        DataArray.forEach((element) => {
          if (element.price > 1000 && element.price <= 1500) {
            arr3.push(element);
          }
        });

        console.log(arr3);
        parent.innerHTML = "";
        displayData(arr3);
      } else {
        count1000t1500++;
        parent.innerHTML = "";
        displayData(DataArrayDisplay);
      }
    }

    let count1500t2000 = 0;
    function f1500t2000(DataArray) {
      let lowest = document.getElementById("low");
      if (count1500t2000 % 2 == 0) {
        count1500t2000++;
        let arr4 = [];
        DataArray.sort((a, b) => a.price - b.price);
        DataArray.forEach((element) => {
          if (element.price > 1500 && element.price <= 2000) {
            arr4.push(element);
          }
        });

        console.log(arr4);
        parent.innerHTML = "";
        displayData(arr4);
      } else {
        count1500t2000++;
        parent.innerHTML = "";
        displayData(DataArrayDisplay);
      }
    }

    let count2000t2500 = 0;
    function f2000t2500(DataArray) {
      let lowest = document.getElementById("low");
      if (count2000t2500 % 2 == 0) {
        count2000t2500++;
        let arr5 = [];
        DataArray.sort((a, b) => a.price - b.price);
        DataArray.forEach((element) => {
          if (element.price > 2000 && element.price <= 2500) {
            arr5.push(element);
          }
        });

        console.log(arr5);
        parent.innerHTML = "";
        displayData(arr5);
      } else {
        count2000t2500++;
        parent.innerHTML = "";
        displayData(DataArrayDisplay);
      }
    }



    // Side Bar DropDown Function
       
    // Refine By dropdown

    let refineby = document.getElementById("refineby");
    let list = document.getElementById("list");
    let refinearrow = document.getElementById("refine-arrow");
    var num = 0;
    refineby.onclick = () => {
        if (list.style.display == "none") {
        list.style.display = "block";
        refinearrow.setAttribute("id", "refine-arrow");
      } else {
        list.style.display = "none";
        refinearrow.setAttribute("id", "darr");
      }
    };

  // Gender

    let plusGender = document.getElementById("plusGender");
    plusGender.onclick = () => {
      let rightGender = document.getElementById("rightGender");
      if (rightGender.style.display == "none") {
        rightGender.style.display = "block";
        rightGender.style.marginTop = "20px";
      } else {
        rightGender.style.display = "none";
      }
    };

      // Category
    let plusCategory = document.getElementById("plusCategory");
    plusCategory.onclick = () => {
      let rightCategory = document.getElementById("rightCategory");
      if (rightCategory.style.display == "none") {
        rightCategory.style.display = "block";
        rightCategory.style.marginTop = "20px";
      } else {
        rightCategory.style.display = "none";
      }
    };

    // Price

    let plusPrice = document.getElementById("plusPrice");
    plusPrice.onclick = () => {
      let rightPrice = document.getElementById("rightPrice");
      if (rightPrice.style.display == "none") {
        rightPrice.style.display = "block";
        rightPrice.style.marginTop = "20px";
      } else {
        rightPrice.style.display = "none";
      }
    };

    // Brands

    let plusBrands = document.getElementById("plusBrands");

    plusBrands.onclick = () => {
      let rightBrands = document.getElementById("rightBrands");
      if (rightBrands.style.display == "none") {
        rightBrands.style.display = "block";
        rightBrands.style.marginTop = "20px";
      } else {
        rightBrands.style.display = "none";
      }
    };

    // Occasion

    let plusOccasion = document.getElementById("plusOccasion");

    plusOccasion.onclick = () => {
      let rightOccasion = document.getElementById("rightOccasion");
      if (rightOccasion.style.display == "none") {
        rightOccasion.style.display = "block";
        rightOccasion.style.marginTop = "20px";
      } else {
        rightOccasion.style.display = "none";
      }
    };

    // Discount

    let plusDiscount = document.getElementById("plusDiscount");

    plusDiscount.onclick = () => {
      let rightDiscount = document.getElementById("rightDiscount");
      if (rightDiscount.style.display == "none") {
        rightDiscount.style.display = "block";
        rightDiscount.style.marginTop = "20px";
      } else {
        rightDiscount.style.display = "none";
      }
    };

    // Colors

    let plusColors = document.getElementById("plusColors");

    plusColors.onclick = () => {
      let rightColors = document.getElementById("rightColors");
      if (rightColors.style.display == "none") {
        rightColors.style.display = "block";
        rightColors.style.marginTop = "20px";
      } else {
        rightColors.style.display = "none";
      }
    };

    // Size

    let plusSize = document.getElementById("plusSize");

    plusSize.onclick = () => {
      let rightSize = document.getElementById("rightSize");
      if (rightSize.style.display == "none") {
        rightSize.style.display = "block";
        rightSize.style.marginTop = "20px";
      } else {
        rightSize.style.display = "none";
      }
    };

 