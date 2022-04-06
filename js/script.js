fetch("http://localhost:3000/api/products")
    .then((response) => response.json())
    .then((json) => {
        return addProducts(json)
    })
function addProducts(product) {
  console.log('pro', product)
    let products = ""
    product.map(item => {
        products += `<a href="product.html?id=${item._id}">
        <article>
          <img src="${item.imageUrl}" alt="${item.altTxt}">
          <h3 class="productName">${item.name}</h3>
          <p class="productDescription">${item.description}</p>
        </article>
      </a>`
    })
    console.log(products)
    document.querySelector("#items").innerHTML = products
}

         

