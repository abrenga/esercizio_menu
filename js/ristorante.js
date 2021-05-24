class Menu {
    constructor() {
        this.dishes = [];
        this.filters = [];
    }

    addDish(dish) {
        this.dishes.push(dish);
    }

    addFilter(filter) {
        if (!this.isFilterExisting(filter)) {
            this.filters.push(filter);
        }

    }

    resetFilter(filter) {
        for (let i = 0; i < this.filters.length; i++) {
            const currentFilter = this.filters[i];
            if (filter.tag == currentFilter.tag) {
                this.filters.splice(i, 1);
                break;
            }

        }
    }

    resetAllFilters() {
        this.filters.splice(0, this.filters.length);
    }

    isFilterExisting(filter) {
        const filterResult = this.filters.filter(currentFilter => currentFilter.tag == filter.tag);

        if (filterResult.length > 0) {
            return true;
        } else {
            return false;
        }

    }

    showDishes(container) {

        container.innerHTML = "";
        const filters = this.filters;

        this.dishes.forEach(dish => {
            let canShow = true;

            for (let i = 0; i < filters.length; i++) {
                const filter = filters[i];
                canShow = dish.isFilterPassed(filter);

                if (canShow) {
                    break;
                }

                if (canShow) {
                    container.innerHTML += dish.initHtml();
                }

            }
        });
    }



}

class Dish {
    constructor(tag, image, title, price) {
        this.tag = tag;
        this.image = image;
        this.title = title;
        this.price = price;

    }

    isFilterPassed(filter) {
        if (this.tag != filter.tag) {
            return false;
        }

        return true;


    }

    initHtml() {
        return `<article id="article" class="${this.tag} article col my-box">
                    <img src="${this.image}" alt="">
                    <div class="item">
                        <header class="contenitore">
                            <h4>${this.title}</h4>
                            <h5 class="price">${this.price}</h5>
                        </header>   
                    </div>
                </article>`;
    }



}

class Filter {
    constructor(tag) {
        this.tag = tag;
    }

}

async function getMenu() {
    let response = await fetch("file.json");
    let dishes = await response.json();


    dishes.forEach(dish => {

        menu.addDish(new Dish(dish.tag, dish.image, dish.title, dish.price));

    });


    menu.showDishes(node);




}


function listeningEvent(buttons, menu, node) {
    buttons.forEach(btn => {
        btn.addEventListener("click", function () {

            const piccolo = btn.innerHTML.toLowerCase();

            let filter = new Filter(piccolo);
            if (!menu.isFilterExisting(filter)) {
                menu.resetAllFilters();
                menu.addFilter(filter);

            } else {
                menu.resetFilter(filter);


            }
            menu.showDishes(node);



        });
    });

}

let menu = new Menu();

const HTMLButtons = document.querySelectorAll(".btn-m");

const node = document.getElementById("daje");






listeningEvent(HTMLButtons, menu, node);

getMenu().then();
