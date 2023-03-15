/* eslint-disable no-plusplus */
const clicked = document.querySelector('#clicked');
const toolbar = document.querySelector('.hamburger');
const clickedP = document.querySelector('.clicked-p');
const navLinks = document.querySelectorAll('.clicked-ul li');
function mobileMenu() {
  clicked.classList = 'clicked';
}
function hideMobileMenu() {
  clicked.classList = 'not-cliked';
}

toolbar.addEventListener('click', mobileMenu);
clickedP.addEventListener('click', hideMobileMenu);
navLinks.forEach((element) => {
  element.addEventListener('click', hideMobileMenu);
});
// Creating dynamic feutured section

const feautured = [
  {
    name: 'BIMENYIMANA Galiede',
    title: 'MD - Managing director ',
    descriptions:
      'We strive to not only meet our clients expectations but exceed them',
    image: 'images/others.jpeg',
  },
  {
    name: 'RUSHEMA Anicet',
    title: 'CTO - Chief technology officer',
    descriptions:
      'Company cofounder: We always do the right thing. With precision, pace and passion',
    image: 'images/rushema.png',
  },
  {
    name: 'MUSEME Amudala',
    title: 'Developer',
    descriptions: 'We own and shape our future',
    image: 'images/others.jpeg',
  },
  {
    name: 'NIYONSABA Gilbert',
    title: 'Developer - backend',
    descriptions: 'Happy coding😊',
    image: 'images/others.jpeg',
  },
  {
    name: 'GAKUBA James',
    title: 'Developer',
    descriptions: 'We own and shape our future',
    image: 'images/others.jpeg',
  },
  {
    name: 'UWIMANA Anic',
    title: 'Developer - backend',
    descriptions: 'Happy coding😊',
    image: 'images/others.jpeg',
  },
];

// passing data into the works section
const works = document.querySelector('.c-speakers');
for (let index = 0; index < feautured.length; index++) {
  const {
    name, title, descriptions, image,
  } = feautured[index];
  const pSection = document.createElement('div');
  const pClasses = document.createAttribute('class');
  let hiddenClass = '';
  if (index >= 2) {
    hiddenClass = 'hide-on-mobile';
  }
  pClasses.value = `speaker ${hiddenClass}`;
  pSection.setAttributeNode(pClasses);
  pSection.innerHTML = `
          <div class="s-img">
            <img
              src="${image}"
            />
          </div>
          <div class="s-details">
            <div class="s-header">
              <h4>${name}</h4>
              <p class="details-title">
                ${title}
              </p>
              <hr class="s-line" />
            </div>
            <p class="s-text">
              ${descriptions}
            </p>
          </div>`;

  works.appendChild(pSection);
}
