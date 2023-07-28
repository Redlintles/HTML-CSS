let item = 1;

function fullLinkFix() {
  const links = document.querySelectorAll(".link--full");
  links.forEach(function (i) {
    i.parentNode.style.position = "relative";
  })
}
fullLinkFix();


function dismissPopup() {
  const popups = document.querySelectorAll(".popup");

  popups.forEach(function (i) {
    const closeButtons = i.querySelectorAll(".popup--dismiss");
    closeButtons.forEach(function (j) {
      j.addEventListener("click", function () {
        const parent = this.parentNode.parentNode;
        parent.remove();
      })
    })
  })
}

dismissPopup();


function backToTop() {
  const btnTop = document.querySelector("#btn-back-to-top");
  if (window.scrollY < 600) {
    btnTop.style.opacity = "0";
    btnTop.style.visibility = "hidden";
  } else {
    btnTop.style.opacity = "1";
    btnTop.style.visibility = "visible";
  }
  btnTop.addEventListener("click", function () {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  })
}

setInterval(backToTop, 500);


function sliderBtn(active = false) {
  const btn = document.createElement("button");
  btn.classList.add("btn", "btn--rounded-full", "slider__btn");

  if (active) {
    btn.classList.add("slider-btn--active");
  }
  return btn;
}

function addBottomBtns(container, skips) {
  for (let i = 0; i < skips; i++) {
    container.append(sliderBtn(i === 0 ? true : false));
  }
}

function sliderChange(slider) {
  const leftBtn = slider.querySelector(".slider__left");
  const rightBtn = slider.querySelector(".slider__right");
  const main = slider.querySelector(".slider__spinner");
  const bottom = slider.querySelector(".slider__buttons");
  const childs = Array.from(main.children);
  let length = childs.length;
  const itemsPerRow = parseInt(slider.getAttribute("itemsPerRow"));

  if (itemsPerRow) {
    length /= itemsPerRow;
  }
  function removeActive(buttons) {
    for (let i of buttons) {
      i.classList.remove("slider-btn--active");
    }
  }

  if (bottom) {
    addBottomBtns(bottom, length);


    const buttons = Array.from(bottom.children);

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        removeActive(buttons);
        item = buttons.indexOf(btn) + 1;
        main.style.transform = `translateX(-${item * 100}%)`;
        btn.classList.add("slider-btn--active");
      })
    })
  }

  leftBtn.addEventListener("click", function () {

    if (item > 1) {
      item--;
      main.style.transform = `translateX(-${item * 100}%)`;
    } else {
      item = length - 1;
      main.style.transform = `translateX(-${item * 100}%)`;
    }
    if (bottom) {
      const buttons = Array.from(bottom.children);
      removeActive(buttons);
      buttons[item - 1].classList.add("slider-btn--active");
    }
  })
  rightBtn.addEventListener("click", function () {
    let first;
    if (bottom) {
      let btn;
      const buttons = Array.from(bottom.children);
      if (item < length) {
        btn = buttons[item];
      } else {
        btn = buttons[0];
        item = 0;
      }
      first = buttons[0];
      removeActive(buttons);
      btn.classList.add("slider-btn--active");
    }
    if (item < length) {
      main.style.transform = `translateX(-${item * 100}%)`;
      item++;
    } else {
      item = 0;
      main.style.transform = "translateX(0%)";
      if (first) {
        const buttons = Array.from(bottom.children);
        removeActive(buttons);
        first.classList.add("slider-btn--active");
      }
    }
  })
}

sliderChange(document.querySelector("#main-slider"));
sliderChange(document.querySelector("#sponsored-slider"));
sliderChange(document.querySelector("#sponsored-slider-2"))
sliderChange(document.querySelector("#opportunity-slider"));


function dropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(function (element) {
    const header = element.querySelector(".dropdown__header");
    const content = element.querySelector(".dropdown__content");
    const icon = header.querySelector("i");

    header.addEventListener("click", function () {
      if (window, matchMedia("(max-width: 420px)").matches) {
        let opened = content.style.maxHeight === "0px" ? false : true;
        if (opened) {
          content.style.maxHeight = "0px";
          icon.style.transform = "rotateZ(0)";
        } else {
          content.style.maxHeight = "500px";
          icon.style.transform = "rotateZ(180deg) translateY(50%)";
        }
      }
    })
  })
}

dropdowns();

function changeScoreTxt() {
  const scoreBtn = document.querySelector("#score-btn");
  const txt = scoreBtn.textContent;
  if (window.matchMedia("(min-width: 1200px)").matches
    && txt !== "Avalie esta página") {
    scoreBtn.textContent = "Avalie esta página"
  } else if (
    window.matchMedia("(max-width: 420px)").matches
    && txt !== "Avalie") {
    scoreBtn.textContent = "Avalie"
  }
}

setInterval(changeScoreTxt, 1000);

function modalClose() {
  const closeButtons = document.querySelectorAll(".modal__close-btn");

  closeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.parentElement.parentElement.parentElement.style.display = "none";
    }
    )
  })
}

function toggleModals() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(function (modal) {
    const togglerID = modal.getAttribute("toggledBy");
    const toggler = document.querySelector(togglerID);

    toggler.addEventListener("click", function () {
      modal.style.display = "flex";
    })
  })
}


toggleModals();
modalClose()

function floatingNavbar() {
  const navbar = document.querySelector(".main-navbar");
  const bottomNavbar = document.querySelector(".bottom-navbar");
  const offset = navbar.offsetTop + bottomNavbar.offsetTop;
  const navHeight = navbar.offsetHeight;

  if (window.scrollY >= offset) {
    navbar.classList.add("main-navbar--sticky");
    bottomNavbar.style.marginTop = `${navHeight}px`;
  } else {
    console.log("aaaa");
    navbar.classList.remove("main-navbar--sticky");
    bottomNavbar.style.marginTop = `0px`;
  }
}

setInterval(floatingNavbar, 500)