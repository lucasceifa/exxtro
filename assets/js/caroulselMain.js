const itensQuantity = document.querySelectorAll('.caroulsel--item').length;
let currentCarrouselItem = 0;
const carousel = document.querySelector(".caroulsel");
carousel.style.width = `calc(100% * ${itensQuantity})`;

for(i = 0; i < itensQuantity; i++){
    spanMarkers();
    spanAtiv();
}

function nextItem(){
    currentCarrouselItem++
    if(currentCarrouselItem == (itensQuantity-1)){
        nextSpanSlider();
    }
    else{
        nextSpan();
    }
    if(currentCarrouselItem > (itensQuantity-1)){
        currentCarrouselItem = 0;
    }
    spanAtiv();
    updateMargin();
}
function previousItem(){
    currentCarrouselItem--
    if(currentCarrouselItem < 0){
        currentCarrouselItem = itensQuantity-1;
        prevSpanSlider();
    }
    else{
        prevSpan();
    }
    spanAtiv();
    updateMargin();
}

function updateMargin(){
    carousel.style.marginLeft = `calc(-${currentCarrouselItem} * 100%)`;
}
function spanMarkers(){
    const bars = document.querySelector(".slider--currentImage");
    let createSpan = document.createElement("span");
    createSpan.classList.add("slider--currentImage__mark");
    bars.appendChild(createSpan);
}
function spanAtiv(){
    let barAtiv = document.getElementById("bar").childNodes[currentCarrouselItem+1];
    barAtiv.classList.add("ativ");
}
function nextSpan(){
    let barAtiv = document.getElementById("bar").childNodes[currentCarrouselItem];
    barAtiv.classList.remove("ativ");
}
function prevSpan(){
    let barAtiv = document.getElementById("bar").childNodes[currentCarrouselItem+2];
    barAtiv.classList.remove("ativ");
}
function nextSpanSlider(){
    let barAtiv = document.getElementById("bar").childNodes[itensQuantity-1];
    barAtiv.classList.remove("ativ");
}
function prevSpanSlider(){
    let barAtiv = document.getElementById("bar").childNodes[1];
    barAtiv.classList.remove("ativ");
}
setInterval(nextItem, 10000);