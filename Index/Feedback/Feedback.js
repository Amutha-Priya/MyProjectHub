document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('selectedRating');
  
    stars.forEach(function (star) {
      star.addEventListener('click', function () {
        const rating = this.dataset.rating;
        ratingInput.value = rating;
        updateStars(rating);
      });
    });
  
    function updateStars(rating) {
      stars.forEach(function (star) {
        if (star.dataset.rating >= rating) {
          star.classList.add('rated');
        } else {
          star.classList.remove('rated');
        }
      });
    }
    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Perform form submission actions here, for example, sending data to the server
      
        // Display alert message
        alert('Thank you for your feedback!');
        this.reset();
      });

  });

  
  