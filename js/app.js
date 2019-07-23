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
