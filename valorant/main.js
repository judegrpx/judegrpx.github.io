const characters = [{
        name: "brimstone",
        line: ""
    },
    {
        name: "phoenix",
        line: ""
    },
    {
        name: "sage",
        line: ""
    },
    {
        name: "sova",
        line: ""
    },
    {
        name: "viper",
        line: ""
    },
    {
        name: "cypher",
        line: ""
    },
    {
        name: "reyna",
        line: ""
    },
    {
        name: "killjoy",
        line: ""
    },
    {
        name: "breach",
        line: ""
    },
    {
        name: "omen",
        line: ""
    },
    {
        name: "jett",
        line: ""
    },
    {
        name: "raze",
        line: ""
    },
    {
        name: "skye",
        line: ""
    },
    {
        name: "yoru",
        line: ""
    },
    {
        name: "astra",
        line: ""
    },
    {
        name: "kay/o",
        line: ""
    },
    {
        name: "chamber",
        line: ""
    },
    {
        name: "neon",
        line: ""
    },
    {
        name: "fade",
        line: ""
    },
    {
        name: "harbor",
        line: ""
    },
    {
        name: "gekko",
        line: ""
    }
]

var currentChar = 0;
var currentBackgroundVolume = 1;

const backgroundMusic = document.getElementById('backgroundMusic');
const charName = document.getElementById('charName');
const charNum = document.getElementById('charNum');
const currChar = document.getElementById('currChar');
const charLine = document.getElementById('charLine');
const header = document.getElementById('header');
const beginning = document.getElementById('beginning');
const wrapper = document.getElementById('wrapper');

document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        header.style.marginTop = '0vh';
        beginning.style.margin = '-100vh 0vh 100vh 0vh'
        backgroundMusic.play();

        setTimeout(function () {
            wrapper.style.overflowY = 'scroll';
        }, 1000);
    } else if (event.key === "q") {
        currentBackgroundVolume = currentBackgroundVolume > 0 ? currentBackgroundVolume - 0.05 : 0;

        backgroundMusic.volume = currentBackgroundVolume;
    } else if (event.key === "w") {
        currentBackgroundVolume = currentBackgroundVolume < 1 ? currentBackgroundVolume + 0.05 : 1;

        backgroundMusic.volume = currentBackgroundVolume;
    }
});

function nextChar() {
    if (currentChar < characters.length - 1) {
        currentChar++;
    } else {
        currentChar = 0;
    }

    showChar();
}

function prevChar() {
    if (currentChar > 0) {
        currentChar--;
    } else {
        currentChar = 20;
    }

    showChar();
}

function showChar() {
    var charNumText = ((currentChar >= 9) ? currentChar + 1 : '0' + (currentChar + 1)) + '.';

    var name = characters[currentChar].name;

    charNum.innerHTML = charNumText;
    charName.innerHTML = name;
    currChar.setAttribute('src', './resources/images/characters/' + name + '.png');
    charLine.setAttribute('src', './resources/lines/' + name + '.mp3');
    charLine.play();

    name = (name === 'kay/o') ? 'kay-o' : name;

    charName.setAttribute('href', 'https://playvalorant.com/en-sg/agents/' + name + '/');
}

const cine = [{
        name: 'duelists',
        link: 'https://youtu.be/e_E9W2vsRbQ'
    },
    {
        name: 'retake',
        link: 'https://youtu.be/hhlgphVf-1g'
    },
    {
        name: 'duality',
        link: 'https://youtu.be/-M_r8MKQ3mo'
    },
    {
        name: 'warm up',
        link: 'https://youtu.be/OyLHi34Qzv4'
    },
    {
        name: 'shattered',
        link: 'https://youtu.be/PlpqhZiumDM'
    },
    {
        name: 'revelation',
        link: 'https://youtu.be/XfuMEmcz3k0'
    }
]


const cineLink = document.getElementById('cineLink');
const cineCover = document.getElementById('cineCover');
const cineButtons = document.getElementById('cineButton').getElementsByTagName('button');

var currentCine = 0;
var preCine = 0;

function nextCine() {
    preCine = currentCine;

    if (currentCine < cine.length - 1) {
        currentCine++;
    } else {
        currentCine = 0;
    }

    showCine();
}

function prevCine() {
    preCine = currentCine;

    if (currentCine > 0) {
        currentCine--;
    } else {
        currentCine = 5;
    }

    showCine();
}

function showCine() {
    cineLink.setAttribute('href', cine[currentCine].link);
    cineCover.setAttribute('src', './resources/images/cinematics/' + cine[currentCine].name + '.jpg');
    cineButtons[preCine + 1].classList.remove('active');
    cineButtons[currentCine + 1].classList.add('active');
}

function showSpecificCine(cineNo) {
    preCine = currentCine;
    currentCine = cineNo;

    showCine();
}

const maps = [{
        name: 'lotus',
        description: 'A mysterious structure housing an astral conduit radiates with ancient power. Great stone doors provide a variety of movement opportunities and unlock the paths to three mysterious sites.        '
    },
    {
        name: 'pearl',
        description: 'Attackers push down into the Defenders on this two-site map set in a vibrant, underwater city. Pearl is a geo-driven map with no mechanics. Take the fight through a compact mid or the longer range wings in our first map set in Omega Earth.'
    },
    {
        name: 'fracture',
        description: 'A top secret research facility split apart by a failed radianite experiment. With defender options as divided as the map, the choice is yours: meet the attackers on their own turf or batten down the hatches to weather the assault.'
    },
    {
        name: 'breeze',
        description: 'Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You\'ll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.'
    },
    {
        name: 'icebox',
        description: 'Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.'
    },
    {
        name: 'bind',
        description: 'Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank.'
    },
    {
        name: 'haven',
        description: 'Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There’s more territory to control, but defenders can use the extra real estate for aggressive pushes.'
    },
    {
        name: 'split',
        description: 'If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope ascenders. Each site is built with a looming tower vital for control. Remember to watch above before it all blows sky-high.'
    },
    {
        name: 'ascent',
        description: 'An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.'
    }
]

const mapName = document.getElementById('mapName');
const mapNum = document.getElementById('mapNum');
const mapDesc = document.getElementById('mapDesc');
const mapCover = document.getElementById('mapCover');

var currMap = 0;

function nextMap() {
    if (currMap < maps.length - 1) {
        currMap++;
    } else {
        currMap = 0;
    }

    showMap();
}

function prevMap() {
    if (currMap > 0) {
        currMap--;
    } else {
        currMap = 8;
    }

    showMap();
}

function showMap() {
    var charNumText = ((currMap >= 9) ? currMap + 1 : '0' + (currMap + 1)) + '.';

    var name = maps[currMap].name;

    mapNum.innerHTML = charNumText;
    mapName.innerHTML = name;
    mapDesc.innerHTML = maps[currMap].description;
    mapCover.setAttribute('src', './resources/images/maps/' + name + '.png');
}

function isShown(el) {
    const rect = el.getBoundingClientRect();

    return rect.top - window.innerHeight * 3 / 4 <= 0;
}

var charLinePlayable = true;

wrapper.addEventListener('scroll', function () {
    if (!isShown(currChar) || !charLinePlayable) return;

    charLinePlayable = false;
    charLine.play();
});

const disclaimer = document.getElementById('disclaimer');
const instruction = document.getElementById('instruction');
const text = 'This site is for educational purposes only. All assets, design, and works, that are used in this website, are under the rights of Riot Games and other rightful owners. Other creatives and execution of the website are artistically done by our team. Also, If the website seems too big for your screen, zoom it out around 65% for the best experience.'
const speed = 50;
var i = 0;

window.onload = () => {
    typewriter()
}

function typewriter() {
    if (i < text.length) {
        disclaimer.innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    } else {
        instruction.style.visibility = 'visible';
    }
}