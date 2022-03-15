fetch("http://localhost:3000/api/products")
    .then((response) => response.json())
    .then((json) => {
        return addProducts(json)
    })
function addProducts(json) {
    let products = ""
    console.log(json)
    json.map(item => {
        console.log(item.name)
        products += `<a href="product.html?id=${item._id}">
        <article>
          <img src="${item.imageUrl}" alt="${item.altTxt}">
          <h3 class="productName">${item.name}</h3>
          <p class="productDescription">${item.description}</p>
        </article>
      </a>`

    });
    console.log(products)
    document.querySelector("#items").innerHTML = products
}

function addCart(json) {
  let products = ""
  console.log(json)
  json.map(item => {
      console.log(item.name)
      products += `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
      <div class="cart__item__img">
        <img src="images/product01.jpg" alt="Photographie d'un canapé">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>Nom du produit</h2>
          <p>Vert</p>
          <p>42,00 €</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
          </div>
        </div>
      </div>
    </article>`

  });
  console.log(products)
  document.querySelector("#items").innerHTML = products
}

         

