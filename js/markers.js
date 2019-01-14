var Markers=function(){

  var iconBase = 'images/logo/';

//_______ISEN___________
var isen = L.icon({
    iconUrl: iconBase + "isen.png",
    iconSize: [1000, 30], //[largeur,hauteur]
    iconAnchor: [0, 0], //ancrage
    popupAnchor: [0, 0],
  });
var marker = L.marker([50.63409,3.04879],{ icon: isen }).addTo(macarte);

//_______URBAWOOD___________
var urbawood = L.icon({
    iconUrl: iconBase + "urbawood.png",
    iconSize: [70, 30],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0],
  });
var marker = L.marker([50.63316,3.02354],{icon:urbawood }).addTo(macarte);


//_______HEI________________
var hei = L.icon({
    iconUrl: iconBase + "hei.png",
    iconSize: [70, 30],
    iconAnchor: [0,0],
    popupAnchor: [0,0],
  });
var marker = L.marker([50.63366,3.04539],{icon:hei }).addTo(macarte);

//___________ISA______________
var isa = L.icon({
    iconUrl: iconBase + "isa.png",
    iconSize: [70, 30],
    iconAnchor: [0,0],
    popupAnchor: [0,0],
  });
var marker = L.marker([50.63390,3.04663],{icon:isa }).addTo(macarte);

//__________AEU_______________
var aeu = L.icon({
    iconUrl: iconBase + "aeu.png",
    iconSize: [70, 30],
    iconAnchor: [0, 0],
    popupAnchor: [0,0],
  });
var marker = L.marker([50.63309,3.04795],{icon:aeu }).addTo(macarte);

};
