/* */

var menu = {

    initMenu : async function () {
        let response = await fetch("file.json");
        let piatti = response.json();

        return piatti;
    }
}


this.initMenu().then();





