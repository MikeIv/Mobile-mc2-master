var mainMenu = document.querySelector(".m_main-header__menu-btn");
var mainMenuPopup = document.querySelector(".m_main-header__menu");

var linkItemReg = document.querySelector(".js-m_main-search__item-region");
var region = document.querySelector(".m_main-modal-region");
var closeReg = document.querySelector(".m_main-modal-region__head-close");

var linkItemCal = document.querySelector(".js-m_main-search__item-calendar");
var calendar = document.querySelector(".m_main-calendar");
var closeCal = document.querySelector(".m_main-calendar__head-close");

var linkItemCom = document.querySelector(".js-m_main-search__item-company");
var company = document.querySelector(".m_main-modal-company");
var closeCom = document.querySelector(".m_main-modal-company__head-close");

var linkItemLin = document.querySelector(".js-m_main-search__item-liner");
var liner = document.querySelector(".m_main-modal-liner");
var closeLin = document.querySelector(".m_main-modal-liner__head-close");


// open main menu
mainMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (mainMenuPopup.classList.contains("m_main-header__menu-show")) {
    mainMenuPopup.classList.remove("m_main-header__menu-show");
    mainMenu.classList.remove("m_main-header__menu-btn-close");
  } else {
    mainMenuPopup.classList.add("m_main-header__menu-show");
    mainMenu.classList.add("m_main-header__menu-btn-close");
  }

});


// open region
linkItemReg.addEventListener("click", function (evt) {
  evt.preventDefault();
  region.classList.add("m_main-modal-region-show");
});

closeReg.addEventListener("click", function (evt) {
  evt.preventDefault();
  region.classList.remove("m_main-modal-region-show");
});


// open calendar
linkItemCal.addEventListener("click", function (evt) {
  evt.preventDefault();
  calendar.classList.add("m_main-calendar-show");
});

closeCal.addEventListener("click", function (evt) {
  evt.preventDefault();
  calendar.classList.remove("m_main-calendar-show");
});


// open company
linkItemCom.addEventListener("click", function (evt) {
  evt.preventDefault();
  company.classList.add("m_main-modal-company-show");
});

closeCom.addEventListener("click", function (evt) {
  evt.preventDefault();
  company.classList.remove("m_main-modal-company-show");
});



// open liner
linkItemLin.addEventListener("click", function (evt) {
  evt.preventDefault();
  liner.classList.add("m_main-modal-liner-show");
});

closeLin.addEventListener("click", function (evt) {
  evt.preventDefault();
  liner.classList.remove("m_main-modal-liner-show");
});




