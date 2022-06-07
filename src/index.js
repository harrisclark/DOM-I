const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// cta elements
const cta = document.querySelector('.cta');
const ctaHeading = cta.querySelector('h1');
const ctaButton = cta.querySelector('button');
const ctaImg = cta.querySelector('img');
// main content elements
const mainContent = document.querySelector('.main-content');

const topContent = mainContent.querySelector('.top-content');
const topHeadings = topContent.querySelectorAll('h4');
const topParagraphs = topContent.querySelectorAll('p');

const mainImg = mainContent.querySelector('img');

const bottomContent = mainContent.querySelector('.bottom-content');
const bottomHeadings = bottomContent.querySelectorAll('h4');
const bottomParagraphs = bottomContent.querySelectorAll('p');

const navLinks = document.querySelectorAll('nav a');
const headerImg = document.querySelector('.container img');
const contactInfo = document.querySelector('.contact');
const contactHeading = contactInfo.querySelector('h4');
const contactP = contactInfo.querySelectorAll('p');
const copyright = document.querySelector('footer a');

copyright.textContent = siteContent.footer.copyright;
copyright.classList.add('bold');
contactHeading.textContent = siteContent.contact["contact-h4"];

contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;


headerImg.src = siteContent.images["logo-img"];

navLinks.forEach((a,i) => {
  a.classList.add('italic');
  a.textContent = siteContent.nav[`nav-item-${i+1}`];
});


ctaHeading.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImg.src = siteContent.images["cta-img"];

topHeadings[0].textContent = siteContent["main-content"]["features-h4"];
topParagraphs[0].textContent = siteContent["main-content"]["features-content"];
topHeadings[1].textContent = siteContent["main-content"]["about-h4"];
topParagraphs[1].textContent = siteContent["main-content"]["about-content"];
mainImg.src = siteContent.images["accent-img"];
bottomHeadings[0].textContent = siteContent["main-content"]["services-h4"];
bottomParagraphs[0].textContent = siteContent["main-content"]["services-content"];
bottomHeadings[1].textContent = siteContent["main-content"]["product-h4"];
bottomParagraphs[1].textContent = siteContent["main-content"]["product-content"];
bottomHeadings[2].textContent = siteContent["main-content"]["vision-h4"];
bottomParagraphs[2].textContent = siteContent["main-content"]["vision-content"];



