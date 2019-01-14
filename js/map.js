// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 50.6326571;
var lon = 3.0360376;
var macarte = null;
// Fonction d'initialisation de la carte
var initMap = function() {
  // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
  macarte = L.map('map').setView([lat, lon], 15);
  // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    // Il est toujours bien de laisser le lien vers la source des données
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 14,
    maxZoom: 20
  }).addTo(macarte);
  Markers();
  Polygone();
};
