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

document.head.innerHTML(`<title>Home | Games</title>
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="stylesheet" type="text/css" href="/!assets/css/home.css">
<link rel="canonical" href="https://hollodoescode.github.io/">
<meta name="apple-mobile-web-app-capable" content="no">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="viewport" content="height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui, viewport-fit=cover">
<meta name="Author" content="@hollo.py on Discord">
<meta name="description" content="A unblocked games website">
<meta property="og:title" content="Hollo's Unblocked Games">
<meta property="og:description" content="Just another unblocked games website">
<meta property="og:image" content="https://hollodoescode.github.io/!assets/img/embed.png">
<meta property="og:url" content="https://hollodoescode.github.io/home">
<meta http-equiv="content-type" content="text/html; charset=UTF8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="twitter:title" content="Hollo's Unblocked Games">
<meta name="twitter:description" content="Just another unblocked games website">
<meta name="twitter:image" content="https://hollodoescode.github.io/!assets/img/embed.png">
<meta http-equiv="refresh" content="0;url=${url}/home?browser=${userbrowser}&client=${userclient}&lang=${lang}">
`);
