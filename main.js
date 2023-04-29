AOS.init();

/************************BidSection**************************/
let bidSectionUSD = document.querySelector("#bidSectionUSD");
let bidSectionETH = document.querySelector("#bidSectionETH");

let USD = document.querySelector("#inputUSD");
let Ethereum = document.querySelector("#inputETH");
let betBtn = document.querySelector("#inputBet");


let number1 = Number(generateRandomFloatInRange(2.5, 10.75).toFixed(4));
document.querySelector("#bidSectionETH").innerText = number1;
document.querySelector("#bidSectionUSD").innerText = (number1 * 1800).toFixed(2);

USD.addEventListener("change", USDtoETH);
betBtn.addEventListener("click", update);


function USDtoETH() {
    let ethereumValue = USD.value / 1800;
    Ethereum.value = ethereumValue.toFixed(4);
}

function update(e) {
    e.preventDefault()
    let bidSectionUSDValue = Number(bidSectionUSD.innerText);
    let bidSectionETHValue = Number(bidSectionETH.innerText);
    let additionalValue = Number(USD.value);
    let ethereumValue = Number(additionalValue / 1800);
    if (additionalValue <= 0) {
        alert("Please type a number")
    } else {
        bidSectionUSD.innerHTML = (bidSectionUSDValue + additionalValue).toFixed(2);
        bidSectionETH.innerHTML = (bidSectionETHValue + ethereumValue).toFixed(4);
        alert("Your form has been registered");
        modalWindow1.style.display = "none";
    }
}

function generateRandomFloatInRange(min, max) {
    return (Math.random() * (max - min + 1)) + min;
}

/************************ModalSection**************************/


let bidBtn = document.querySelector("#bidBtn");
let seeBtn = document.querySelector("#seeBtn");


let modalWindow1 = document.getElementById("myModal1");
let closeBtn1 = document.getElementsByClassName("closeBtn1")[0];


bidBtn.onclick = function () {
    modalWindow1.style.display = "block";
    modalWindow1.style.transition = "1.5s ease-in-out";
}

closeBtn1.onclick = function () {
    modalWindow1.style.display = "none";
}


window.onclick = function (event) {
    if (event.target === modalWindow1) {
        modalWindow1.style.display = "none";
    }
}

let modalWindow2 = document.getElementById("myModal2");
let closeBtn2 = document.getElementsByClassName("closeBtn2")[0];

seeBtn.onclick = function () {
    modalWindow2.style.display = "block";
    modalWindow2.style.transition = "1.5s ease-in-out";
}

modalWindow2.addEventListener(
    "click",
    function (event) {
        if (
            event.target.matches("closeBtn2") ||
            !event.target.closest(".modal")
        ) {
            closeModal2()
        }
    },
    false
)

function closeModal2() {
    document.querySelector(".modal2").style.display = "none"
}

/************************TimerSection**************************/

let countDownDate = new Date("Apr 30, 2023 16:53:52").getTime();

let secondsFunction = setInterval(function () {

    let now = new Date().getTime();
    let timeLeft = countDownDate - now;

    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


    function addLeadingZero(number) {
        if (number < 10) {
            return "0" + number.toString();
        } else {
            return number.toString();
        }
    }

    document.getElementById("hours1").innerHTML = addLeadingZero(hours) + "h "
    document.getElementById("minutes1").innerHTML = addLeadingZero(minutes) + "m "
    document.getElementById("secs1").innerHTML = addLeadingZero(seconds) + "s "
    document.getElementById("hours2").innerHTML = addLeadingZero(hours) + "h "
    document.getElementById("minutes2").innerHTML = addLeadingZero(minutes) + "m "
    document.getElementById("secs2").innerHTML = addLeadingZero(seconds) + "s "
    document.getElementById("hours3").innerHTML = addLeadingZero(hours) + "h "
    document.getElementById("minutes3").innerHTML = addLeadingZero(minutes) + "m "
    document.getElementById("secs3").innerHTML = addLeadingZero(seconds) + "s "
    document.getElementById("hours4").innerHTML = addLeadingZero(hours) + "h "
    document.getElementById("minutes4").innerHTML = addLeadingZero(minutes) + "m "
    document.getElementById("secs4").innerHTML = addLeadingZero(seconds) + "s "

    if (timeLeft < 0) {
        clearInterval(secondsFunction);
        document.getElementById("hours1").innerHTML = ""
        document.getElementById("minutes1").innerHTML = ""
        document.getElementById("secs1").innerHTML = ""
        document.getElementById("end1").innerHTML = "Auction is closed";
        document.getElementById("hours2").innerHTML = ""
        document.getElementById("minutes2").innerHTML = ""
        document.getElementById("secs2").innerHTML = ""
        document.getElementById("end2").innerHTML = "Auction is closed";
        document.getElementById("hours3").innerHTML = ""
        document.getElementById("minutes3").innerHTML = ""
        document.getElementById("secs3").innerHTML = ""
        document.getElementById("end3").innerHTML = "Auction is closed";
        document.getElementById("hours4").innerHTML = ""
        document.getElementById("minutes4").innerHTML = ""
        document.getElementById("secs4").innerHTML = ""
        document.getElementById("end4").innerHTML = "Auction is closed";
    }
}, 1000);


/************************mainSecondSection Slider**************************/

let slider = tns({
    container: ".mainSecondSection-Slider",
    "items": "1",
    "slideBy": "1",
    "speed": 400,
    "nav": false,
    autoplay: true,
    controls: false,
    autoplayButtonOutput: false,
    responsive: {
        1600: {
            items: 6,
            gutter: 20
        },
        1500: {
            items: 5,
            gutter: 20
        },

        1400: {
            items: 4,
            gutter: 20
        },
        900: {
            items: 3,
            gutter: 20
        },
        700: {
            items: 2,
            gutter: 20
        },
        480: {
            items: 1,
            gutter: 20
        }
    }
});

window.onload = slider;


/*******************mainFifthSectionLoadMore*************************/


const cardContainer = document.getElementById("mainFifthSectionSlider");
const loadMoreButton = document.getElementById("loadMore");
const cardCountElem = document.getElementById("card-count");
const cardTotalElem = document.getElementById("card-total");
const cardExample = document.getElementById("C5.1");


/*generating a random number from our card array*****NOT WORKING PROPERLY*****/

// const cards = document.querySelectorAll('.mainFifthSectionCard');
// const cardsArray = [].map.call(cards, function(el) {
//     return el.id;
// });
// const randomElement = cardsArray[Math.floor(Math.random() * cardsArray.length)];
//
// console.log (randomElement);


const cardLimit = 16;
const cardIncrease = 4;
const pageCount = Math.ceil(cardLimit / cardIncrease);
let currentPage = 1;

cardTotalElem.innerHTML = cardLimit;

const handleButtonStatus = () => {
    if (pageCount === currentPage) {
        loadMoreButton.classList.add("disabled");
        loadMoreButton.setAttribute("disabled", true);
    }
};

const createCard = (index) => {
    const card = document.createElement("div");
    card.className = "mainFifthSectionCard";
    card.innerHTML = cardExample.innerHTML;
    card.dataset.aos = "fade-up";
    cardContainer.appendChild(card);
};

const addCards = (pageIndex) => {
    currentPage = pageIndex;

    handleButtonStatus();

    const startRange = (pageIndex - 1) * cardIncrease;
    const endRange =
        pageIndex * cardIncrease > cardLimit ? cardLimit : pageIndex * cardIncrease;

    cardCountElem.innerHTML = endRange;

    for (let i = startRange + 1; i <= endRange; i++) {
        createCard(i);
    }
};

window.onload = function () {
    loadMoreButton.addEventListener("click", () => {
        addCards(currentPage + 1);
    });
};