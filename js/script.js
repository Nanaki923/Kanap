fetch("http://localhost:3000/api/products")
    .then((response) => response.json())
    .then((json) => addProducts(json))

function addProducts(json) {
    const imageUrl = json[0].imageUrl
    console.log("url de l'image", imageUrl)

    const anchor = document.createElement ("a")
    anchor.href = "http://localhost:3000/images/kanap01.jpeg"
    anchor.text = "canapé 2 places bleu"

    const items = document.querySelector("#items")
    if (items != null) {
    items.appendChild(anchor)
    }
}


