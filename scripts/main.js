let cart = [];

function addToCart(itemName, itemPrice) {
    const item = { name: itemName, price: itemPrice };
    cart.push(item);
    console.log(`Added to cart: ${itemName} - ${itemPrice}`);
    alert(`${itemName} has been added to your cart!`);
    // Optional: Update cart UI or trigger other actions here
}


function toggleCartModal() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('show');
}

function closeCartModal() {
    const modal = document.getElementById('cartModal');
    modal.classList.remove('show');
}

function truncateText(selector, wordLimit) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        let text = element.textContent.trim();
        const words = text.split(' ');
        if (words.length > wordLimit) {
            text = words.slice(0, wordLimit).join(' ') + '...';
            element.textContent = text;
        }
    });
}

truncateText('.item-blog p', 20); // Adjust word limit as needed
