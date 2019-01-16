var map = {
  init(){
    // On initialise la latitude et la longitude de Paris (centre de la carte)
    let lat = 50.6326571;
    let lon = 3.0360376;
    let southWest = L.latLng(50.6090,2.9573),northEast = L.latLng(50.6540,3.1213),bounds = L.latLngBounds(southWest, northEast);
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map', {maxBounds: bounds}).setView([lat, lon], 15);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
      attribution: '',
      minZoom: 14,
      maxZoom: 18
    }).addTo(macarte);
    $('.leaflet-control-attribution').html('<a href="https://geniusgames.fr target="_blank"">Application par GeniusCorp © </a> | <a href="http://www.openstreetmap.org/copyright">OpenStreetMap ©</a>');
    markers.isen();
    markers.hei();
    markers.isa();
    markers.catho();
    markers.yncrea();
    markers.urbawood();
    markers.bus();
    markers.metro();
    markers.velo();
    markers.aeu();
    markers.sandwich();
    markers.pizza();
    markers.gare();
    markers.atm();
    markers.caddy();
    polygone.isen();
    polygone.urbawood();
    polygone.hei();
    polygone.isa();
    polygone.catho();
    polygone.yncrea();
    polygone.yncreaCompta();
    polygone.aeu();
  }
};
