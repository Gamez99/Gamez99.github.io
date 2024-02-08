const userAgent = navigator.userAgent;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const url = 'https://hollodoescode.github.io';
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

let userbrowser;
let userclient;
let lang;

if (isMobile) {
    userclient = 'mobile';
} else {
    userclient = 'pc';
}

if (userAgent.includes('Chrome')) {
    console.log('User is using Chrome');
    userbrowser = "chrome";
} else if (userAgent.includes('Firefox')) {
    console.log('User is using Firefox');
    userbrowser = "firefox";
} else if (userAgent.includes('Safari')) {
    console.log('User is using Safari');
    userbrowser = "safari";
} else if (userAgent.includes('Edge')) {
    console.log('User is using Edge');
    userbrowser = "edge";
} else if (userAgent.includes('MSIE') || userAgent.includes('Trident/')) {
    console.log('User is using Internet Explorer');
    userbrowser = "IE";
} else {
    console.log('User is using an unknown browser');
    userbrowser = "unknown-browser";
}

lang = 'en';

window.location.href = `/home?browser=${userbrowser}&client=${userclient}&lang=${en}`;
