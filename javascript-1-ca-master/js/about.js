setTimeout(function change(){ 
    
    let p = document.querySelector(".about");
    let txt = p.textContent;

    p.textContent = p.textContent.replace(/the/g, "banana")

    let p2 = document.querySelector(".about");
    let txt2 = p.textContent;

    p.textContent = p.textContent.replace(/The/g, "Banana")

}, 3000);

 