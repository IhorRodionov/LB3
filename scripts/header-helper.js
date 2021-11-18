function HelperCall(id) {

  var elem = document.getElementById(id).nextElementSibling;
  elem.style.display = elem.style.display == 'none' ? 'block' : 'none';
};