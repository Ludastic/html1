let button = document.getElementById("button");

function draw(ev) {
    let froggo = document.createElement("img");
    froggo.src = "./assets/froggo.png";
    froggo.className = "froggo";
    froggo.style.left = `${ev.clientX}px`;
    froggo.style.top = `${ev.clientY}px`;  
    document.body.appendChild(froggo);
}

button.onclick = (ev) => {
    document.addEventListener("mousemove", draw);

    setTimeout(() => {
        document.addEventListener("click", () => {
            document.removeEventListener("mousemove", draw);
            for (let froggo of document.querySelectorAll(".froggo")) {
                document.body.removeChild(froggo);
            }
        }, { once: true });
    }, 0);
}