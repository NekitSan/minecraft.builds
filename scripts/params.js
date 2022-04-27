// Требуется переписать под другой лад, чтобы были классы
// Render как родитель
// render шапки и контента
// render контента по отдельности

class Render
{
    constructor(params)
    {
        this.data = params; //arr
        this.collection = document.querySelector(".collection");
    }

    init() {}
}

class RenderItem extends Render
{
    defaultConstruction(item)
    {
        let temp = "";
        
        if(item.dependence.libs_id)
            temp += "<div class='mod__dependence'>Требуется библиотека: " + item.dependence.libs_id + "</div>";
        if(item.dependence.mod_id)
            temp += "<div class='mod__dependence'>Требуется мод: " + item.dependence.mod_id + "</div>";

        return `<div class="mod__item">
                    <div class="mod__title">
                        <h3 class="mod__id">${item.id}</h3>
                        <a class="mod__name" href="${item.link}">${item.name}</a>
                    </div>
                    <div class="mod__description">
                        ${item.description}
                    </div>
                    ${temp}
                </div>`;
    }

    iterateOverArray()
    {
        let collection = "";
        this.data.shift();

        for( let i = 0; i < this.data.length; i++ )
            collection += this.defaultConstruction(this.data[i]);

        return collection;
    }

    createMainBlock()
    {
        let div = document.createElement("div");
        div.classList.add("mod");

        div.innerHTML = this.iterateOverArray();
        this.collection.appendChild(div);
    }

    init()
    {
        this.createMainBlock();
    }
}

class RenderLib extends Render
{

}

class RenderModific extends Render
{
    
}

function renderHTML()
{
    let app = document.querySelector("#app");

    let header = document.createElement("header");
    header.classList.add("header"); 
    header.dataset.swither = "mods";

    // Тяжело читаймо, подумать как переделать
    let menuList = ["Моды", "Библиотеки", "Дополнительно"]; // +Сборки +Версии
    let menuItem = "";
    menuList.forEach(item => { menuItem +="<li class='menu__item'>" + item + "</li>"});

    header.innerHTML = "<nav class='header__menu'><ul class='menu'>" + menuItem + "</ul></nav>";

    let section = document.createElement("section");
    section.classList.add("collection"); 

    app.appendChild(header);
    app.appendChild(section);
}