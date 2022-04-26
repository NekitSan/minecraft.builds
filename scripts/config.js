const requestURL = "../builds/build_1.16.5_forge.json"; 
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const DATA = request.response;

    const RENDER_ITEMS = new RenderItem(DATA.main.item);
    RENDER_ITEMS.init();

    const RENDER_LIBS = new RenderLib(DATA.main.lib);


    const RENDER_MODIFICS = new RenderModific(DATA.main.modific);
};