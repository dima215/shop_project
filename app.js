// add to cart

let productsCountEl = document.getElementById("product-count");
//console.log(productsCountEl);
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
//console.log(addToCartBtns);


for(let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click",function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
};

// modal

let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");

moreDetailsBtns.forEach(btn => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    btn.addEventListener("click", openModal)
});

closeBtn.addEventListener("click", closeModal);

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
};
function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
};

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal()
    }
});

//hearts

let heartsBtns = document.querySelectorAll(".like");
//console.log(heartsBtns);

for(let i = 0; i < addToCartBtns.length; i++) {
    heartsBtns[i].addEventListener("click",function() {
        heartsBtns[i].classList.toggle("like_click_js");
    })
};


//scroll

let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollHeight / 2);
console.log(window.scrollY);

window.onscroll = function () {
    let scrolled = +window.pageYOffset;
    if (scrolled > scrollHeight / 2) {
    openModal();
    };
};

