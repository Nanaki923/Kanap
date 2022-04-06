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

let element = document.getElementById("addToCart");
element.onclick = function(e) {
    let cardLocalStorage = localStorage.getItem("card")
    let quantity = document.getElementById("quantity").value
    quantity = parseInt(quantity, 10)
    const colors = document.getElementById("colors").selectedIndex
    if (cardLocalStorage) {
        let newCard = JSON.parse(cardLocalStorage)
        newCard.find(item => {
            if (item.id === id && item.color === colors) {
                item.quantity += quantity
            }
        })
        
        console.log(newCard)
    } else {
        let card = []
        let items = {}
        items.quantity = quantity
        items.color = colors
        items.id = id
        card.push(items)
        let cardJson = JSON.stringify(card)
        localStorage.setItem("card", cardJson)    
    }
}
