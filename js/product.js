const url = new URL(window.location.href);
const id = url.searchParams.get("id")

fetch(`http://localhost:3000/api/products/${id}`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        return addContent(json)
    })

function addContent(product) {
    document.title = product.name
    document.querySelector(".item__img").innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
    document.querySelector("#title").innerHTML = product.name
    document.querySelector("#price").innerHTML = product.price
    document.querySelector("#description").innerHTML = product.description

    let colors = ""
    product.colors.forEach(color => {
        colors += `<option value="${color}">${color}</option>`
    });
    document.querySelector("#colors").innerHTML += colors

}