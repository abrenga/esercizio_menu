class Menu {
    constructor() {
        this.dishes = [];
        this.filters = [];
    }

    addDish(dish) {
        this.dishes.push(dish);
    }

    addFilter(filter) {
        this.filters.push(filter);
    }

    removeFilter(filter) {
        const index = this.filters.indexOf(filter);
        if (index >= 0) {
            this.filters.splice(index, 1);
        }
    }

    show(container) {
        container.innerHTML = "";
        const filters = this.filters;

        this.dishes.forEach(dish => {
            let canShow = true;

            for (let i = 0; i < filters.length; i++) {
                const filter = filters[i];
                canShow = dish.isFilterPassed(filter);

                if (canShow)
                    break;
            }

            if (canShow) {
                container.innerHTML += dish.name + " " + dish.price + "€ - " + dish.tag + "<br>";
            }
        });
    }
}

class Dish {
    constructor(name, price, image, tag) {
        this.image = image;
        this.price = price;
        this.name = name;
        this.tag = tag;
    }

    isFilterPassed(filter) {
        if (this.tag != filter.tag) {
            return false;
        }

        return true;
    }
}

class Filter {
    constructor(tag) {
        this.tag = tag;
    }
}




var menu = new Menu();
menu.addDish(new Dish("Panino buono", 4, "", "Panino"));
menu.addDish(new Dish("Cotoletta", 2, "", "Secondo"));
menu.addDish(new Dish("Tortellini", 3, "", "Primo"));

console.log(menu);

const container = document.getElementById("container");

const filter1 = new Filter("Primo");
const filter2 = new Filter("Secondo");



menu.addFilter(filter1);
menu.addFilter(filter2);

menu.show(container);

menu.removeFilter(filter2);

menu.show(container)