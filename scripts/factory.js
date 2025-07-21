function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeout(async function() {
    var object = document.getElementById("factory");
    
    while (true)
    {
        var lt = document.createElement("object");
        lt.classList.add("svg-small", "entry");
        lt.data = "/static/svg/linguini-toy.svg";
        lt.type = "image/svg+xml";
        
        object.appendChild(lt);
        await sleep(500);
    }
}, 500);