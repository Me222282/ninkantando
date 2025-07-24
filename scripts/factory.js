/**
 * Get a random integer inside range [min, max].
 * Courtesy of https://stackoverflow.com/a/1527820/12980669.
 */
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Equivalent of randomInt() but not constrained to integers
 */
function randomReal(min, max) {
    return Math.random() * (max - min) + min;
}

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
        
        var container = document.createElement("div");
        container.classList.add("product-container");
        container.appendChild(lt);
        
        object.appendChild(container);
        await sleep(500);
    }
}, 500);

// random monkeys
setTimeout(async function() {
    var object = document.getElementById("factory");
    
    while (true)
    {
        let min = Math.max(object.children.length - 20, 0);
        var rand = randomInt(min, object.children.length - 1);
        var product = object.children.item(rand);
        
        let start = product.getBoundingClientRect();
        
        if (product.children.length <= 1)
        {
            var monkey = document.createElement("img");
            monkey.src = "/static/media/MONKEY.png";
            monkey.classList.add("mini-monkey");
            var x = -start.left;
            let isLeft = randomInt(0, 1);
            if (isLeft === 0)
            {
                x += window.innerWidth;
            }
            var y = -start.top;
            let isTop = randomInt(0, 1);
            if (isTop === 0)
            {
                y += window.innerHeight - 20;
            }
            
            product.appendChild(monkey);
            monkey.style.transform = "translate(" + x + "px," + y + "px) rotate(0deg)";
            console.log(monkey.style.transform);
            // cause document to update - add monkey at starting position
            // allows animation to work
            let layout = document.body.offsetWidth;
            
            let end = randomInt(0, 1);
            if (end === 0)
            {
                monkey.style.transform = "translate(-70px,-10px) rotate(720deg)";
            }
            else
            {
                monkey.style.transform = "translate(-40px,102px) rotate(720deg)";
            }
        }
        
        var time = randomInt(3000, 10000);
        await sleep(time);
    }
}, 3000);