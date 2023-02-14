var scrollTopButton = document.getElementById("scroll-top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
scrollTopButton.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
  

// Remove items function 
$(document).ready(function() {
    $('.fa-times-circle').click(function(e) {
      e.preventDefault();
      $(this).closest('tr').remove();
    });
});


// Calculate the amount
function updateTotal() {
    const tableRows = document.querySelectorAll("#cart tbody tr");
    let subtotal = 0;

    tableRows.forEach(row => {
        const price = parseFloat(row.querySelector("td:nth-child(4)").textContent.substr(1));
        const quantity = row.querySelector("td:nth-child(5) input").value;
        const rowSubtotal = price * quantity;

        subtotal += rowSubtotal;
        row.querySelector("td:nth-child(6)").textContent = `$${rowSubtotal.toFixed(1)}`;
    });

    document.querySelector("#subtotal td:nth-child(2)").textContent = `$${subtotal.toFixed(1)}`;
    document.querySelector("#subtotal td:nth-child(2) strong").textContent = `$${subtotal.toFixed(1)}`;
}

// Check whether the quantity is less than zero
const quantityInputs = document.querySelectorAll('#cart tbody tr td input[type="number"]');
quantityInputs.forEach(input => {
  input.addEventListener('change', e => {
    let quantity = parseInt(input.value);
    if (quantity < 0) {
      quantity = 0;
    }
    input.value = quantity;

    updateSubtotal(input);
    updateCartTotals();
  });
});


document.querySelectorAll("#cart tbody td:nth-child(5) input").forEach(input => {
  input.addEventListener("change", updateTotal);
});


purchase.addEventListener("click", ( ) => {
  alert("Thank You for purchasing! 💕💕💕");
});
