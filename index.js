fetch("https://meme-api.herokuapp.com/gimme")
    .then((res)=>res.json())
    .then((json)=>{
        document.querySelector(".title").textContent = json.title;
        document.querySelector(".author").textContent = json.author;
        document.querySelector("img").setAttribute("src", json.preview[2]);
    })

const timer = document.querySelector(".timer");

setInterval(() => {
    let date = new Date();
    let ourtime = date.getHours();

    if (ourtime > 12) {
        ourtime -= 12
        ourtime = "0"+ourtime
    }

    timer.textContent = `${ourtime}:${date.getMinutes()}:${date.getSeconds()}`
}, 1000);