const show = document.querySelector(".dice-cover");

const id = document.querySelector(".id");

const body = document.querySelector(".advice-body");


show.addEventListener("click", ()=> {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then( data => { 

        id.innerHTML = `ADVICE #${data.slip.id}`;
        body.innerHTML = `"${data.slip.advice}"`;
    });
});


