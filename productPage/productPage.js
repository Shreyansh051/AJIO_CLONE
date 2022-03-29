let getData = async () => {
      let url= `https://ajioclone.herokuapp.com/products/cat/men?page=6&size=6`
      let res = await fetch(url);
      let data = await res.json();
      mensData = data.products;
      console.log(mensData)
    // console.log(data)
      displayData(data);
    
  };

getData()
