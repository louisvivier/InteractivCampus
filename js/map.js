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
    $('.leaflet-control-attribution').html('<a href="https://geniusgames.fr"target="_blank">Application par GeniusCorp © </a> | <a href="http://www.openstreetmap.org/copyright">OpenStreetMap ©</a>');
    markers.isen.add();
    markers.hei.add();
    markers.isa.add();
    markers.catho.add();
    markers.yncrea.add();
    markers.urbawood.add();
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
    polygone.isen();
    polygone.rameau();
    polygone.urbawood();
    polygone.hei();
    polygone.rizomm();
    polygone.heiprepa();
    polygone.isa();
    polygone.catho();
    polygone.cathobis();
    polygone.yncrea();
    polygone.yncreaCompta();
    polygone.aeu();
  }
};
