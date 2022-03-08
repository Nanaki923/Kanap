fetch("http://localhost:3000/api/products")
    .then((response) => response.json())
    .then((json) => {
        return addProducts(json)
    })
function addProducts(json) {
    console.log(json)
    const id = json[0]._id
    const imageUrl = json[0].imageUrl
    const altTxt = json[0].altTxt
    const name = json[0].name
    const description = json[0].description
    const image = makeImage(imageUrl, altTxt)
    const anchor = makeAnchor(id) 
    const article = makeArticle()
    const H3 = makeH3(name)
    const Paragraph = makeParagraph(description)
    article.appendChild(image)
    article.appendChild(H3)
    article.appendChild(Paragraph)
    appendChildren(anchor, article)
}
function makeAnchor(id) {
    const anchor = document.createElement ("a")
    anchor.href = "product.html?id=42" + id
    return anchor
}
function appendChildren(anchor, article) {
    const items = document.querySelector("#items")
    if (items != null) {
        items.appendChild(anchor)
        anchor.appendChild(article)
        }
}
function makeImage(imageUrl, altTxt) {
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTxt
    return image
    
}
altTxt: "Photo d'un canapé bleu, deux places"
colors: (3) ['Blue', 'White', 'Black']
description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
imageUrl: "http://localhost:3000/images/kanap01.jpeg"
name: ""
price: 1849
_id: "107fb5b75607497b96722bda5b504926"

function makeArticle(params) {
    const article = document.createElement("article")
    const image = makeImage()
    return article
}

function makeH3(name) {
    const H3 = document.createElement("H3")
    H3.textContent = name
    H3.classList.add("productName")
    return H3
    
}
function makeParagraph(description) {
    const Paragraph = document.createElement("Paragraph")
    Paragraph.textContent = description
    Paragraph.classList.add("productDescription")
    return Paragraph
   
}


