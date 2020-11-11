function labelButtons() {
  document.querySelectorAll('.js-kop:not(.experiment)').forEach(function (element) {
    element.classList.add('experiment');
    element.style.textOverflow = 'unset';
    element.style.paddingLeft = 0;
    element.style.paddingRight = 0;
    element.textContent = 'Lägg till';
  });
  document.querySelectorAll('.js-buttonView:not(.ProductSearch-itemCta) .js-kop.u-hidden').forEach(function (element) {
    if (element.parentElement.getElementsByClassName('js-input')[0].value == 0) {
      element.classList.remove('u-hidden');
      element.parentElement.getElementsByClassName('js-buttonContainer')[0].classList.add('u-hidden');
    }
  });
}

labelButtons();
window.addEventListener('ga:modifyCart', function () {
  window.setTimeout(labelButtons, 500);
});
window.addEventListener('resize', function () {
  window.setTimeout(labelButtons, 500);
});
window.addEventListener('ga:productImpression', labelButtons);