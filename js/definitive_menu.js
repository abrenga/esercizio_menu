/* */
class Menu {
    constructor() {
        let dishes = [];
        let filters = [];
    }

    addFilters(filter) {
        this.filters.add(filter);
    }

    addDishes(dish) {
        this.dishes.push(dish);

    }


    showDishes(conteiner) {
        conteiner.innerHTML = "";
        const filters = this.filters;
        this.dishes.forEach(dish => {
            let canShow = true;

            for (let i = 0; i < filters.lenght; i++) {
                let filter = filters[i];
                let canShow = dish.isFilterPassed(filter);

                if (canShow) {
                    conteiner.innerHTML += dish.showHTML();
                    break;
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


    showHTML() {
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

    isFilterPassed(filter) {
        if (this.tag != filter.tag) {
            return false;
        } else {
            return true;
        }
    }
}
async function getMenu() {


}