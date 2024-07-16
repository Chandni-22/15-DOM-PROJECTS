const menu = [
    {
        id: 1,
        title: "Pancakes",
        category: "breakfast",
        price: 20.99,
        img: "img/pancakes.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 2,
        title: "Lunch kr lo!",
        category: "lunch",
        price: 13.99,
        img: "img/dinner.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 3,
        title: "Godzilla Milkshake",
        category: "shakes",
        price: 6.99,
        img: "img/milkshake.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 4,
        title: "Buttermilks",
        category: "shakes",
        price: 15.00,
        img: "img/buttermilk.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 5,
        title: "Diet pr ho kya?",
        category: "lunch",
        price: 22.99,
        img: "img/diet.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 6,
        title: "Desserts",
        category: "breakfast",
        price: 18.99,
        img: "img/desserts.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 7,
        title: "Chai ya Coffee",
        category: "breakfast",
        price: 18.99,
        img: "img/chai-coffee.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 8,
        title: "Poha",
        category: "breakfast",
        price: 18.99,
        img: "img/poha.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 9,
        title: "Chole Bhature",
        category: "lunch",
        price: 22.99,
        img: "img/chole-bhature.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 10,
        title: "Fast-food",
        category: "lunch",
        price: 22.99,
        img: "img/fastfood.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 11,
        title: "Ye lo Thali!",
        category: "lunch",
        price: 22.99,
        img: "img/thali.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 12,
        title: "Dosa",
        category: "breakfast",
        price: 22.99,
        img: "img/dosa.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.getElementById('cards');
    const btnContainer = document.querySelector('.btn_Container');

    function displayMenuItems(menuItems) {
        let displayMenu = menuItems.map(item => {
            return `
            <div class="cards-itmes">
                <img src=${item.img} alt=${item.title} class="pic">
                <div class="card-image-info">
                    <div class="header_flex">
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price.toFixed(2)}</h4>
                    </div>
                    <p>${item.desc}</p>
                </div>
            </div>
            `;
        });
        displayMenu = displayMenu.join('');
        cardsContainer.innerHTML = displayMenu;
    }

    function displayMenuButtons() {
        const categories = menu.reduce((values, item) => {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        }, ['all']);

        const categoryButtons = categories.map(category => {
            return `<button class="filterBtn" data-id="${category}">${category}</button>`;
        }).join('');

        btnContainer.innerHTML = categoryButtons;
        const filterBtns = btnContainer.querySelectorAll('.filterBtn');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.id;
                const menuCategory = menu.filter(menuItem => {
                    if (menuItem.category === category) {
                        return menuItem;
                    }
                });
                if (category === 'all') {
                    displayMenuItems(menu);
                } else {
                    displayMenuItems(menuCategory);
                }
            });
        });
    }

    displayMenuItems(menu);
    displayMenuButtons();
});