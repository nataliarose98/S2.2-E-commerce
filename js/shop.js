// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

// Exercise 1
const buy = (id) => {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    
    const productToFind = products.find((product) => product.id === id);

    const productInCart = cart.find((product) => product.id === id);

    
    if (productInCart) {

        productInCart.quantity++;

    } else {      
        const newProduct = { ...productToFind };
        newProduct.quantity = 1;
        cart.push(newProduct);
    }

    console.log(cart)
 }

// Exercise 2
const cleanCart = () =>  {
    cart.length = 0;
    console.log("Empty cart!", cart);
  
}

// Exercise 3
const calculateTotal = () =>  {
    // Calculate total price of the cart using the "cartList" array
    let total = 0

    for(let i = 0; i < cart.length; i++){
       if(cart[i].subtotalWithDiscount){
        total += cart[i].subtotalWithDiscount;
       }
    }

    console.log("the total price is:", total);
    return total;
}

// Exercise 4
const applyPromotionsCart = () =>  {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++){
        const currentProduct = cart[i] 

        const subtotal = currentProduct.price * currentProduct.quantity;

        if (currentProduct.id === 1 && currentProduct.quantity >= 3) {

            currentProduct.subtotalWithDiscount = subtotal * 0.8;
        } else if (currentProduct.id === 3 && currentProduct.quantity >= 10){
            currentProduct.subtotalWithDiscount = subtotal * 0.70
        } else {
            currentProduct.subtotalWithDiscount = subtotal
        }
    }
    console.log("Promotions applied!", cart);
}

// Exercise 5
const printCart = () => {
    // Fill the shopping cart modal manipulating the shopping cart dom
    applyPromotionsCart();

    const finalTotal = calculateTotal();

    const cartListBody = document.getElementById('cart_list')
    const totalPriceElement = document.getElementById('total_price')

    cartListBody.innerHTML = "";

    for (let i = 0; i < cart.length; i++){
        const product = cart[i];

        const newRow = document.createElement('tr')

        newRow.innerHTML = `
            <th scope="row">${product.name}</th>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>${product.subtotalWithDiscount.toFixed(2)}</td>
        `;
        cartListBody.appendChild(newRow);
    }

    totalPriceElement.innerHTML = finalTotal.toFixed(2);
}


// ** level II **

// Exercise 7
const removeFromCart = (id) => {
    const productIndex = cart.findIndex((product) => product.id === id)

    if(productIndex !== -1){
        if (cart[productIndex].quantity === 1){
            cart.splice(productIndex, 1)
        } else {
            cart[productIndex].quantity--;
        }
    } 

}

const open_modal = () =>  {
    printCart();
}

// Button connection
const allCartButtons = document.querySelectorAll('.cart-button')

allCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        open_modal()
    })
})


const allBuyButtons = document.querySelectorAll ('.add-to-cart');

allBuyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = event.target.dataset.productId
        buy(+productId);
    })
})

const cleanCartButton = document.getElementById('clean-cart')
if (cleanCartButton) {
    cleanCartButton.addEventListener('click', () =>{
        cleanCart()
        printCart()
 })
}
