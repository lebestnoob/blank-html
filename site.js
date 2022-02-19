// Using some outdated methods to offer more compatibility with older browsers.

// Document strings:
var favicon = document.getElementById("favicon");
var hostname = document.location.hostname;
var encode_host = btoa(hostname);
var path = window.location.pathname;

// Title truncate
var title_hostname = hostname;
var truncate = 12;
if (hostname.length > truncate)
    title_hostname = hostname.substring(0, truncate) + "…";

// Site strings:
var year = new Date().getFullYear();
var header = document.getElementById("welcome");
var copyright = document.getElementById("year");
var footer = document.getElementById("footer-left");
var icon = document.getElementById("icon");
var dicebear =
    "https://avatars.dicebear.com/api/miniavs/" + encode_host + ".png";

// Favicon
favicon.href = dicebear;

// Title
if (path == "/" || path == "/index" || path == "/index.html" || path == "")
    document.title = "Home - " + title_hostname;
else document.title = "404 - " + title_hostname;

// Refrences to domain
if (header) header.innerText = hostname;
footer.innerHTML = hostname;

// Year
copyright.innerText = year;

// Icon
if (icon) icon.src = dicebear;