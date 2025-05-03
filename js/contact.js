let circleText="Ai Infinity. 讓愛，無限延伸";



let init = ()=>{
    circleBuild();
    

}


let circleBuild = ()=>{
    for(let i=0;i<circleText.length;i++){
        let circleItem = document.createElement("span");
        circleItem.className = "circleItem";
        circleItem.style.transform = "rotate("+i*360/circleText.length+"deg)";
        circleItem.textContent = circleText[i];
        $("#circleBox").append(circleItem);
    }
}

init();