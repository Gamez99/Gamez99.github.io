const userAgent = navigator.userAgent;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let userclient;
let href;

if (userAgent.includes('Chrome')) {
    console.log('User is using Chrome');
    userclient = "chrome";
} else if (userAgent.includes('Firefox')) {
    console.log('User is using Firefox');
    userclient = "firefox";
} else if (userAgent.includes('Safari')) {
    console.log('User is using Safari');
    userclient = "safari";
} else if (userAgent.includes('Edge')) {
    console.log('User is using Edge');
    userclient = "edge";
} else if (userAgent.includes('MSIE') || userAgent.includes('Trident/')) {
    console.log('User is using Internet Explorer');
    userclient = "IE";
} else {
    console.log('User is using an unknown browser');
    userclient = "unknown-browser";
}

href = `/home?client=${userclient}&lang=en`;

window.location.href = href;
