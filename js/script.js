document.addEventListener('DOMContentLoaded', function() {

  // setTimeout(function() {
  //   document.body.classList.remove('preload');
  // }, 500);

  // disabling links default action

  var allLinks = Array.from(document.querySelectorAll('a'));

  allLinks.forEach(function(element) {
    element.addEventListener('click', function(event) {
      event.preventDefault();
    });
  });

  // hover menu

  var about = document.querySelector('.menu li:first-child');
  var hiddenMenu = about.querySelector('.hidden-menu');

  about.addEventListener('mouseover', function() {
    hiddenMenu.classList.remove('hide');
  });

  about.addEventListener('mouseout', function() {
    hiddenMenu.classList.add('hide');
  });

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

  // calculator

  var listPanels = Array.from(document.querySelectorAll('.list_panel'));
  var chooseArrows = Array.from(document.querySelectorAll('.list_arrow'));
  var colorListItems = Array.from(document.querySelector('.color_list').children);
  var typeListItems = Array.from(document.querySelector('.type_list').children);
  var materialListItems = Array.from(document.querySelector('.material_list').children);
  var transport = document.querySelector('#transport');
  var sumSpan = document.querySelector('.sum');
  var sumValue = 0;

  // showing or hiding the list after clicking an arrow

  chooseArrows.forEach(function(element) {
    element.addEventListener('click', function() {

      if (this.nextElementSibling.classList.contains('hide')) {
        listPanels.forEach(function(element) {
          element.classList.add('hide');
        });
        this.nextElementSibling.classList.remove('hide');
      } else {
        this.nextElementSibling.classList.add('hide');
      }

    });
  });

  // adding prices

  typeListItems.forEach(function(element) {

    element.addEventListener('click', function() {

      var typeName = document.querySelector('h4.title');
      var typeValue = document.querySelector('h4.type_value');

      if (!typeValue.textContent) {

        sumValue += parseInt(this.dataset.price);
        sumSpan.textContent = sumValue;
      }

      typeName.textContent = this.textContent;
      typeValue.textContent = this.dataset.price;

      this.parentElement.parentElement.firstElementChild.textContent = this.textContent;

      this.parentElement.classList.add('hide');

      if (this.dataset.color == 'orange') {
        document.querySelector('.chairImage').className = 'chairImage';
        document.querySelector('.chairImage').classList.add('orangeChair');
      } else if (this.dataset.color == 'black') {
        document.querySelector('.chairImage').className = 'chairImage';
        document.querySelector('.chairImage').classList.add('blackChair');
      } else {
        document.querySelector('.chairImage').className = 'chairImage';
      }

    });
  });

  colorListItems.forEach(function(element) {

    element.addEventListener('click', function() {
      var colorName = document.querySelector('span.color');
      var colorValue = document.querySelector('span.color_value');

      if (!colorValue.textContent) {

        sumValue += parseInt(this.dataset.price);
        sumSpan.textContent = sumValue;
      }

      colorName.textContent = this.textContent;
      colorValue.textContent = this.dataset.price;

      this.parentElement.parentElement.firstElementChild.textContent = this.textContent;

      this.parentElement.classList.add('hide');

    });
  });

  materialListItems.forEach(function(element) {

    element.addEventListener('click', function() {
      var materialName = document.querySelector('span.pattern');
      var materialValue = document.querySelector('span.pattern_value');

      if (!materialValue.textContent) {
        sumValue += parseInt(this.dataset.price);
        sumSpan.textContent = sumValue;
      }

      materialName.textContent = this.textContent;
      materialValue.textContent = this.dataset.price;

      this.parentElement.parentElement.firstElementChild.textContent = this.textContent;

      this.parentElement.classList.add('hide');

    });
  });

  transport.addEventListener('click', function() {

      var transportName = document.querySelector('span.transport');
      var transportValue = document.querySelector('span.transport_value');
      if (!transport.checked) {
        transportName.textContent = '';
        transportValue.textContent = '';
        sumValue -= parseInt(this.dataset.price);

      } else {
        transportName.textContent = 'Transport';
        transportValue.textContent = this.dataset.price;
        sumValue += parseInt(this.dataset.price);
      }

      sumSpan.textContent = sumValue;

    });
});
