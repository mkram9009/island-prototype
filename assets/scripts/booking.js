async function loadBookingComponent() {
  try {
    const response = await fetch("assets/components/booking.html");

    if (!response.ok) {
      throw new Error("Component failed to load");
    }

    const html = await response.text();

    document.getElementById("booking-component").innerHTML = html;

  } catch (error) {
    console.error("Booking component error:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadBookingComponent);

// Open the full screen booking form
function openBooking() {
  document.getElementById("bookingOverlay").style.display = "block";
  document.body.classList.add("overlay-open");
}

// Close the full screen booking form
function closeBooking() {
  document.getElementById("bookingOverlay").style.display = "none";
  document.body.classList.add("overlay-open");
}