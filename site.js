// Outdated methods to offer more compatibility with older browser.
var domain = document.location.hostname;
var encode = btoa(domain);
var favicon = document.getElementById("favicon");
var header = document.getElementById("site");
var year = new Date().getFullYear();
var copyright = document.getElementById("year");
var footer = document.querySelector(".site"); // Classname wouldn't work for some odd reason.
var icon = document.getElementById("icon");
var dicebear = "https://avatars.dicebear.com/api/miniavs/" + encode + ".png";

// Favicon
favicon.href = dicebear;

// Refrences to domain
if (header) {
    header.innerText = domain;
}
footer.innerHTML = domain;

// Year
copyright.innerText = year;

// Icon
if (icon) {
    icon.src = dicebear;
}