function experimentClick(label) {
  console.debug('<experiment> click', label);
  ga('send', {
    hitType: 'event',
    eventCategory: 'Experiment',
    eventAction: 'click',
    eventLabel: label,
    transport: 'beacon'
  });
}

document.querySelectorAll('.quicklinks .item a').forEach(function (e) {
  console.debug('<experiment> listen for', e.getAttribute('href'));
  e.addEventListener('click', function () {
    console.debug('<experiment> click', e.getAttribute('href'));
    experimentClick(e.getAttribute('href'));
  });
});
document.querySelectorAll('.quicklinks .item').forEach(function (element) {
  element.addEventListener('click', function (event) {
    console.debug('<experiment> click');
    var originalColor = element.style.backgroundColor;
    element.style.backgroundColor = '#e8f2d2';
    setTimeout(function () {
      console.debug('<experiment> original background color');
      element.style.backgroundColor = originalColor;
    }, 300);
  });
});