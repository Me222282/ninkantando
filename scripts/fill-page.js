function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

var filling = false;
async function fill_page()
{
    var object = document.getElementById("fill-page");
    
    while (true)
    {
        var lt = document.createElement("object");
        lt.classList.add("svg-medium", "spin");
        lt.data = "/static/svg/spaghetti-stealer.svg";
        lt.type = "image/svg+xml";
        
        object.appendChild(lt);
        await sleep(500);
    }
}

// define a handler
async function doc_keyUp(e) {
    if (e.code === 'KeyR' && !filling)
    {
        filling = true;
        fill_page();
    }
}
// register the handler 
document.addEventListener('keydown', doc_keyUp, false);