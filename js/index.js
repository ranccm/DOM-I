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


//navbar
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let nav = document.querySelector('nav');
let links = document.querySelectorAll('a');


for (let i = 0; i < links.length; i++){
  links[i].textContent = siteContent['nav'][Object.keys(siteContent['nav'])[i]];
  links[i].style.color = 'green';
}

// links.forEach( element => {
//   element.style.color = 'green';
// });

//append and prepend

let newLink1 = document.createElement('a');
let newLink2 = document.createElement('a');

newLink1.textContent = 'something';
newLink1.href = '#';
newLink1.style.color= 'green';
newLink2.textContent = 'nothing';
newLink2.href = '#';
newLink2.style.color= 'green';


nav.appendChild(newLink1);
nav.prepend(newLink2);



//cta section

let cta = document.querySelector('h1')
cta.textContent = siteContent['cta']['h1']

let butt = document.querySelector('button')
butt.textContent = siteContent['cta']['button']

let codeImg = document.getElementById('cta-img')
codeImg.setAttribute('src', siteContent["cta"]["img-src"])


//main content

let contentHeaders = document.querySelectorAll('.main-content h4')
let contentText = document.querySelectorAll('.main-content p')
let mainContent = siteContent['main-content']

 headerKeys = Object.keys(mainContent).filter(key => key.includes('-h4'));
 paraKeys = Object.keys(mainContent).filter(key => key.includes('-content'));

for (i = 0; i < contentHeaders.length; i++){
  contentHeaders[i].textContent = mainContent[headerKeys[i]];
}

for (i = 0; i < contentText.length; i++){
  contentText[i].textContent = mainContent[paraKeys[i]];
}

// contentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
// contentText[0].textContent = siteContent["main-content"]["features-content"];

// contentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
// contentText[1].textContent = siteContent["main-content"]["about-content"];

// contentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
// contentText[2].textContent = siteContent["main-content"]["services-content"];

// contentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
// contentText[3].textContent = siteContent["main-content"]["product-content"];

// contentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
// contentText[4].textContent = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])



// //contact

// contentHeaders[5].textContent = siteContent['contact']['contact-h4']

// contentText[5].textContent = siteContent['contact']['address']
// contentText[6].textContent = siteContent['contact']['phone']
// contentText[7].textContent = siteContent['contact']['email']


let contact = siteContent['contact'];



// //footer

// contentText[8].textContent = siteContent['footer']['copyright']