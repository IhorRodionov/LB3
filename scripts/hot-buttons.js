document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyZ') {
      alert('Отменить!')
    }
  });

function KeyHot() {
    document.onkeydown = funHotKey;
    var pageArray = ["index.html", "subjects.html", "programming-languages.html", "about-computer.html", "my-hobbies.html","ai.html", "future.html", "recruiting.html", "gallery.html"] 
    function funHotKey(event) {
        if (event.altKey && event.keyCode > 48 && event.keyCode <= 48 + pageArray.length) 
            document.location = pageArray[event.keyCode - 49];
    }
}


KeyHot();