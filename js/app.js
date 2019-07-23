// Initialize and add the map
function initMap() {
  // Your Location
  // {lat: -34.397, lng: 150.644}
  const loc = { lat: 35.645427, lng: 35.851077 };
  // Centered map on location
  const map = new google.maps.Map(
    document.querySelector(".contact__section--map"),
    {
      center: loc,
      zoom: 12
    }
  );
  //   the marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}
