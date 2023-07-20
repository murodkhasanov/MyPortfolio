//Side bar
let tablinks = document.getElementsByClassName(".tab-links");
let tabcontent = document.getElementsByClassName(".tab-contents");
let sidemenu = document.getElementById("sidemenu")
//Telegram bot API
const button = document.querySelector(".formbtn")
const names = document.querySelector(".name");
const familiya = document.querySelector(".familiya");
// const email = document.querySelector(".email");
const textarea = document.querySelector(".textarea");



function opentab(tabname) {
    for(tablinks of tablinks) {
        tablinks.classList.remove("active-link");
    }
    for(tabcontent of tabcontent) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

//Telegram bot API
button.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = 1613825763
    const botToken = "2031317396:AAGG_jnu7hSRCV-XdYj3ASZKyMgzZyeSJU4"
    const nameValue = names.value;
    const familValue = familiya.value;
    // const emailValue = email.value;
    const textareavalu = textarea.value;
    let message =
        "Ismi: " + nameValue + "\nFamiliya: " + familValue + "\nComment: " + textareavalu;

    fetch("https://api.telegram.org/bot" + botToken + "/sendmessage", {
        method: "POST",
        body: JSON.stringify({
            "chat_id": id,
            "text": message
        }),
        headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        }
    }).then(res => res.json())
        .then(data => console.log(data))
})