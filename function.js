let scrollcon = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");
    
nextbtn.addEventListener("click", () => {
    scrollcon.scrollLeft += 100;
});
backbtn.addEventListener("click", () => {
    scrollcon.scrollLeft -= 100;
});