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

function spawnMonkey(mw) {
    let monkeyEl = document.createElement("img");
    monkeyEl.classList.add("falling-monkey")
    monkeyEl.src = "/static/media/MONKEY.png";

    monkeyEl.style.width = randomInt(10, 150) + "px";
    monkeyEl.style.left = randomReal(0, 100) + "%";
    monkeyEl.style.opacity = randomReal(0.4, 0.7);

    let animDuration = randomInt(3000, 8000);
    monkeyEl.style.animationDuration = animDuration + "ms";

    mw.appendChild(monkeyEl);

    // remove monkeys after their animation
    setTimeout(() => {
        monkeyEl.remove();
    }, animDuration);
}

// play audio
var audio = new Audio("/static/audio/makio-and-linguini-theme.mp3");
audio.loop = true;
audio.play();

(async function() {
    var mw = document.getElementById("monkey-wrapper");
    
    while (true)
    {
        spawnMonkey(mw);
        var rand = randomInt(0, 800);
        await sleep(rand);
    }
})();