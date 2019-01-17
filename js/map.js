var map = {
  init(){
    // On initialise la latitude et la longitude de Paris (centre de la carte)
    let lat = 50.6326571;
    let lon = 3.0360376;
    let southWest = L.latLng(50.6090,2.9573),northEast = L.latLng(50.6540,3.1213),bounds = L.latLngBounds(southWest, northEast);
    // Créer l'objet "theMap" et l'insèrer dans l'élément HTML qui a l'ID "map"
    theMap = L.map('map', {maxBounds: bounds,zoomControl:false}).setView([lat, lon], 15);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
      attribution: '',
      minZoom: 14,
      maxZoom: 18
    }).addTo(theMap);
    $('.leaflet-control-attribution').html('<a href="https://geniusgames.fr"target="_blank" style="color: #999999;">Application par GeniusCorp © </a> | <a href="http://www.openstreetmap.org/copyright" style="color: #999999;">OpenStreetMap ©</a>');
    markers.ecole.add();
    markers.bus.add();
    markers.metro.add();
    markers.velo.add();
    markers.aeu.add();
    markers.sandwich.add();
    markers.pizza.add();
    markers.gare.add();
    markers.atm.add();
    markers.caddy.add();
    markers.thermo.add();
    polygone.isen.add();
    polygone.rameau.add();
    polygone.urbawood.add();
    polygone.hei.add();
    polygone.rizomm.add();
    polygone.heiprepa.add();
    polygone.isa.add();
    polygone.catho.add();
    polygone.cathobis.add();
    polygone.yncrea.add();
    polygone.yncreaCompta.add();
  }
};
