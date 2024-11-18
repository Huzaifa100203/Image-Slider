const slides = document.querySelectorAll(".slide")
var counter = 0;
// console.log(slides)
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
})
function slideImage(){
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

nextBtn.addEventListener("click", () => {
    if(counter == 4){return}
    counter++;
    slideImage()
})
prevBtn.addEventListener("click", () => {
    if (counter == 0) {return}
    counter--;
    slideImage()
})

