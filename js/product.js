fetch("http://localhost:3000/api/products")
    .then((response) => response.json())
    .then((json) => {
        return addProducts(json)
    })

function addProducts(json) {
    let products = ""
    json.map(item => {
        products += `<title>nom du produit</title>>
        `

    })
    document.querySelector("#items").innerHTML = products
}