var Markers=function(){

  var iconBase = 'images/logo/';
  
var isen = L.icon({
    iconUrl: iconBase + "isen.png",
    iconSize: [100, 40], //[largeur,hauteur]
    iconAnchor: [0, 0],
    popupAnchor: [-3, -76],
  });
var marker = L.marker([50.63394, 3.04875],{ icon: isen }).addTo(macarte);

var urbawood = L.icon({
    iconUrl: iconBase + "urbawood.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -76],
  });
var marker = L.marker([50.6331, 3.02359],{icon:urbawood }).addTo(macarte);
};
