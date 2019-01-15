var map = {
  init(){
    // On initialise la latitude et la longitude de Paris (centre de la carte)
    let lat = 50.6326571;
    let lon = 3.0360376;
    let southWest = L.latLng(50.6265,3.0168),northEast = L.latLng(50.6442,3.0788),bounds = L.latLngBounds(southWest, northEast);
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map', {maxBounds: bounds}).setView([lat, lon], 15);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      // Il est toujours bien de laisser le lien vers la source des données
      attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
      minZoom: 14,
      maxZoom: 20
    }).addTo(macarte);
    markers.isen();
    markers.hei();
    markers.isa();
    markers.yncrea();
    markers.urbawood();
    markers.bus();
    markers.metro();
    markers.velo();
    markers.aeu();
    markers.sandwich();
    markers.pizza();
    markers.gare();
    polygone.isen();
    polygone.urbawood();
    polygone.hei();
    polygone.isa();
    polygone.yncrea();
    polygone.yncreaCompta();
    polygone.aeu();
  }
};
