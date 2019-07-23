// Initialize the map
initMap = () => {
  self.newMap = L.map("map", {
    //   the location of my village in Syria
    center: [35.645427, 35.851077],
    zoom: 14,
    scrollWheelZoom: false
  });
  L.tileLayer(
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={mapboxToken}",
    {
      mapboxToken:
        "pk.eyJ1IjoicmFzaGFkYXRhZiIsImEiOiJjandlbXh3Z3AxZTYwM3ltcXJyanpzd3NjIn0.BKKDP_NvFCbASFbCNPb3qA",
      maxZoom: 18,
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: "mapbox.streets"
    }
  ).addTo(newMap);
};

window.addEventListener("scroll", function() {
  if (this.window.scrollY > 150) {
    document.querySelector(".nav").style.opacity = 0.9;
  } else {
    document.querySelector(".nav").style.opacity = 1;
  }
});

// Add smooth scrolling to all links
$(".nav a, .header__container--btn").on("click", function(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    const hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 70
      },
      800
    );
  } // End if
});
