// Custom cursor

const customCursor = document.getElementById('custom-cursor');

const updateCursorPosition = (event) => {
  customCursor.style.top = `${event.clientY}px`;
  customCursor.style.left = `${event.clientX}px`;
}

//Contact us form input field
const cursorform1 = document.getElementById('infosection'); //Contact us form input field
const hoverform2 = document.getElementById ('closeButton'); //Close button
cursorform1.addEventListener('mouseenter', () => {
  customCursor.style.opacity = '0.5';
});

cursorform1.addEventListener('mouseleave', () => {
  customCursor.style.opacity = '1';
});

hoverform2.addEventListener('mouseenter', () => {
  customCursor.style.opacity = '0.5';
});

hoverform2.addEventListener('mouseleave', () => {
  customCursor.style.opacity = '1';
});

//Apply Now, Contact us buttons, Social media buttons
const buttonspurple = [
  document.getElementById('popup'), // Contact us
  document.querySelector('.buttonContainer'), // Apply Now
  document.querySelector('input[type="submit"]'), // hoverform
  ...document.querySelectorAll('#container5 ul li a') // hoversocial
];

buttonspurple.forEach(element => {
  element.addEventListener('mouseenter', () => {
    customCursor.style.opacity = '0.5';
    customCursor.style.backgroundColor = '8316E0';
  });

  element.addEventListener('mouseleave', () => {
    customCursor.style.opacity = '1';
    customCursor.style.backgroundColor = '#FF059D';
  });
});

//column4 animation, column5 images
const hoveranimation = document.querySelector('.column4'); //column4 animation
const hoverimages = document.querySelector ('.column5'); //column5 images

const applyChanges = () => {
  customCursor.style.transform = 'translate(-50%, -50%) scale(3)'; 
  customCursor.style.opacity = '0.6';
};
const resetChanges = () => {
  customCursor.style.transform = 'translate(-50%, -50%) scale(1)';
  customCursor.style.opacity = '1';
};

hoverimages.addEventListener('mouseenter', applyChanges);
hoverimages.addEventListener('mouseleave', resetChanges);

hoveranimation.addEventListener('mouseenter', applyChanges);
hoveranimation.addEventListener('mouseleave', resetChanges);

//column5 zoomed Images
const hoverzoomedimages = document.querySelector('.zoomImage'); //column5 zoomed Images
hoverzoomedimages.addEventListener('mouseenter', () => { 
  customCursor.style.opacity = '0.6'; 
});
hoverzoomedimages.addEventListener('mouseleave', () => {
  customCursor.style.opacity = '1';
});

document.addEventListener('mousemove', (event) => {
  updateCursorPosition(event);
});

//Container 1 Apply Now button animation 
const apply = document.querySelector('.buttoncontainer');
apply.addEventListener('mouseover', () => {
  apply.classList.add('animate__shakeX');
});
apply.addEventListener('mouseout', () => {
  apply.classList.remove('animate__shakeX');
});

//Animation *container 2 column4
const animation = bodymovin.loadAnimation({
  container: document.querySelector('.animationContainer'),
  path: 'cdanimation.json',
  renderer: 'svg',
  loop:false,
  name: 'cd animation',
  autoplay: false,
  
});
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animation.play();
      } else {
        animation.pause();
      }
    });
  },
  {
    threshold: 0.5,
  }
);
observer.observe(animation.wrapper);
const animationContainer = document.querySelector('.animationContainer');
animationContainer.addEventListener('mouseover', () => {
  animation.loop = true;
  animation.play();
});
// animationContainer.addEventListener('mouseout', () => {
//   animation.loop = false;
//   animation.pause();
// });
animationContainer.addEventListener('click', () => {
  animation.loop = false;
  animation.pause();
});

//media queries animation
const mediaQuery = window.matchMedia('(max-width: 820px)');
if (mediaQuery.matches) {
  animation.loop =true;
  animation.autoplay =true;
  };

// zoom image gallery *container 3 column5 
const lista = document.querySelectorAll('.column5 li');
const imgs = document.querySelectorAll('.column5 img');
const zoomImage = document.querySelector('.zoomImage');
const expandImage = document.querySelector('.zoomImage img');

lista.forEach((item, index) => {
  item.addEventListener('click', () => {
    expandImage.src = imgs[index].src;
    zoomImage.style.visibility = 'visible';
    zoomImage.style.opacity = '1';
    zoomImage.style.display = 'flex';
  });
});

zoomImage.addEventListener('click', () => {
  zoomImage.style.visibility = 'hidden';
  zoomImage.style.opacity = '0';
});

// Ask us Pop Up form *container 5
const popupButton = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");
const formContainer = document.querySelector(".formContainer");
const form = document.querySelector(".form");

popupButton.addEventListener('click', () => {
  formContainer.style.opacity = '1';
  formContainer.style.visibility = 'visible';
  setTimeout(() => {
    form.style.transform = 'scale(1)';
  }, 50); 
});
closeButton.addEventListener('click', () => {
  formContainer.style.opacity = '0';
  formContainer.style.visibility = 'hidden'
  formContainer.style.transform = 'scale(1)';
});
popupButton.addEventListener('mouseover', () => {
  popupButton.classList.add('animate__shakeX');
});
popupButton.addEventListener('mouseout', () => {
  popup.classList.remove('animate__shakeX');
});






