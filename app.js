"use strict";
const closeBtn =document.querySelector(".close_btn");
const menuBtn = document.querySelector(".menu");
const menu = document.querySelector(".nav_links");
const overlay = document.querySelector(".overlay");
const mainThumbail = document.querySelector(".main_thumbnail");
const mainThumbailLight = document.querySelector(".lightbox_container .main_thumbnail");
const images = document.querySelectorAll(".preview img");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const amount = document.querySelector(".amount");

const thumbMob = document.querySelector(".thumb_mob")
const nextBtn =  document.getElementById("next");
const prevBtn = document.getElementById("previous");
const slider = document.querySelector(".mobile_thumb");
const cartBtn = document.querySelector(".cart_btn");
const cart = document.querySelector(".cart_wrp");
const lightBox = document.querySelector(".lightbox");
const closeLightboxBtn = document.querySelector(".close_lightbox");
const addBtn = document.querySelector(".add_btn");
const indicator = document.querySelector(".indicator");
const wrp = document.querySelector(".cart_content");



let amountValue = 0;
let currentImg = 1;

indicator.style.display = "none";

// openmenu functionality
function openMenu() {
    menu.classList.add("active");
    overlay.classList.add("active");
}
// closemenu functionality
function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
}
// plus functionality
function handlePlus() {
    amountValue++;
    amount.innerText = amountValue;
}
// minus functionality
function handleMinus(){
    if(amountValue > 0){
        amountValue--;
    }
    amount.innerText = amountValue;
}
// next image functionality
function nextImage(){
    if(currentImg == 4){
        currentImg = 1
    } else {
        currentImg++;
    }
    thumbMob.src = `./images/image-product-${currentImg}.jpg`;
}

// functiontionality prev img
function prevImage(){
    if(currentImg == 1){
        currentImg = 4;
    } else {
        currentImg--;
    }
    thumbMob.src = `/images/image-product-${currentImg}.jpg`;
} 
// cart toggle
function toggleCart(){
    cart.classList.toggle("invisible");
}
// close lightbox functionaity
function closeLightBox(){
    lightBox.classList.add("invisible");
}
// open lightbox functionaity
function openLightBox(){
    lightBox.classList.remove("invisible");
}

// function add item
function addItem(){
    if(amountValue > 0){
        const total = 125.00 * amountValue;
        wrp.classList.remove("empty");
        wrp.innerHTML = `
        <div class="product">
        <div>
        <img class="product_img" src="https://res.cloudinary.com/dlavwkna7/image/upload/v1700148293/image-product-1-thumbnail_jxif0j.jpg">
        <div  class ="product_info">
        <p class="product_title">Fall Limited Edition Sneakers</p>
        <p><span>$125.00</span> <span class="number">${amountValue}</span> <b class="total">${total}</b></p>
        </div>
        <button class="delete_btn" onclick="deleteItem()"><img src="https://res.cloudinary.com/dlavwkna7/image/upload/v1700148293/icon-delete_msr16i.svg"></button>
        </div>
        <button class="checkout_btn">checkout</button>
        </div> 
        `;
        indicator.style.display = "block";
        indicator.innerHTML = amountValue;
    }
}
// delete function
function deleteItem(){
    wrp.classList.add("empty");
    wrp.innerHTML = `<p>Your cart is empty</p>`;
    indicator.style.display = "none";
}

images.forEach((image) => {
    image.addEventListener("click", () => {
        const lastImg = document.querySelectorAll(".selected");
        if(lastImg){
            lastImg[0].classList.remove("selected");
        }
        image.classList.add("selected");
        const selectedImg = document.querySelector(".selected");
        switch(selectedImg.getAttribute("src")){
            case "https://res.cloudinary.com/dlavwkna7/image/upload/v1700148293/image-product-1-thumbnail_jxif0j.jpg":
                mainThumbail.src =".https://res.cloudinary.com/dlavwkna7/image/upload/v1700148293/image-product-1_zonfjt.jpg";
                mainThumbailLight.src = "https://res.cloudinary.com/dlavwkna7/image/upload/v1700148293/image-product-1_zonfjt.jpg";
              break;
            case "https://res.cloudinary.com/dlavwkna7/image/upload/v1700148295/image-product-2-thumbnail_zmoeqt.jpg":
                mainThumbail.src ="https://res.cloudinary.com/dlavwkna7/image/upload/v1700148296/image-product-2_hornhe.jpg";
                mainThumbailLight.src = "https://res.cloudinary.com/dlavwkna7/image/upload/v1700148296/image-product-2_hornhe.jpg";
              break;  
            case "https://res.cloudinary.com/dlavwkna7/image/upload/v1700148296/image-product-3_jc3itx.jpg":
                mainThumbail.src ="https://res.cloudinary.com/dlavwkna7/image/upload/v1700148296/image-product-3_jc3itx.jpg";
                mainThumbailLight.src = "https://res.cloudinary.com/dlavwkna7/image/upload/v1700148296/image-product-3_jc3itx.jpg";
              break;  
            case "https://res.cloudinary.com/dlavwkna7/image/upload/v1700148296/image-product-4-thumbnail_a1gcaq.jpg":
                mainThumbail.src ="https://res.cloudinary.com/dlavwkna7/image/upload/v1700148296/image-product-4-thumbnail_a1gcaq.jpg";
                mainThumbailLight.src = "https://res.cloudinary.com/dlavwkna7/image/upload/v1700148296/image-product-4-thumbnail_a1gcaq.jpg";
              break;  

        }
    })
})

// this   
menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
plusBtn.addEventListener("click", handlePlus);
minusBtn.addEventListener("click", handleMinus);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
cartBtn.addEventListener("click", toggleCart);
closeLightboxBtn.addEventListener("click", closeLightBox);
mainThumbail.addEventListener("click", openLightBox);
addBtn.addEventListener("click", addItem);

