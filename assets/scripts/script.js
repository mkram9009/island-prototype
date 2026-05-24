// Open the full screen search box
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
} 

// Open the full screen booking form
function openBooking() {
  document.getElementById("myOverlay").style.display = "block";
  document.body.classList.add("overlay-open");
}

// Close the full screen booking form
function closeBooking() {
  document.getElementById("myOverlay").style.display = "none";
  document.body.classList.add("overlay-open");
} 