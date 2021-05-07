class Menu {
    constructor() {
        this.dishes = [];
        this.filters = [];
    }

    addDishes(dish) {
        this.dishes.push(dish);
    }

    removeDish(dish) {
        this.dishes.slice(dish);
    }

    addFilter(filter) {
        this.filters.push(filter);
    }

    removeFilter(filter) {

    }

}


class Dish {
    

}