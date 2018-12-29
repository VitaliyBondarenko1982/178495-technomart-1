var writeButton = document.querySelector('.write-us-button');
var modalForm = document.querySelector('.modal-form');
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
