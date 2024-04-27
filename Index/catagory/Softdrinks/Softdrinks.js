        // Function to add items to the cart
        function addToCart(productName, price) {
            var cart = document.getElementById('cart');
            var item = document.createElement('div');
            item.classList.add('cart-item');
            item.innerHTML = `
              
                <div class="cart-item-info">
                    <h3>${productName}</h3>
                    <p>Rs${price}</p>
                </div>
            `;
            cart.appendChild(item);
   var totalPriceElement = document.getElementById('totalPrice');
            var totalPrice = parseFloat(totalPriceElement.innerText);
            totalPrice += price;
            totalPriceElement.innerText = totalPrice.toFixed(2);
        
        }
        function placeOrder() {
          var name = prompt("Please enter your name:");
          var address = prompt("Please enter your address:");
          var phone = prompt("Please enter your phone number:");
  
          if (name && address && phone) {
              // Validate phone number using regular expression
              var phonePattern = /^\d+$/; // Only allow numerical characters
  
              if (phone.match(phonePattern)) {
                var totalPrice = parseFloat(document.getElementById('totalPrice').innerText).toFixed(2);
                  // Phone number is valid
                  alert(`Your order has been placed!\nName: ${name}\nAddress: ${address}\nPhone: ${phone}\nTotal: Rs.${totalPrice}`);
              } else {
                  // Phone number is not valid
                  alert("Please enter a valid phone number.");
              }
          } else {
              alert("Please provide valid information to place the order.");
          }
      }