(() => {
  const refs = {
    openPopupBtn: document.querySelector('[data-popup-open]'),
    closePopupBtn: document.querySelector('[data-popup-close]'),
    popup: document.querySelector('[data-popup]'),
  };

  refs.openPopupBtn.addEventListener('click', togglePopup);
  refs.closePopupBtn.addEventListener('click', togglePopup);

  function togglePopup() {
    refs.popup.classList.toggle('is-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
