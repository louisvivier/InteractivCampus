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
var PopUpISEN = "<b>Ici c'est ISEN</b><br>I am a popup.";
markerISEN.bindPopup(PopUpISEN);
//_______URBAWOOD___________
var urbawood = L.icon({
    iconUrl: iconBase + "urbawood.png",
    iconSize: [40, 60],
    iconAnchor: [20, 55],
    popupAnchor: [0, 0],
  });
var markerURBA = L.marker([50.63316,3.02354],{icon:urbawood }).addTo(macarte);
var PopUpURBA = "<b>Ici c'est URBA</b><br>I am a popup.";
markerURBA.bindPopup(PopUpURBA);

//_______HEI________________
var hei = L.icon({
    iconUrl: iconBase + "hei.png",
    iconSize: [40, 60],
    iconAnchor: [20,55],
    popupAnchor: [0,0],
  });
var markerHEI = L.marker([50.63366,3.04539],{icon:hei }).addTo(macarte);
var PopUpHEI = "<b>Ici c'est HEI</b><br>I am a popup.";
markerHEI.bindPopup(PopUpHEI);
//___________ISA______________
var isa = L.icon({
    iconUrl: iconBase + "isa.png",
    iconSize: [40, 60],
    iconAnchor: [20,55],
    popupAnchor: [0,0],
  });
var markerISA = L.marker([50.63390,3.04663],{icon:isa }).addTo(macarte);
var PopUpISA = "<b>Ici c'est ISA</b><br>I am a popup.";
markerISA.bindPopup(PopUpISA);
//__________AEU_______________
var aeu = L.icon({
    iconUrl: iconBase + "aeu.png",
    iconSize: [40, 60],
    iconAnchor: [20, 55],
    popupAnchor: [0,0],
  });
var markerAEU = L.marker([50.63309,3.04795],{icon:aeu }).addTo(macarte);
var PopUpAEU= "<b>Ici c'est AEU</b><br>I am a popup.";
markerAEU.bindPopup(PopUpAEU);

};
