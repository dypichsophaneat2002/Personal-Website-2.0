// Dark Mode Feature
// Dark Mode Button
const dark_btn = document.querySelector(".dark-btn")
let isDarkMode = false;
// Skills Item
const skill_item = document.querySelectorAll(".itemS");
const title = document.querySelectorAll(".section-title");
const highlighted_text = document.querySelectorAll(".blue");
const detail_button = document.querySelectorAll(".detail_button");
const contact_button = document.querySelectorAll(".contact-btn");

dark_btn.addEventListener("click", () => {
    isDarkMode = !isDarkMode; 
    console.log(isDarkMode);
    
    if(isDarkMode) {
        dark_btn.classList.remove("black-btn");
        dark_btn.classList.add("darkMode-btn");
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        skill_item.forEach((item) => {
            item.classList.remove("skill-item");
            item.classList.add("skill-item-dark");
        });
        title.forEach((item) => item.style.color = "#F7CD3C")
        highlighted_text.forEach((item) => item.style.color="#F7CD3C");
        detail_button.forEach((item) => {
            item.classList.remove("detail-btn");
            item.classList.add("detail-btn-dark");
        })
        contact_button.forEach((item) => {
            item.style.color = "white";
            item.style.border = "solid 2px white",
            item.style.backgroundColor = "black";
        })
    } else {
        dark_btn.classList.add("black-btn");
        dark_btn.classList.remove("darkMode-btn");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        skill_item.forEach((item) => {
            item.classList.remove("skill-item-dark");
            item.classList.add("skill-item");
        });
        highlighted_text.forEach((item) => item.style.color="#0060D1");
        title.forEach((item) => item.style.color = "#0060D1")
        detail_button.forEach((item) => {
            item.classList.add("detail-btn");
            item.classList.remove("detail-btn-dark");
        });
        contact_button.forEach((item) => {
            item.style.color = "black";
            item.style.border = "solid 2px black",
            item.style.backgroundColor = "white";
        })
    }

});
