/* */
let contenitoreHtml = document.getElementById("daje");
let btnS = document.querySelectorAll(".btn-m");
const SelezionatiPiatti = document.getElementById("ola")


var arrayPiatti = [];

var menu = {

    getMenu: async function () {
        let response = await fetch("file.json");
        let piatti = await response.json();

        arrayPiatti = piatti;
        this.initMenu();

    },

    initMenu: function () {
        arrayPiatti.forEach(piatto => {
            let article = this.creaPiattoHtml(piatto);
            contenitoreHtml.innerHTML += article;

        });
        this.ascoltaLevento();

    },


    creaPiattoHtml: function (item) {
        return `<article id="article" class="${item.tags} col-6 my-box">
                    <img src="${item.image}" alt="">
                    <div class="item-info">
                        <header class="contenitore">
                            <h4>${item.title}</h4>
                            <h5 class="price">${item.prezzo}</h5>
                        </header>
                        <p class="text">${item.text}</p>
                    </div>
                </article>`;
    },

    ascoltaLevento: function () {
        const articles = document.querySelectorAll(".article");
        btnS.forEach(btn => {
            btn.addEventListener("click", function () {
                if (btn.classList.contains("01")) {
                    articles.forEach(article => {
                        if (arrayPiatti.piatto.tags!=="primi") {
                            article.classList.add("hide");
                        }
                    })




                }


            });
        })

    },








}









