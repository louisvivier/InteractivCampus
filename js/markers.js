var markers = {
  //******************************************ECOLES**************************************************
  isen(){
    let isen = L.icon({
      iconUrl: "images/markers/isen.png",
      iconSize: [40, 60], //[largeur,hauteur]
      iconAnchor: [20, 55], //ancrage
      popupAnchor: [0, 0],
    });
    let markerISEN = L.marker([50.63409,3.04879],{ icon: isen }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"ISEN");});
    let markerRameau = L.marker([50.63439,3.04979],{ icon: isen }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Rameau");});
  },
  hei(){
    let hei = L.icon({
      iconUrl: "images/markers/hei.png",
      iconSize: [40, 60],
      iconAnchor: [20,55],
      popupAnchor: [0,0],
    });
    let markerHEI = L.marker([50.63366,3.04539],{icon:hei }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"HEI");});
    let markerHEIPREPA = L.marker([50.62855, 3.04711],{icon:hei }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"HEIPREPA");});
  },
  isa(){
    let isa = L.icon({
      iconUrl: "images/markers/isa.png",
      iconSize: [40, 60],
      iconAnchor: [20,55],
      popupAnchor: [0,0],
    });
    let markerISA = L.marker([50.63390,3.04663],{icon:isa }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"ISA");});
  },
  catho(){
    let catho = L.icon({
      iconUrl: "images/markers/catho.png",
      iconSize: [40, 60],
      iconAnchor: [20,55],
      popupAnchor: [0,0],
    });
    let markerCATHO1 = L.marker([50.63327,3.04635],{icon:catho }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Catho1");});
    let markerCATHO2 = L.marker([50.63215,3.04504],{icon:catho }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Catho2");});
  },
  yncrea(){
    let yncrea = L.icon({
      iconUrl: "images/markers/yncrea.png",
      iconSize: [40, 60],
      iconAnchor: [20,55],
      popupAnchor: [0,0],
    });
    let markerYNCREA2 = L.marker([50.63530,3.04993],{icon:yncrea }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Yncrea2");});
  },
  urbawood(){
    let urbawood = L.icon({
      iconUrl: "images/markers/urbawood.png",
      iconSize: [55, 60],
      iconAnchor: [20, 55],
      popupAnchor: [0, 0],
    });
    let markerURBA = L.marker([50.63316,3.02354],{icon:urbawood }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Urbawood");});
    let maker = L.icon({
      iconUrl: "images/markers/adimaker.png",
      iconSize: [55, 60],
      iconAnchor: [20, 55],
      popupAnchor: [0, 0],
    });
    let markerMAKER = L.marker([50.63402,3.04610],{icon:maker }).addTo(theMap)//.on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Adimaker");});
  },


  //***********************************************TRANSPORTS********************************************************
  bus(){
    let bus = L.icon({
      iconUrl: "images/markers/bus.png",
      iconSize: [40, 60],
      iconAnchor: [20,55],
      popupAnchor: [0,0],
    });
    let markerBUS = L.marker([50.63411,3.04850],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusSolfe1");}); //solfé
    let markerBUS1 = L.marker([50.63413,3.04946],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusSolfe2");}); //solfé
    let markerBUS2 = L.marker([50.63158,3.06226],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusBeauxArts1");}); //beaux arts
    let markerBUS3 = L.marker([50.63134,3.06231],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusBeauxArts2");}); //beaux arts
    let markerBUS4 = L.marker([50.62661,3.04079],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusCormon1");}); //cormon
    let markerBUS5 = L.marker([50.62648,3.04002],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusCormon2");}); //cormon
    let markerBUS6 = L.marker([50.63386,3.03197],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusBoisBlanc1");}); //boisblanc
    let markerBUS7 = L.marker([50.63299,3.03125],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusBoisBlanc2");}); //boisblanc
    let markerBUS8 = L.marker([50.63712,3.07073],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusFlandres1");}); //flandres
    let markerBUS9 = L.marker([50.63720,3.07024],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusFlandres2");}); //flandres
    let markerBUS10 = L.marker([50.63942,3.07507],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusEurope");}); //europe
    let markerBUS11 = L.marker([50.63089,3.02271],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusPont1");}); //pont
    let markerBUS12 = L.marker([50.63076,3.02271],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusPont2");}); //pont
    let markerBUS13 = L.marker([50.63486,3.04895],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusSolfe3");}); //solfé
    let markerBUS14 = L.marker([50.63194,3.06211],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusBeauxArts3");}); //beaux arts
    let markerBUS15 = L.marker([50.63319,3.01853],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusEuratech1");}); //euratechnologies
    let markerBUS16 = L.marker([50.63310,3.01921],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusEuratech2");}); //euratechnologies
  },
  metro(){
    let metro = L.icon({
      iconUrl: "images/markers/metro.png",
      iconSize: [40, 60],
      iconAnchor: [20,55],
      popupAnchor: [0,0],
    });
    let markerMETRO = L.marker([50.63214,3.06161],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Beaux-Arts");});
    let markerMETRO1 = L.marker([50.62633,3.04060],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Cormontaigne");});
    let markerMETRO2 = L.marker([50.63441,3.03039],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BoisBlanc");});
  },
  velo (){
    let velo = L.icon({
      iconUrl: "images/markers/velo.png",
      iconSize: [40, 60],
      iconAnchor: [20,55],
      popupAnchor: [0,0],
    });
    let markerVELO = L.marker([50.63465,3.04841],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleSolfe");}); //solfé
    let markerVELO1 = L.marker([50.63235,3.06231],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleBeauxArts");}); //beaux arts
    let markerVELO2 = L.marker([50.62624,3.04001],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleCormon");}); //cormon
    let markerVELO3 = L.marker([50.63424,3.02116],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleEura");}); //euratech
    let markerVELO4 = L.marker([50.63416,3.03072],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleBoisBlanc");}); //bois blanc
    let markerVELO5 = L.marker([50.63214,3.04613],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleVauban");}); //vauban
    let markerVELO6 = L.marker([50.63403,3.04512],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleHEI");}); //hei
  },
  //******************************************AUTRE************************************************
  aeu(){
    let aeu = L.icon({
      iconUrl: "images/markers/aeu.png",
      iconSize: [40, 60],
      iconAnchor: [20, 55],
      popupAnchor: [0,0],
    });
    let markerAEU = L.marker([50.63309,3.04795],{icon:aeu }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"AEU");});
  },
  sandwich(){
    let sandwich = L.icon({
      iconUrl: "images/markers/sandwich.png",
      iconSize: [40, 60],
      iconAnchor: [20, 55],
      popupAnchor: [0,0],
    });
    let markerSAND = L.marker([50.63359,3.04813],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Dog");}); //dog
    let markerSAND1 = L.marker([50.63334,3.04788],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Boite");}); //boite à sandwich
    let markerSAND2 = L.marker([50.63445,3.02112],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Pause");}); //pause sandwich
    let markerSAND3 = L.marker([50.63420,3.05505],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Paul");}); //Paul
    let markerSAND4 = L.marker([50.63601,3.02760],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Colisee");}); //friterie colysee
    let markerSAND5 = L.marker([50.62983,3.04597],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Celine");}); //kebab celine
    let markerSAND6 = L.marker([50.63405,3.02094],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Sogood");}); //sogood
    let markerSAND7 = L.marker([50.63062,3.04448],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Epis");}); //épis
  },
  pizza(){
    let pizza = L.icon({
      iconUrl: "images/markers/pizza.png",
      iconSize: [40, 60],
      iconAnchor: [20, 55],
      popupAnchor: [0,0],
    });
    let markerPIZZA = L.marker([50.63649,3.02608],{icon:pizza }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Dominos");}); //dominos
    let markerPIZZA1 = L.marker([50.63385,3.05564],{icon:pizza }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Rabbit1");}); //pizza rabbit centre
    let markerPIZZA2 = L.marker([50.63697,3.02513],{icon:pizza }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Kiosque");}); //kiosque à pizza
    let markerPIZZA3 = L.marker([50.63589,3.02881],{icon:pizza }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Rabbit2");}); //pizza rabbit eura
    let markerPIZZA4 = L.marker([50.62981,3.04590],{icon:pizza }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Perfecto");}); //perfecto pizza
  },
  gare(){
    let gare = L.icon({
      iconUrl: "images/markers/gare.png",
      iconSize: [40, 60],
      iconAnchor: [20, 55],
      popupAnchor: [0,0],
    });
    let markerGARE = L.marker([50.63627,3.07089],{icon:gare }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"GareFlandres");}); //lille flandres
    let markerGARE1 = L.marker([50.63932,3.07540],{icon:gare }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"GareEurope");}); //lille europe
  },
  atm(){
    let atm = L.icon({
      iconUrl: "images/markers/atm.png",
      iconSize: [40, 60],
      iconAnchor: [20, 55],
      popupAnchor: [0,0],
    });
    let markerATM = L.marker([50.63195,3.04642],{icon:atm }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"SocieteGenerale");}); //société générale
    let markerATM1 = L.marker([50.63348,3.04707],{icon:atm }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"AtmIsa");}); //atm isa
    let markerATM2 = L.marker([50.63640,3.02629],{icon:atm }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"LCL");}); //lcl
    let markerATM3 = L.marker([50.62621,3.04082],{icon:atm }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"CreditNord");}); //crédit du nord cormon
    let markerATM4 = L.marker([50.63083,3.04449],{icon:atm }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"CreditAgricole");}); //crédit agricole vauban
    let markerATM5 = L.marker([50.62916,3.04258],{icon:atm }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"CIC");}); //CIC
  },
  caddy(){
    let caddy = L.icon({
      iconUrl: "images/markers/caddy.png",
      iconSize: [40, 60],
      iconAnchor: [20, 55],
      popupAnchor: [0,0],
    });
    let markerCADDY = L.marker([50.63210,3.04283],{icon:caddy }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Casino1");}); //casino
    let markerCADDY1 = L.marker([50.63222,3.05387],{icon:caddy }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Match");}); //match
    let markerCADDY2 = L.marker([50.62997,3.04561],{icon:caddy }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"CarrefourExpress1");}); //carrefour express vauban
    let markerCADDY3 = L.marker([50.63435,3.03073],{icon:caddy }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"CarrefourExpress2");}); //carrefour express bois blanc
    let markerCADDY4 = L.marker([50.63748,3.07436],{icon:caddy }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Euralille");}); //euralille
    let markerCADDY5 = L.marker([50.62575,3.03954],{icon:caddy }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"CarrefourCity");}); //carrefour city cormon
    let markerCADDY6 = L.marker([50.63219,3.05076],{icon:caddy }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Casino2");}); //Petit casino
  },
  thermo(){
    let thermo = L.icon({
      iconUrl: "images/markers/thermo.png",
      iconSize: [40, 40],
      iconAnchor: [18, 30],
      popupAnchor: [0,0],
    });
    let markerTHERMO = L.marker([50.63308,3.02345],{icon:thermo }).addTo(theMap).on('click',function(e) { leftPan.tempInfoUrbawood();}); //thermo urbawood
  },

};
