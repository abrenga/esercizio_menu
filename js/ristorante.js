class Menu {

    constructor() {
        this.dishes = [];
    }

    addDishes(dish) {
        this.dishes.push(dish);
    }



}

class Dish {
    constructor(image, title, price, tag) {
        this.image = image,
        this.title = title,
        this.price = price,
        this.tag = tag
    }


    async getMenu() {
        let response = await fetch("file.json");
        let dish = await response.json();
        return dish

    
        
    }

}


var menu = new Menu();


menu.addDishes(new Dish("", "ciao", "ciao", "ciao"));


console.log(menu)