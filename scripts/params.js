class Render
{
    constructor(params)
    {
        this.data = params; //arr
        this.body = document.querySelector("#app");
    }

    init() {}
}


class RenderItem extends Render
{
    defaultConstruction(data)
    {
        return ` 
        id: ${data.id}
        name: ${data.name}
        description: ${data.description}
        dependence: {
            lib_id: ${data.dependence.libs_id}
            mod_id: ${data.dependence.mod_id}
        }
        link: ${data.link}
        `;
    }

    createElement()
    {
        let div = document.createElement("div");
        div.innerHTML = "1";

        this.body.innerHTML = div;
    }

    init()
    {
        createElement();
    }
}

class RenderLib extends Render
{

}

class RenderModific extends Render
{
    
}