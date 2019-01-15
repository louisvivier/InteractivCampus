var Markers=function(){

  var iconBase = 'images/logo/';

//_______ISEN___________
var isen = L.icon({
    iconUrl: iconBase + "isen.png",
    iconSize: [40, 60], //[largeur,hauteur]
    iconAnchor: [20, 55], //ancrage
    popupAnchor: [0, 0],
  });
var markerISEN = L.marker([50.63409,3.04879],{ icon: isen }).addTo(macarte);
var PopUpISEN = "<b>ISEN</b><br>Institut Supérieur de l'Electronique et du Numérique";
markerISEN.bindPopup(PopUpISEN);
//_______URBAWOOD___________
var urbawood = L.icon({
    iconUrl: iconBase + "urbawood.png",
    iconSize: [40, 60],
    iconAnchor: [20, 55],
    popupAnchor: [0, 0],
  });
var markerURBA = L.marker([50.63316,3.02354],{icon:urbawood }).addTo(macarte);
var PopUpURBA = "<b>URBAWOOD</b><br>Pôle des nouvelles technologies de l'information et de la communication";
markerURBA.bindPopup(PopUpURBA);

//_______HEI________________
var hei = L.icon({
    iconUrl: iconBase + "hei.png",
    iconSize: [40, 60],
    iconAnchor: [20,55],
    popupAnchor: [0,0],
  });
var markerHEI = L.marker([50.63366,3.04539],{icon:hei }).addTo(macarte);
var PopUpHEI = "<b>HEI</b><br>Grande Ecole d'Ingénieur Généraliste";
markerHEI.bindPopup(PopUpHEI);
//___________ISA______________
var isa = L.icon({
    iconUrl: iconBase + "isa.png",
    iconSize: [40, 60],
    iconAnchor: [20,55],
    popupAnchor: [0,0],
  });
var markerISA = L.marker([50.63390,3.04663],{icon:isa }).addTo(macarte);
var PopUpISA = "<b>ISA</b><br>Institut Supérieur de l'Agriculture";
markerISA.bindPopup(PopUpISA);
//__________AEU_______________
var aeu = L.icon({
    iconUrl: iconBase + "aeu.png",
    iconSize: [40, 60],
    iconAnchor: [20, 55],
    popupAnchor: [0,0],
  });
var markerAEU = L.marker([50.63309,3.04795],{icon:aeu }).addTo(macarte);
var PopUpAEU= "<b>AEU</b><br>Association d'Entraide Universitaire";
markerAEU.bindPopup(PopUpAEU);
//____________YNCREA____________
var yncrea = L.icon({
    iconUrl: iconBase + "yncrea.png",
    iconSize: [40, 60],
    iconAnchor: [20,55],
    popupAnchor: [0,0],
  });
var markerYNCREA = L.marker([50.63360,3.04692],{icon:yncrea }).addTo(macarte);
var PopUpYNCREA = "<b>YNCREA</b><br>Pôle associatif d'écoles d'ingénieurs en France - HEI ISA ISEN";
markerYNCREA.bindPopup(PopUpYNCREA);
};
