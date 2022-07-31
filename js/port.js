const sendBtns = document.querySelectorAll('.sendPopup__social-btn');
if (sendBtns) {
  for (let index = 0; index < sendBtns.length; index++) {
    const element = sendBtns[index];
    element.addEventListener('click', function (e) {
      for (let i = 0; i < sendBtns.length; i++) {
        const el = sendBtns[i];
        el.classList.remove('sendPopup__social-btn--active');
      }
      element.classList.add('sendPopup__social-btn--active');
      document.querySelector('[name="form_text_5"]').value = element.getAttribute('data-target');
    });
  }
}
