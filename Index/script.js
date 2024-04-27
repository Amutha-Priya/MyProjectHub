
  document.addEventListener('DOMContentLoaded', function() {
    var index = 0;
    showSlides();
  
    function showSlides() {
      var slides = document.getElementsByClassName("slide");
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      index++;
      if (index > slides.length) { index = 1 }
      slides[index - 1].style.display = "block";
      setTimeout(showSlides, 4000); 
    }
  });
  function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
}
