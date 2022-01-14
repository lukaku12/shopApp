//landing page animation

gsap.fromTo("#landpageImage", { y: -700 }, { y: 0, delay: 0.3, duration: 1 });

gsap.fromTo(".text", { x: -700 }, { x: 0, delay: 0.3, duration: 1 });

gsap.fromTo(
  "#btn-get-started",
  { x: 200 },
  { x: -190, delay: 0.3, duration: 1 }
);

var getStarted = document.getElementById("btn-get-started");

getStarted.addEventListener("click", () => {
  gsap.fromTo("#landpageImage", { y: 0 }, { y: -700, duration: 1 });

  gsap.fromTo(".text", { x: 0 }, { x: -700, duration: 1 });

  gsap.fromTo(
    "#btn-get-started",
    { x: -190 },
    { x: 200, duration: 0.2, onComplete: changePage }
  );
});

function changePage() {
  document.getElementById("removeOnButton").style.display = "none";
  document.getElementById("main-page").style.display = "inline";

  gsap.fromTo(".greet", { y: -700 }, { y: 0, duration: 1 });

  gsap.fromTo("#summer-collections", { x: -700 }, { x: 0, duration: 1 });
  gsap.fromTo("#summer-text", { x: -700 }, { x: 0, duration: 1 });

  gsap.fromTo("#summer-image", { x: 700 }, { x: 0, duration: 1 });

  gsap.fromTo("#winter-collections", { x: 700 }, { x: 0, duration: 1 });
  gsap.fromTo("#winter-text", { x: 700 }, { x: 0, duration: 1 });

  gsap.fromTo("#winter-image", { x: -700 }, { x: 0, duration: 1 });

  gsap.fromTo(
    ".offers",
    { scale: 0 },
    { scale: 1, delay: 0.8, duration: 1.5, ease: "elastic.out(1, 0.2)" }
  );

  gsap.fromTo(".offer-collections", { y: 700 }, { y: 0, duration: 1 });
  gsap.fromTo(".sale", { y: 700 }, { y: -50, duration: 1 });
  gsap.fromTo("#knowMore", { y: 700 }, { y: -110, duration: 1 });
}

var summerImage = document.getElementById("summer-image");
var summerText = document.getElementById("summer-text");
var summerCollections = document.getElementById("summer-collections");

summerCollections.addEventListener("click", () => {
  gsap.fromTo("#shop-page", { y: 1000 }, { y: 0, duration: 0.7});
  document.getElementById("shop-page").style.display = "inline";
  gsap.fromTo('.back-button', {rotation: 90}, {duration: 0.2,rotation: -90, delay:0.6 })
  document.getElementById("img").src = "./assets/image-23.png";

});
summerImage.addEventListener("click", () => {
  gsap.fromTo("#shop-page", { y: 1000 }, { y: 0, duration: 0.7});
  document.getElementById("shop-page").style.display = "inline";
  gsap.fromTo('.back-button', {rotation: 90}, {duration: 0.2,rotation: -90, delay:0.6 })
  document.getElementById("img").src = "./assets/image-23.png";
});
summerText.addEventListener("click", () => {
  gsap.fromTo("#shop-page", { y: 1000 }, { y: 0, duration: 0.7 });
  document.getElementById("shop-page").style.display = "inline";
  gsap.fromTo('.back-button', {rotation: 90}, {duration: 0.2,rotation: -90, delay:0.6 })
  document.getElementById("img").src = "./assets/image-23.png";
});

var winterImage = document.getElementById("winter-image");
var winterText = document.getElementById("winter-text");
var winterCollections = document.getElementById("winter-collections");

winterCollections.addEventListener("click", () => {
  gsap.fromTo("#shop-page", { y: 1000 }, { y: 0, duration: 0.7 });
  document.getElementById("shop-page").style.display = "inline";
  gsap.fromTo('.back-button', {rotation: 90}, {duration: 0.2,rotation: -90, delay:0.6 })
  document.getElementById("img").src = "./assets/winter-collections2.png";
});
winterImage.addEventListener("click", () => {
  gsap.fromTo("#shop-page", { y: 1000 }, { y: 0, duration: 0.7 });
  document.getElementById("shop-page").style.display = "inline";
  gsap.fromTo('.back-button', {rotation: 90}, {duration: 0.2,rotation: -90, delay:0.6 })
  document.getElementById("img").src = "./assets/winter-collections2.png";
});
winterText.addEventListener("click", () => {
  gsap.fromTo("#shop-page", { y: 1000 }, { y: 0, duration: 0.7 });
  document.getElementById("shop-page").style.display = "inline";
  gsap.fromTo('.back-button', {rotation: 90}, {duration: 0.2,rotation: -90, delay:0.6 })
  document.getElementById("img").src = "./assets/winter-collections2.png";
});

var back = document.getElementById("back");
var wishlist = document.getElementById("wishlist");
var busket = document.getElementById("busket");

back.addEventListener("click", () => {
  size.forEach((el) => {
    el.classList.remove("active");
  });
  gsap.fromTo("#shop-page", { y: 0 }, { y: 1000});
  document.getElementById("added").innerHTML = '0';
  document.getElementById("add").style.display = "none";
  wishlist.src = "./assets/Wishlist.png";
  busket.src = "./assets/Bag.png";


});

wishlist.addEventListener("click", Start);
function Start() {
  wishlist.removeEventListener("click", Start);
  wishlist.addEventListener("click", Stop);
  wishlist.src = "./assets/WishlistRed.png";
}

function Stop() {
  wishlist.removeEventListener("click", Stop);
  wishlist.addEventListener("click", Start);
  wishlist.src = "./assets/Wishlist.png";
}






busket.addEventListener("click", () => {});

/*function goBackMain() {
  
  document.getElementById("added").innerHTML = '0';
  document.getElementById("add").style.display = "none";

  document.getElementById("main-page").style.display = "inline";
  document.getElementById("shop-page").style.display = "none";

  gsap.fromTo(".greet", { y: -400 }, { y: 0, duration: 0.5});

  gsap.fromTo("#summer-collections", { x: -400 }, { x: 0, duration: 0.5 });
  gsap.fromTo("#summer-text", { x: -400 }, { x: 0, duration: 0.5 });

  gsap.fromTo("#summer-image", { x: 400 }, { x: 0, duration: 0.5 });

  gsap.fromTo("#winter-collections", { x: 400 }, { x: 0, duration: 0.5 });
  gsap.fromTo("#winter-text", { x: 400 }, { x: 0, duration: 0.5 });

  gsap.fromTo("#winter-image", { x: -400 }, { x: 0, duration: 0.5 });

  gsap.fromTo(
    ".offers",
    { scale: 0 },
    { scale: 1, delay: 0.8, duration: 1, ease: "elastic.out(1, 0.2)" }
  );

  gsap.fromTo(".offer-collections", { y: 600 }, { y: 0, duration: 0.5 });
  gsap.fromTo(".sale", { y: 600 }, { y: -50, duration: 0.5 });
  gsap.fromTo("#knowMore", { y: 600 }, { y: -110, duration: 0.5 });

}*/

const size = document.querySelectorAll(".size");

size.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.add("active");

    size.forEach((e) => {
      e.addEventListener("click", () => {
        e.classList.add("active");
        el.classList.remove("active");
      });
    });
  });
});

const addToBag = document.getElementById("Add-to-Bag");

addToBag.addEventListener("click", () => {
  busket.src = "./assets/BagPurple.png";
  document.getElementById("add").style.display = "flex";

  document.getElementById("added").innerHTML =
    +document.getElementById("added").innerHTML + +1;
});

