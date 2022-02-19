// Outdated methods to offer more compatibility with older browser.
var domain = document.location.hostname;
var favicon = document.getElementById("favicon");
var header = document.getElementById("site");
var year = new Date().getFullYear();
var copyright = document.getElementById("year");
var footer = document.querySelector(".site");

// Favicon
var encode = btoa(domain);
favicon.href = "https://avatars.dicebear.com/api/miniavs/" + encode + ".png";

// Refrences to domain
header.innerText = domain;
footer.innerHTML = domain;

// Replace year
copyright.innerText = year;