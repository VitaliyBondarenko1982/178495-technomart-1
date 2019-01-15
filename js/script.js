var modalForm = document.querySelector('.modal-form');
var modalCatalog = document.querySelector('.modal-catalog');
var modalMap = document.querySelector(".modal-map");

if (modalForm) {
  var writeButton = document.querySelector('.write-us');
  var modalFormClose = modalForm.querySelector('.modal-form-close');
  var nameField = modalForm.querySelector('[name=name]');
  var emailField = modalForm.querySelector('[name=email]');
  var form = modalForm.querySelector('form');

  writeButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalForm.classList.add('modal-form-show');
    nameField.focus();
  });

  modalFormClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalForm.classList.remove('modal-form-show');
    modalForm.classList.remove('modal-form-error');
  });

  form.addEventListener('submit', function (evt) {
    if (!nameField.value || !emailField.value) {
      evt.preventDefault();
      modalForm.classList.remove('modal-form-error');
      modalForm.offsetWidth = modalForm.offsetWidth;
      modalForm.classList.add('modal-form-error');
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalForm.classList.contains('modal-form-show')) {
        modalForm.classList.remove('modal-form-show');
        modalForm.classList.remove('modal-form-error');
      }
    }
  });
}

if (modalCatalog) {
  var buy = document.querySelectorAll('.buy');
  var modalCatalogClose = document.querySelector('.modal-catalog-close');

  for ( var item = 0; item < buy.length; item++ ) {
    buy[item].addEventListener('click', function(evt) {
      evt.preventDefault();
      modalCatalog.classList.add('modal-catalog-show');
    });
  }

  modalCatalogClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalCatalog.classList.remove('modal-catalog-show');
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalCatalog.classList.contains('modal-catalog-show')) {
        modalCatalog.classList.remove('modal-catalog-show')
      }
    }
  });
}

if (modalMap) {
  var modalMapOpen = document.querySelector(".modal-map-open");
  var modalMapClose = modalMap.querySelector(".modal-map-close");

  modalMapOpen.addEventListener("click", function(evt){
    evt.preventDefault();
    modalMap.classList.add("modal-map-show");
  });

  modalMapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
        modalMap.classList.remove("modal-map-show");
    });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalMap.classList.contains('modal-map-show')) {
        modalMap.classList.remove('modal-map-show')
      }
    }
  });
}
