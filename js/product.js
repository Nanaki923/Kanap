const url = new URL(window.location.href);
const id = url.searchParams.get("id")
console.log(id)

fetch(`http://localhost:3000/api/products/${id}`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        return addContent(json)
    })

function addContent(json) {
    document.title = json.name
    document.querySelector("#title").innerHTML = json.name
    document.querySelector("#price").innerHTML = json.price
    document.querySelector("#description").innerHTML = json.description
    let colors = ""
    json.colors.forEach(color => {
        console.log(color)
        colors += `<option value="${color}">${color}</option>`
    });
    console.log(colors)
    document.querySelector("#colors").innerHTML += colors

}