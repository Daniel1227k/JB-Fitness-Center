/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add('bg-header')
    : header.classList.remove('bg-header');
};
window.addEventListener('scroll', scrollHeader);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector(
        '.nav__menu a[href*=' + sectionId + ']'
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');

  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});
sr.reveal(`.home__data, .footer__container, .footer__group, .data__map`);
sr.reveal(`.home__img, .map__container`, { delay: 700, origin: 'bottom' });
sr.reveal(`.logos__img, .program__card, .pricing__card`, { interval: 100 });
sr.reveal(`.choose__img, .calculate__content`, { origin: 'left' });
sr.reveal(`.choose__content, .calculate__img`, { origin: 'right' });
/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
  calculateCm = document.getElementById('calculate-cm'),
  calculateKg = document.getElementById('calculate-kg'),
  calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
  e.preventDefault();

  if (calculateCm.value === '' || calculateKg === '') {
    calculateMessage.classList.remove('color-green');
    calculateMessage.classList.add('color-red');

    calculateMessage.textContent = 'Rellene la altura y el peso ??????';

    setTimeout(() => {
      calculateMessage.textContent = '';
    }, 3000);
  } else {
    const cm = calculateCm.value / 100,
      kg = calculateKg.value,
      bmi = Math.round(kg / (cm * cm));

    if (bmi < 18.5) {
      calculateMessage.classList.add('color-green');
      calculateMessage.textContent = `su IMC es ${bmi} y usted es muy flaco ????`;
    } else if (bmi < 25) {
      calculateMessage.classList.add('color-green');
      calculateMessage.textContent = `su IMC es ${bmi} y es saludable ????`;
    } else {
      calculateMessage.classList.add('color-green');
      calculateMessage.textContent = `su IMC es ${bmi} y tienes sobrepeso ????`;
    }

    calculateCm.value = '';
    calculateKg.value = '';

    setTimeout(() => {
      calculateMessage.textContent = '';
    }, 3000);
  }
};

calculateForm.addEventListener('submit', calculateBmi);
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message'),
  contactUser = document.getElementById('contact-user');

const sendEmail = (e) => {
  e.preventDefault();

  if (contactUser.value === '') {
    contactMessage.classList.remove('color-green');
    contactMessage.classList.add('color-red');

    contactMessage.textContent = 'Debes introducir tu correo electr??nico ????';

    setTimeout(() => {
      contactMessage.textContent = '';
    }, 3000);
  } else {
    emailjs
      .sendForm(
        'service_5jtmvpp',
        'template_1s5we8n',
        '#contact-form',
        'ceERN72E65ckNQUOk'
      )
      .then(
        () => {
          contactMessage.classList.add('color-green');
          contactMessage.textContent = 'Te has registrado correctamente ????';

          setTimeout(() => {
            contactMessage.textContent = '';
          }, 3000);
        },
        (error) => {
          alert('OOPS! ALGO HA FALLADO...', error);
        }
      );
    contactUser.value = '';
  }
};

contactForm.addEventListener('submit', sendEmail);
