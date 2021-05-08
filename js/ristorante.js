class Menu {

    constructor() {
        this.dishes = [];
<<<<<<< HEAD
=======
    }
>>>>>>> 48ba85947fc7162bab6f2e748b7fcf1e06655d47

    }
    addDishes(dish) {
        this.dishes.push(dish);
<<<<<<< HEAD

    }



}

class Dish {
    constructor(image, title, price) {
        this.image = image;
        this.title = title;
        this.price = price;
    }
=======
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

>>>>>>> 48ba85947fc7162bab6f2e748b7fcf1e06655d47

console.log(menu)