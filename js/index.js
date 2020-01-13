const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let links = document.querySelectorAll('a')

links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

//cta section

let cta = document.querySelector('h1')
cta.textContent = siteContent['cta']['h1']

let butt = document.querySelector('button')
butt.textContent = siteContent['cta']['button']

let codeImg = document.getElementById('cta-img')
codeImg.setAttribute('src', siteContent["cta"]["img-src"])


//main content

let contentHeaders = document.querySelectorAll('h4')
let contentText = document.querySelectorAll('p')

contentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
contentText[0].textContent = siteContent["main-content"]["features-content"];

contentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
contentText[1].textContent = siteContent["main-content"]["about-content"];

contentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
contentText[2].textContent = siteContent["main-content"]["services-content"];

contentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
contentText[3].textContent = siteContent["main-content"]["product-content"];

contentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
contentText[4].textContent = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])