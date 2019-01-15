var Markers=function(){

  var iconBase = 'images/logo/';
//*************************************ECOLES****************************************************************
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
//*************************************TRANSPORTS****************************************************************
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

//_____________BUS___________________
var bus = L.icon({
    iconUrl: iconBase + "bus.png",
    iconSize: [40, 60],
    iconAnchor: [20,55],
    popupAnchor: [0,0],
  });
var markerBUS = L.marker([50.63411,3.04850],{icon:bus }).addTo(macarte); //solfé
var markerBUS1 = L.marker([50.63413,3.04946],{icon:bus }).addTo(macarte); //solfé
var markerBUS2 = L.marker([50.63158,3.06226],{icon:bus }).addTo(macarte); //beaux arts
var markerBUS3 = L.marker([50.63134,3.06231],{icon:bus }).addTo(macarte); //beaux arts
var markerBUS4 = L.marker([50.62661,3.04079],{icon:bus }).addTo(macarte); //cormon
var markerBUS5 = L.marker([50.62648,3.04002],{icon:bus }).addTo(macarte); //cormon
//______________METRO_________________
var metro = L.icon({
    iconUrl: iconBase + "metro.png",
    iconSize: [40, 60],
    iconAnchor: [20,55],
    popupAnchor: [0,0],
  });
var markerMETRO = L.marker([50.63214,3.06161],{icon:metro }).addTo(macarte);
var markerMETRO1 = L.marker([50.62633,3.04060],{icon:metro }).addTo(macarte);
var markerMETRO2 = L.marker([50.63441,3.03039],{icon:metro }).addTo(macarte);
var markerMETRO3 = L.marker([50.62999,3.03537],{icon:metro }).addTo(macarte);
//______________VELO_________________
var velo = L.icon({
    iconUrl: iconBase + "velo.png",
    iconSize: [40, 60],
    iconAnchor: [20,55],
    popupAnchor: [0,0],
  });
var markerVELO = L.marker([50.63465,3.04841],{icon:velo }).addTo(macarte); //solfé
var markerVELO = L.marker([50.63235,3.06231],{icon:velo }).addTo(macarte); //beaux arts
var markerVELO = L.marker([50.62624,3.04001],{icon:velo }).addTo(macarte); //cormon

//*************************************RESTAUS****************************************************************
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

};
