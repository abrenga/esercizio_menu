class Menu {
    constructor() {
        this.dishes = [];

    }
    addDishes(dish) {
        this.dishes.push(dish);

    }



}

class Dish {
    constructor(image, title, price) {
        this.image = image;
        this.title = title;
        this.price = price;
    }

}