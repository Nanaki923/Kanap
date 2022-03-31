const url = new URL(window.location.href);
const id = url.searchParams.get("id")

fetch(`http://localhost:3000/api/products/${id}`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        return addToCart(json)
    })

    
    let productId = ;
    let productColor = ;
    let productQuantity = ;

    let addToCart = [productId, productColor, productQuantity];
    
     
