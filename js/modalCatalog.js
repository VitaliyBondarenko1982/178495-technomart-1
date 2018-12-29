var buy = document.querySelectorAll('.buy');
var modalCatalog = document.querySelector('.modal-catalog');
var modalCatalogClose = modalCatalog.querySelector('.modal-catalog-close');

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
