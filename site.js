// Using some outdated methods to offer more compatibility with older browsers.

// Document strings:
var favicon = document.getElementById("favicon");
var hostname = document.location.hostname;
var encode_host = btoa(hostname);
var path = window.location.pathname;
var URL = document.location.protocol + "//" + document.location.host;
var no_www = hostname.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
var subdomain = no_www.split(".")[1] ? no_www.split(".")[0] : no_www;
var site_name = subdomain.charAt(0).toUpperCase() + subdomain.slice(1);

// Title truncate
var title_name = site_name;
var truncate = 12;
if (site_name.length > truncate)
    title_name = site_name.substring(0, truncate) + "…";

// Site strings:
var year = new Date().getFullYear();
var header = document.getElementById("welcome");
var copyright = document.getElementById("year");
var footer = document.getElementById("footer-left");
var icon = document.getElementById("icon");
var link = document.createElement("a");
var dicebear =
    "https://avatars.dicebear.com/api/miniavs/" + encode_host + ".png";

// Favicon
favicon.href = dicebear;

// Title
if (path == "/" || path == "/index" || path == "/index.html" || path == "")
    document.title = "Home - " + title_name;
else document.title = "404 - " + title_name;

// References to domain
if (header) header.innerText = site_name;
footer.innerText = "";
// Footer link
link.href = URL;
link.textContent = hostname;
footer.appendChild(link);

// Year
copyright.innerText = year;

// Icon
if (icon) icon.src = dicebear;