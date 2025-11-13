# E-commerce Cart Demo (IT Academy Sprint 2.2)

This project is a demonstration of an e-commerce storefront developed for IT Academy's Sprint 2.2. The primary goal was to implement the complete business logic for a functional shopping cart using vanilla JavaScript, HTML, and Bootstrap-powered CSS.

##  Features

This project simulates a complete e-commerce flow by implementing the following features from scratch:

- **Dynamic Shopping Cart:**
  - Add products to the cart (`buy()`).
  - Increment quantity for existing items instead of adding duplicates.
  - Clear the entire cart (`cleanCart()`).
  - Decrement item quantity or remove items one-by-one (`removeFromCart()`).
- **Promotions Engine:**
  - Applies dynamic discounts (`applyPromotionsCart()`) based on business rules (e.g., 20% off for 3+ oils, 30% off for 10+ cupcake mixes).
- **Dynamic UI Rendering:**
  - The cart modal (`printCart()`) is dynamically generated to display all items, prices, quantities, and discounted subtotals.
  - The cart badge (`updateCartCount()`) updates in real-time with the total item count on any cart modification.
- **Checkout Form Validation:**
  - Complete client-side validation (`validate()`) for the checkout form.
  - Validates fields for length, required status, and specific formats (letters only, numbers only, email, alphanumeric password) using Regular Expressions.
  - Dynamically displays and hides error messages using Bootstrap's `is-invalid` class.
- **Custom Theming:**
  - A custom theme applied on top of the default Bootstrap styling.
  - Includes global styles, elegant typography, gradient buttons, and subtle hover animations for a polished, professional feel.

---

## Tech Stack

- **HTML5:** For semantic structure (`index.html`, `checkout.html`).
- **CSS3 (with Bootstrap 5):** For the base layout and responsive design.
- **`styles.css`:** Custom stylesheet for all branding and theming.
- **JavaScript (ES6+):** For all application logic (`shop.js`, `checkout.js`).

---

##  Project Structure

starter-code-frontend-shop/
│
├── css/
│ └── styles.css
│
├── images/
│ └── ... (Image assets)
│
├── js/
│   └── checkout.js (Checkout form validation logic)
│   └── shop.js (All cart and store logic)
│
├── index.html (Main store page)
├── checkout.html (Checkout form page)
└── README.md (This file)

## Getting Started

1.  Clone this repository to your local machine.
2.  Navigate into the project directory:
    ```bash
    cd starter-code-frontend-shop
    ```
3.  Check out the main development branch:
    ```bash
    git checkout feature/sprint-2.2-logic
    ```
4.  Open the `index.html` file in your browser.
5.  Start shopping!
