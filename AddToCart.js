
/*
Create a function addToCart that simulates adding a product to the shopping cart. The function should take 
the product details (name, price, quantity) as paraueters and throw errors under certain conditions:

 If the product naue is not provided, throw an error indicating "Product name is required.""
 If the product price is not a positive nuuber, trow an error indicating "Invalid product price."
 If the quantity is not a positive integer, throw an error indicating "Invalid quantity."
*/


function isValidPrice(price) {
    return !isNaN(parseFloat(price)) && isFinite(price);
}



function addToCart(name, price, quantity){
   
    if(!name){
        throw new Error("Product Name is Required");
    }


    if(!isValidPrice(price) || price < 0){
        throw new Error("Invalid Product Price");
    }

    if(quantity < 0 || !isValidPrice(quantity)){
        throw new Error("Invalid quantity");
    } else if(quantity == 0){
        throw new Error("You have to add atleast one product");
    }

    return `Added ${quantity} ${name} to cart of price ₹${price * quantity} `;
}

try{
    console.log(addToCart("Refrigerator", "15500", "1"))
} catch(error){
    console.error(error.message)
}