document.addEventListener('DOMContentLoaded', function () {
  var t = document.getElementById('nav-toggle'), l = document.getElementById('nav-links');
  if (!t || !l) return;
  t.addEventListener('click', function () {
    var open = l.classList.toggle('is-open');
    t.setAttribute('aria-expanded', open); t.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var p = document.getElementById('print-guide');
  if (p) p.addEventListener('click', function () { window.print(); });
});
