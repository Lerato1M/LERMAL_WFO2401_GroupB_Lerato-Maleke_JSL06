// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [
        { name: 'Garlic Bread', price: 60 },
        { name: 'Bruschetta', price: 45 }
    ],
    MainCourses: [
        { name: 'Margherita Pizza', price: 80 }, 
        { name: 'Spaghetti Carbonara', price: 100 }
    ],
    Desserts: [
        { name: 'Tiramisu', price: 30 }, 
        { name: 'Cheesecake', price: 36 }
    ]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');
    
    for (let category in menu) {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);
        
        const itemListElement = document.createElement('ul');
        itemListElement.classList.add('item-list');
        menuContainer.appendChild(itemListElement);
        
        menu[category].forEach(item => {
            const listItemElement = document.createElement('li');
            listItemElement.textContent = `${item.name} - R${item.price.toFixed(2)}`;
            listItemElement.addEventListener('click', () => addToOrder(item.name, item.price));
            itemListElement.appendChild(listItemElement);
        });
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName, itemPrice) {
    const orderList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    
    const orderItemElement = document.createElement('li');
    orderItemElement.textContent = `${itemName} - R${itemPrice.toFixed(2)}`;
    orderList.appendChild(orderItemElement);
    
    let total = parseFloat(orderTotalElement.textContent.slice(1)); // Remove 'R' before parsing
    total += itemPrice;
    orderTotalElement.textContent = `R${total.toFixed(2)}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
