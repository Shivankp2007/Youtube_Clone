var topnavSearchInput = document.querySelector("#topnavSearchInput");
var topnavSearchbarPackage = document.querySelector(".topnav-searchbar-package");
var topnavSearchFocusIndicator = document.querySelector(".topnav-search-focus-indicator");
var topnavSearchIconBtn = document.querySelector(".topnav-search-icon-btn");
var chips = document.querySelector(".chips");
var chips_left_btn = document.querySelector("left_btn");

var sidebar = document.querySelector(".nav-menu");
var hamburgerIconForSidebar = document.querySelector(".hamburger-icon-for-sidebar");
var hamburgerToggleFlag = false;

hamburgerIconForSidebar.addEventListener("click", () => {
    if (hamburgerToggleFlag == false) {
        sidebar.style.left = "0px";
        hamburgerToggleFlag = true;
    } else {
        sidebar.style.left = "-15rem";
        hamburgerToggleFlag = false;
    }
});

topnavSearchbarPackage.classList.remove("topnav-search-overlay");

function topnavSearchInputOnFocusEvent() {
    topnavSearchInput.style.borderTopLeftRadius = "0px";
    topnavSearchInput.style.borderBottomLeftRadius = "0px";
    topnavSearchInput.style.position = "relative";
    topnavSearchInput.style.top = "-38px";
    topnavSearchIconBtn.style.position = "relative";
    topnavSearchIconBtn.style.top = "-31px";
    topnavSearchFocusIndicator.style.display = "block";

};

function topnavSearchInputOnFocusOutEvent() {
    topnavSearchInput.style.borderTopLeftRadius = "40px";
    topnavSearchInput.style.borderBottomLeftRadius = "40px";
    topnavSearchFocusIndicator.style.display = "none";
    topnavSearchInput.style.position = "relative";
    topnavSearchInput.style.top = "0px";
    topnavSearchIconBtn.style.position = "relative";
    topnavSearchIconBtn.style.top = "7px";
};