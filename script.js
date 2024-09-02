// LIVE STREAM BANNER
document.querySelectorAll('#closeBanner').forEach(function(closeButton) {
  closeButton.addEventListener('click', function() {
      document.querySelectorAll('#liveStreamBanner').forEach(function(banner) {
          banner.style.display = 'none';
      });
  });
});


// HERO SECTION SLIDER
let currentSlideIndex = 0;

const slidesContainer = document.querySelector('.slider-wrapper'); 
const slides = document.querySelectorAll('.content-section'); 
const dots = document.querySelectorAll('.dot');

const showSlide = (index) => {
    slidesContainer.style.transform = `translateX(-${100 * index}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
};

const nextSlide = () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
};

const prevSlide = () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
};

const goToSlide = (index) => {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
};

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

// VIDEO POPUP
function openVideo(videoId) {
    const videoPopup = document.getElementById("videoPopup");
    const videoIframe = document.getElementById("videoIframe");
    videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    videoPopup.classList.add("active");
}

function closeVideo() {
    const videoPopup = document.getElementById("videoPopup");
    const videoIframe = document.getElementById("videoIframe");
    videoIframe.src = "";
    videoPopup.classList.remove("active");
}


// THUMBNAIL SLIDER
$('.rresponsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
           arrows: false
         
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false

        }
      }
     
    ]
  });
// NAVIGATION MENU


document.addEventListener('DOMContentLoaded', () => {
  const menuToggles = document.querySelectorAll('.menu-toggle');
  const sidebars = document.querySelectorAll('#mobileMenu');

  menuToggles.forEach(menuToggle => {
      menuToggle.addEventListener('click', () => {
          sidebars.forEach(sidebar => {
              sidebar.classList.toggle('active');
          });
      });
  });
});

// FOOTER FORM
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const successMessage = document.getElementById('success-message');

  var errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function(message) {
      message.style.display = 'none';
  });

  var isValid = true;

  // Name validation
  var name = document.getElementById('name').value;
  if (name.trim() === '') {
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
  }

  // Email validation
  var email = document.getElementById('email').value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email.trim() === '' || !emailPattern.test(email)) {
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
  }

  // Country validation
  var country = document.getElementById('country').value;
  if (country === '') {
      document.getElementById('countryError').style.display = 'block';
      isValid = false;
  }

  // State validation
  var state = document.getElementById('state').value;
  if (state === '') {
      document.getElementById('stateError').style.display = 'block';
      isValid = false;
  }

  // Message validation
  var message = document.getElementById('message').value;
  if (message.trim() === '') {
      document.getElementById('messageError').style.display = 'block';
      isValid = false;
  }

  if (isValid) {
      successMessage.classList.add('active');
      document.getElementById('contactForm').reset();
      
      // Hide the success message after 5 seconds
      setTimeout(function() {
          successMessage.classList.remove('active');
      }, 5000);
  }
});




