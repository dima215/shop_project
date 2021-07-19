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
let counterOfClicksClose = 0;

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
    return counterOfClicksClose++;
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


//likeBtns.forEach((item) =>
//  item.addEventListener("click", function (e) {
//    e.target.style.backgroundColor = "red";
//  })
//);




//scroll

//let scrollHeight = Math.max(
//  document.body.scrollHeight, document.documentElement.scrollHeight,
//  document.body.offsetHeight, document.documentElement.offsetHeight,
//  document.body.clientHeight, document.documentElement.clientHeight
//);
//console.log(scrollHeight / 2);
//console.log(counterOfClicksClose);

//window.onscroll = function () {
//    let scrolled = +window.pageYOffset;
//    if (counterOfClicksClose == 0 && (scrolled + 400) > (scrollHeight / 2)) {
//    openModal();
//    };
//};

function showModalByScroll() {
  if (window.pageYOffset > document.body.scrollHeight / 2) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);


// slick slider

$(".slider-block").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
});

// change products quantity



//let decrementBtns = document.querySelectorAll(".decrement-button")[0];
//let incrementBtns = document.querySelectorAll(".increment-button")[0];
//let quantityInputs = document.querySelectorAll(".products-quantity input")[0];

let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInputs = document.querySelectorAll(".products-quantity input");


console.log(decrementBtns);
console.log(incrementBtns);
console.log(quantityInputs);

console.log(quantityInputs[1].value);

for(let i = 0; i < quantityInputs.length; i++) {
    incrementBtns[i].addEventListener("click", function () {
        +quantityInputs[i].value++;
            if (+quantityInputs[i].value < 5) {
                decrementBtns[i].disabled = false;
            } else {
                incrementBtns[i].disabled = true;
    };
    })
    decrementBtns[i].addEventListener("click", function () {
        +quantityInputs[i].value--;
            if (+quantityInputs[i].value > 0) {
                incrementBtns[i].disabled = false;
            } else {
                decrementBtns[i].disabled = true;
    };
    })
};
//for(let i = 0; i < decrementBtns.length; i++) {
//    decrementBtns[i].addEventListener("click", function () {
//        quantityInputs[i].value = +quantityInputs[i].value - 1;
//            if (+quantityInputs[i].value > 0) {
//                decrementBtns[i].disabled = false;
//                incrementBtns[i].disabled = false;
//            } else {
//                decrementBtns[i].disabled = true;
//    };
//    })
//};

        
//incrementBtns.addEventListener("click", function () {
//    quantityInputs.value++;
//    if (+quantityInputs.value < 5) {
//        decrementBtns.disabled = false;
//        incrementBtns.disabled = false;
//    } else {
//        incrementBtns.disabled = true;
//    };
//    //let currentCount = +quantityInputs.value;
//    //quantityInputs.value = currentCount + 1;
//    //quantityInputs.value++
//    //console.log(quantityInputs.value)
//});
//decrementBtns.addEventListener("click", function () {
//    quantityInputs.value--;
//    if (+quantityInputs.value > 0) {
//        //decrementBtns.removeEventListener("click", decrementQuantity);
//        decrementBtns.disabled = false;
//        incrementBtns.disabled = false;
//    } else {
//        
//        decrementBtns.disabled = true;
//    };
//})