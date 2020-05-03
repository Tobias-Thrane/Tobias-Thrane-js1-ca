fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/info", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "3bc421dc94msh27dec8ff911b009p1f68b7jsn29cb18e97fd2"
        }
        })
.then((response) => {
      return response.json();
    })
.then((data) => {
      
    getClass(data.classes);
    getFactions(data.factions);
    getRaces(data.races);
    

    console.log(data);
    console.log(data);
});


function getClass(classes) {

    const pro1 = document.querySelector(".pro1");
    
    let html ="";
      
    for (let i = 0; i<classes.length; i++){

        html += `<p>${classes[i]}</p>`;
    }

    pro1.innerHTML = html;
}

function getFactions(factions) {

    const pro2 = document.querySelector(".pro2");
    
    let html = "";
      
    for (let i = 0; i<factions.length; i++){

        html += `<p>${factions[i]}</p>`
    }

    pro2.innerHTML = html;
}

function getRaces(races) {

    const pro3 = document.querySelector(".pro3");
    
    let html = "";
      
    for (let i = 0; i<races.length; i++){

        html += `<p>${races[i]}</p>`
    }

    pro3.innerHTML = html;
}