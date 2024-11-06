let scrollcontainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollcontainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
    scrollcontainer.style.scrollBehaviour = "auto";
})

nextbtn.addEventListener("click",()=>{
    scrollcontainer.style.scrollBehaviour = "smooth";
    scrollcontainer.scrollLeft += 300;
})

backbtn.addEventListener("click",()=>{
    scrollcontainer.style.scrollBehaviour = "smooth";
    scrollcontainer.scrollLeft -= 300;
})