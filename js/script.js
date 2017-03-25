document.addEventListener('DOMContentLoaded', function() {

  setTimeout(function() {
    document.body.classList.remove('preload');
  }, 500);

  // slider

  var leftArrow = document.querySelector('.leftArrow');
  var rightArrow = document.querySelector('.rightArrow');
  var sliderImages = Array.from(document.querySelectorAll('.slider li'));
  var sliderIndex = 0;

  sliderImages[sliderIndex].classList.add('visible');

  leftArrow.addEventListener('click', function() {
    sliderImages[sliderIndex].classList.remove('visible');

    if (sliderIndex == 0) {
      sliderIndex = sliderImages.length - 1;
    } else {
      sliderIndex--;
    }

    sliderImages[sliderIndex].classList.add('visible');
  });

  rightArrow.addEventListener('click', function() {
    sliderImages[sliderIndex].classList.remove('visible');

    if (sliderIndex == sliderImages.length - 1) {
      sliderIndex = 0;
    } else {
      sliderIndex++;
    }

    sliderImages[sliderIndex].classList.add('visible');

  });

});
