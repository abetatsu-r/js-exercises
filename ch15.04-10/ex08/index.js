(function updateClock() {
    let now = new Date();
    let sec = now.getSeconds();
    let min = now.getMinutes() + sec/60;
    let hour = (now.getHours() % 12) + min/60;
    let minangle = min * 6;
    let hourangle = hour * 30;
    let secondangle = sec * 6;

    let minhand = document.querySelector("#clock .minutehand");
    let hourand = document.querySelector("#clock .hourhand");

    // 秒針
    let secondhand = document.querySelector("#clock .secondhand");
    if(!secondhand) {
        console.log("ok?")
        const svg = "http://www.w3.org/2000/svg"
        let clock = document.querySelector("#clock");
    
        
        secondhand = document.createElementNS(svg, "line");
        secondhand.setAttribute("x1", 50);
        secondhand.setAttribute("y1", 50);
        secondhand.setAttribute("x2", 50);
        secondhand.setAttribute("y2", 15);
        secondhand.setAttribute("stroke-width", 1);
        secondhand.setAttribute("stroke", "black");
        secondhand.setAttribute("class", "secondhand");
    
        clock.append(secondhand);    
    }
    
    minhand.setAttribute("transform", `rotate(${minangle},50,50)`);
    hourand.setAttribute("transform", `rotate(${hourangle},50,50)`);
    secondhand.setAttribute("transform", `rotate(${secondangle},50,50)`);

    setTimeout(updateClock, 1000);
}());