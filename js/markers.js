var markers = {
  //******************************************ECOLES**************************************************
  ecole : {
    add (){
      let isen = L.icon({
        iconUrl: "images/markers/isen.png",
        iconSize: [40, 60], //[largeur,hauteur]
        iconAnchor: [20, 55], //ancrage
        popupAnchor: [0, 0],
      });

      let hei = L.icon({
        iconUrl: "images/markers/hei.png",
        iconSize: [40, 60],
        iconAnchor: [20,55],
        popupAnchor: [0,0],
      });

      let isa = L.icon({
        iconUrl: "images/markers/isa.png",
        iconSize: [40, 60],
        iconAnchor: [20,55],
        popupAnchor: [0,0],
      });

      let catho = L.icon({
        iconUrl: "images/markers/catho.png",
        iconSize: [40, 60],
        iconAnchor: [20,55],
        popupAnchor: [0,0],
      });

      let yncrea = L.icon({
        iconUrl: "images/markers/yncrea.png",
        iconSize: [40, 60],
        iconAnchor: [20,55],
        popupAnchor: [0,0],
      });

      let urbawood = L.icon({
        iconUrl: "images/markers/urbawood.png",
        iconSize: [55, 60],
        iconAnchor: [20, 55],
        popupAnchor: [0, 0],
      });

      let maker = L.icon({
        iconUrl: "images/markers/adimaker.png",
        iconSize: [40, 60],
        iconAnchor: [20, 55],
        popupAnchor: [0, 0],
      });

      let rizomm = L.icon({
        iconUrl: "images/markers/rizomm.png",
        iconSize: [40, 60],
        iconAnchor: [20, 55],
        popupAnchor: [0, 0],
      });
      markerISEN = L.marker([50.63409,3.04879],{ icon: isen }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"ISEN");});
      markerRameau = L.marker([50.63439,3.04979],{ icon: isen }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Rameau");});
      markerRIZOMM = L.marker([50.63326,3.04503],{icon:rizomm }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Rizomm");});
      markerHEI = L.marker([50.63366,3.04539],{icon:hei }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"HEI");});
      markerHEIPREPA = L.marker([50.62855, 3.04711],{icon:hei }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"HEIPREPA");});
      markerISA = L.marker([50.63390,3.04663],{icon:isa }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"ISA");});
      markerCATHO1 = L.marker([50.63327,3.04635],{icon:catho }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Catho1");});
      markerCATHO2 = L.marker([50.63215,3.04504],{icon:catho }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Catho2");});
      markerYNCREA2 = L.marker([50.63530,3.04993],{icon:yncrea }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Yncrea2");});
      markerURBA = L.marker([50.63316,3.02354],{icon:urbawood }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Urbawood");});
      markerMAKER = L.marker([50.63402,3.04610],{icon:maker }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Yncrea1");});
    },
    remove () {
      theMap.removeLayer(markerISEN);
      theMap.removeLayer(markerRameau);
      theMap.removeLayer(markerHEI);
      theMap.removeLayer(markerHEIPREPA);
      theMap.removeLayer(markerISA);
      theMap.removeLayer(markerCATHO1);
      theMap.removeLayer(markerCATHO2);
      theMap.removeLayer(markerYNCREA2);
      theMap.removeLayer(markerURBA);
      theMap.removeLayer(markerMAKER);
      theMap.removeLayer(markerRIZOMM);
    }
  },

  //***********************************************TRANSPORTS********************************************************
  bus : {
    add(){
      let bus = L.icon({
        iconUrl: "images/markers/bus.png",
        iconSize: [40, 60],
        iconAnchor: [20,55],
        popupAnchor: [0,0],
      });
      markerBUS = L.marker([50.63411,3.04850],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusSolfe1");}); //solfé
      markerBUS1 = L.marker([50.63413,3.04946],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusSolfe2");}); //solfé
      markerBUS2 = L.marker([50.63158,3.06226],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusBeauxArts1");}); //beaux arts
      markerBUS3 = L.marker([50.63134,3.06231],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusBeauxArts2");}); //beaux arts
      markerBUS4 = L.marker([50.62661,3.04079],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusCormon1");}); //cormon
      markerBUS5 = L.marker([50.62648,3.04002],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusCormon2");}); //cormon
      markerBUS6 = L.marker([50.63386,3.03197],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusBoisBlanc1");}); //boisblanc
      markerBUS7 = L.marker([50.63299,3.03125],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusBoisBlanc2");}); //boisblanc
      markerBUS8 = L.marker([50.63712,3.07073],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusFlandres1");}); //flandres
      markerBUS9 = L.marker([50.63720,3.07024],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusFlandres2");}); //flandres
      markerBUS10 = L.marker([50.63942,3.07507],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusEurope");}); //europe
      markerBUS11 = L.marker([50.63089,3.02271],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusPont1");}); //pont
      markerBUS12 = L.marker([50.63076,3.02271],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusPont2");}); //pont
      markerBUS13 = L.marker([50.63486,3.04895],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusSolfe3");}); //solfé
      markerBUS14 = L.marker([50.63194,3.06211],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusBeauxArts3");}); //beaux arts
      markerBUS15 = L.marker([50.63319,3.01853],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusEuratech1");}); //euratechnologies
      markerBUS16 = L.marker([50.63310,3.01921],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusEuratech2");}); //euratechnologies
      markerBUS17 = L.marker([50.63240,3.04674],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusUniversite1");}); //universitecatholique
      markerBUS18 = L.marker([50.63246,3.04650],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusUniversite2");}); //universitecatholique
      markerBUS19 = L.marker([50.63197,3.06243],{icon:bus }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BusBeauxArts4");}); //beaux arts
    },
    remove (){
      theMap.removeLayer(markerBUS);
      theMap.removeLayer(markerBUS1);
      theMap.removeLayer(markerBUS2);
      theMap.removeLayer(markerBUS3);
      theMap.removeLayer(markerBUS4);
      theMap.removeLayer(markerBUS5);
      theMap.removeLayer(markerBUS6);
      theMap.removeLayer(markerBUS7);
      theMap.removeLayer(markerBUS8);
      theMap.removeLayer(markerBUS9);
      theMap.removeLayer(markerBUS10);
      theMap.removeLayer(markerBUS11);
      theMap.removeLayer(markerBUS12);
      theMap.removeLayer(markerBUS13);
      theMap.removeLayer(markerBUS14);
      theMap.removeLayer(markerBUS15);
      theMap.removeLayer(markerBUS16);
      theMap.removeLayer(markerBUS17);
      theMap.removeLayer(markerBUS18);
      theMap.removeLayer(markerBUS19);
    }
  },
  metro : {
    add(){
      let metro = L.icon({
        iconUrl: "images/markers/metro.png",
        iconSize: [40, 60],
        iconAnchor: [20,55],
        popupAnchor: [0,0],
      });
      markerMETRO = L.marker([50.63214,3.06161],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Beaux-Arts");});
      markerMETRO1 = L.marker([50.62633,3.04060],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Cormontaigne");});
      markerMETRO2 = L.marker([50.63441,3.03039],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"BoisBlanc");});
      markerMETRO3 = L.marker([50.63709,3.02444],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Canteleu");});
      markerMETRO4 = L.marker([50.63742,3.07106],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"LilleFlandres");});
      markerMETRO5 = L.marker([50.63927,3.07636],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"LilleEurope");});
      markerMETRO6 = L.marker([50.63150,3.06000],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Beaux-Arts");});
      markerMETRO7 = L.marker([50.65187,2.97456],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"SaintPhilibert");});
      markerMETRO8 = L.marker([50.61842,3.05026],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"PorteDesPostes");});
      markerMETRO9 = L.marker([50.61760,3.06227],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"PorteDArras");});
      markerMETRO10 = L.marker([50.60813,3.03898],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Eurasante");});
      markerMETRO11 = L.marker([50.62965,3.07491],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"LilleGrandPalais");});
      markerMETRO12 = L.marker([50.63281,3.07065],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"MairieLille");});
      markerMETRO13 = L.marker([50.63568,3.06299],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Rihour");});
      markerMETRO14 = L.marker([50.62694,3.05272],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Gambetta");});
      markerMETRO15 = L.marker([50.61308,3.03644],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"OscarLambret");});
      markerMETRO16 = L.marker([50.63010,3.03547],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"PortLille");});
      markerMETRO17 = L.marker([50.62205,3.04543],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Montebello");});
      markerMETRO18 = L.marker([50.61807,3.07213],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"PorteDouai");});
      markerMETRO19 = L.marker([50.62107,3.07889],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"PorteValenciennes");});
      markerMETRO20 = L.marker([50.62345,3.05159],{icon:metro }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Wazemmes");});
    },
    remove (){
      theMap.removeLayer(markerMETRO);
      theMap.removeLayer(markerMETRO1);
      theMap.removeLayer(markerMETRO2);
      theMap.removeLayer(markerMETRO3);
      theMap.removeLayer(markerMETRO4);
      theMap.removeLayer(markerMETRO5);
      theMap.removeLayer(markerMETRO6);
      theMap.removeLayer(markerMETRO7);
      theMap.removeLayer(markerMETRO8);
      theMap.removeLayer(markerMETRO9);
      theMap.removeLayer(markerMETRO10);
      theMap.removeLayer(markerMETRO11);
      theMap.removeLayer(markerMETRO12);
      theMap.removeLayer(markerMETRO13);
      theMap.removeLayer(markerMETRO14);
      theMap.removeLayer(markerMETRO15);
      theMap.removeLayer(markerMETRO16);
      theMap.removeLayer(markerMETRO17);
      theMap.removeLayer(markerMETRO18);
      theMap.removeLayer(markerMETRO19);
      theMap.removeLayer(markerMETRO20);
    }
  },
  velo : {
    add(){
      let velo = L.icon({
        iconUrl: "images/markers/velo.png",
        iconSize: [40, 60],
        iconAnchor: [20,55],
        popupAnchor: [0,0],
      });
      markerVELO = L.marker([50.63465,3.04841],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleSolfe");}); //solfé
      markerVELO1 = L.marker([50.63235,3.06231],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleRichebe");}); //richebe
      markerVELO2 = L.marker([50.62624,3.04001],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleCormon");}); //cormon
      markerVELO3 = L.marker([50.63424,3.02116],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleEura");}); //euratech
      markerVELO4 = L.marker([50.63416,3.03072],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleBoisBlanc");}); //bois blanc
      markerVELO5 = L.marker([50.63214,3.04613],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleVauban");}); //vauban
      markerVELO6 = L.marker([50.63403,3.04512],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleHEI");}); //hei
      markerVELO7 = L.marker([50.63720,3.02460],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleCante");}); //canteleu
      markerVELO8 = L.marker([50.63085,3.04786],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlillePort");}); //National
      markerVELO9 = L.marker([50.63591,3.05034],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleJardin");}); //jardinvauban
      markerVELO10 = L.marker([50.63622,3.06943],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleFlandres");}); //lille flandres
      markerVELO11 = L.marker([50.63701,3.07086],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleEuralille");}); //euralille
      markerVELO12 = L.marker([50.63989,3.07538],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleEurope");}); //lille europe
      markerVELO13 = L.marker([50.63097,3.06044],{icon:velo }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"VlilleRepublique");}); //richebe
    },
    remove (){
      theMap.removeLayer(markerVELO);
      theMap.removeLayer(markerVELO1);
      theMap.removeLayer(markerVELO2);
      theMap.removeLayer(markerVELO3);
      theMap.removeLayer(markerVELO4);
      theMap.removeLayer(markerVELO5);
      theMap.removeLayer(markerVELO6);
      theMap.removeLayer(markerVELO7);
      theMap.removeLayer(markerVELO8);
      theMap.removeLayer(markerVELO9);
      theMap.removeLayer(markerVELO10);
      theMap.removeLayer(markerVELO11);
      theMap.removeLayer(markerVELO12);
      theMap.removeLayer(markerVELO13);
    }
  },
  //******************************************AUTRE************************************************
  aeu : {
    add(){
      let aeu = L.icon({
        iconUrl: "images/markers/aeu.png",
        iconSize: [40, 60],
        iconAnchor: [20, 55],
        popupAnchor: [0,0],
      });
      markerAEU = L.marker([50.63309,3.04795],{icon:aeu }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"AEU");});
    },
    remove (){
      theMap.removeLayer(markerAEU);
    }
  },
  sandwich : {
    add(){
      let sandwich = L.icon({
        iconUrl: "images/markers/sandwich.png",
        iconSize: [40, 60],
        iconAnchor: [20, 55],
        popupAnchor: [0,0],
      });
      markerSAND = L.marker([50.63359,3.04813],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Dog");}); //dog
      markerSAND1 = L.marker([50.63334,3.04788],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Boite");}); //boite à sandwich
      markerSAND2 = L.marker([50.63445,3.02112],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Pause");}); //pause sandwich
      markerSAND3 = L.marker([50.63420,3.05505],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Paul");}); //Paul
      markerSAND4 = L.marker([50.63601,3.02760],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Colisee");}); //friterie colysee
      markerSAND5 = L.marker([50.62983,3.04597],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Celine");}); //kebab celine
      markerSAND6 = L.marker([50.63405,3.02094],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Sogood");}); //sogood
      markerSAND7 = L.marker([50.63062,3.04448],{icon:sandwich }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Epis");}); //épis
    },
    remove (){
      theMap.removeLayer(markerSAND);
      theMap.removeLayer(markerSAND1);
      theMap.removeLayer(markerSAND2);
      theMap.removeLayer(markerSAND3);
      theMap.removeLayer(markerSAND4);
      theMap.removeLayer(markerSAND5);
      theMap.removeLayer(markerSAND6);
      theMap.removeLayer(markerSAND7);
    }
  },
  pizza : {
    add (){
      let pizza = L.icon({
        iconUrl: "images/markers/pizza.png",
        iconSize: [40, 60],
        iconAnchor: [20, 55],
        popupAnchor: [0,0],
      });
      markerPIZZA = L.marker([50.63649,3.02608],{icon:pizza }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Dominos");}); //dominos
      markerPIZZA1 = L.marker([50.63385,3.05564],{icon:pizza }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Rabbit1");}); //pizza rabbit centre
      markerPIZZA2 = L.marker([50.63697,3.02513],{icon:pizza }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Kiosque");}); //kiosque à pizza
      markerPIZZA3 = L.marker([50.63589,3.02881],{icon:pizza }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Rabbit2");}); //pizza rabbit eura
      markerPIZZA4 = L.marker([50.62981,3.04590],{icon:pizza }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Perfecto");}); //perfecto pizza
    },
    remove (){
      theMap.removeLayer(markerPIZZA);
      theMap.removeLayer(markerPIZZA1);
      theMap.removeLayer(markerPIZZA2);
      theMap.removeLayer(markerPIZZA3);
      theMap.removeLayer(markerPIZZA4);
    }
  },
  gare : {
    add (){
      let gare = L.icon({
        iconUrl: "images/markers/gare.png",
        iconSize: [40, 60],
        iconAnchor: [20, 55],
        popupAnchor: [0,0],
      });
      markerGARE = L.marker([50.63627,3.07089],{icon:gare }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"GareFlandres");}); //lille flandres
      markerGARE1 = L.marker([50.63932,3.07540],{icon:gare }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"GareEurope");}); //lille europe
    },
    remove (){
      theMap.removeLayer(markerGARE);
      theMap.removeLayer(markerGARE1);
    }
  },
  parkings : {
    add (){
      let parking = L.icon({
        iconUrl: "images/markers/parking.png",
        iconSize: [40, 60],
        iconAnchor: [20,55],
        popupAnchor: [0,0],
      });
      let parkingRelais = L.icon({
        iconUrl: "images/markers/parkingrelais.png",
        iconSize: [40, 60],
        iconAnchor: [20,55],
        popupAnchor: [0,0],
      });

      markerPARKING = L.marker([50.636788993222,3.0730428283576],{icon:parking}).addTo(theMap).on('click', function(e) { leftPan.open(this._latlng.lat, this._latlng.lng,"ParkingEurallile");});
      markerPARKING1 = L.marker([50.63883,3.07717],{icon:parking}).addTo(theMap).on('click', function(e) { leftPan.open(this._latlng.lat, this._latlng.lng,"ParkingTours");});
      markerPARKING2 = L.marker([50.64033,3.07572],{icon:parking}).addTo(theMap).on('click', function(e) { leftPan.open(this._latlng.lat, this._latlng.lng,"ParkingLilleEurope");});
      markerPARKING3 = L.marker([50.63112,3.06251],{icon:parking}).addTo(theMap).on('click', function(e) { leftPan.open(this._latlng.lat, this._latlng.lng,"ParkingRepublique");});
      markerPARKING4 = L.marker([50.63456,3.07538],{icon:parking}).addTo(theMap).on('click', function(e) { leftPan.open(this._latlng.lat, this._latlng.lng,"ParkingLilleFlandres");});
      markerPARKING5 = L.marker([50.63978,3.05244],{icon:parking}).addTo(theMap).on('click', function(e) { leftPan.open(this._latlng.lat, this._latlng.lng,"ParkingLiberte");});
      markerPARKING6 = L.marker([50.63704,3.06276],{icon:parking}).addTo(theMap).on('click', function(e) { leftPan.open(this._latlng.lat, this._latlng.lng,"ParkingGrandPlace");});
      markerPARKING7 = L.marker([50.63416,3.06722],{icon:parking}).addTo(theMap).on('click', function(e) { leftPan.open(this._latlng.lat, this._latlng.lng,"ParkingTanneurs");});
      markerPARKING8 = L.marker([50.63719,3.05947],{icon:parking}).addTo(theMap).on('click', function(e) { leftPan.open(this._latlng.lat, this._latlng.lng,"ParkingNouveauSiecle");});
      markerPARKING9 = L.marker([50.63543,3.06148],{icon:parking}).addTo(theMap).on('click', function(e) { leftPan.open(this._latlng.lat, this._latlng.lng,"ParkingRihour");});
      markerPARKING10 = L.marker([50.63129,3.07794],{icon:parking}).addTo(theMap).on('click', function(e) { leftPan.open(this._latlng.lat, this._latlng.lng,"ParkingGrandPalais");});
      markerPARKINGR = L.marker([50.60784,3.04035],{icon:parkingRelais}).addTo(theMap).on('click', function(e) { leftPan.open(this._latlng.lat, this._latlng.lng,"ParkingRCHR");});
      markerPARKINGR1 = L.marker([50.61780,3.05005],{icon:parkingRelais}).addTo(theMap).on('click', function(e) { leftPan.open(this._latlng.lat, this._latlng.lng,"ParkingRPorteDesPostes");});
      markerPARKINGR2 = L.marker([50.61749,3.06390],{icon:parkingRelais}).addTo(theMap).on('click', function(e) { leftPan.open(this._latlng.lat, this._latlng.lng,"ParkingRPorteDArras");});
      markerPARKINGR3 = L.marker([50.65315,2.97500],{icon:parkingRelais}).addTo(theMap).on('click', function(e) { leftPan.open(this._latlng.lat, this._latlng.lng,"ParkingRSaintPhilibert");});

    },
    remove (){
      theMap.removeLayer(markerPARKING);
      theMap.removeLayer(markerPARKING1);
      theMap.removeLayer(markerPARKING2);
      theMap.removeLayer(markerPARKING3);
      theMap.removeLayer(markerPARKING4);
      theMap.removeLayer(markerPARKING5);
      theMap.removeLayer(markerPARKING6);
      theMap.removeLayer(markerPARKING7);
      theMap.removeLayer(markerPARKING8);
      theMap.removeLayer(markerPARKING9);
      theMap.removeLayer(markerPARKING10);
      theMap.removeLayer(markerPARKINGR);
      theMap.removeLayer(markerPARKINGR1);
      theMap.removeLayer(markerPARKINGR2);
      theMap.removeLayer(markerPARKINGR3);
    }
  },
  atm : {
    add (){
      let atm = L.icon({
        iconUrl: "images/markers/atm.png",
        iconSize: [40, 60],
        iconAnchor: [20, 55],
        popupAnchor: [0,0],
      });
      markerATM = L.marker([50.63195,3.04642],{icon:atm }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"SocieteGenerale");}); //société générale
      markerATM1 = L.marker([50.63348,3.04707],{icon:atm }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"AtmIsa");}); //atm isa
      markerATM2 = L.marker([50.63640,3.02629],{icon:atm }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"LCL");}); //lcl
      markerATM3 = L.marker([50.62621,3.04082],{icon:atm }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"CreditNord");}); //crédit du nord cormon
      markerATM4 = L.marker([50.63083,3.04449],{icon:atm }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"CreditAgricole");}); //crédit agricole vauban
      markerATM5 = L.marker([50.62916,3.04258],{icon:atm }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"CIC");}); //CIC
    },
    remove (){
      theMap.removeLayer(markerATM);
      theMap.removeLayer(markerATM1);
      theMap.removeLayer(markerATM2);
      theMap.removeLayer(markerATM3);
      theMap.removeLayer(markerATM4);
      theMap.removeLayer(markerATM5);
    }
  },
  caddy : {
    add (){
      let caddy = L.icon({
        iconUrl: "images/markers/caddy.png",
        iconSize: [40, 60],
        iconAnchor: [20, 55],
        popupAnchor: [0,0],
      });
      markerCADDY = L.marker([50.63210,3.04283],{icon:caddy }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Casino1");}); //casino
      markerCADDY1 = L.marker([50.63222,3.05387],{icon:caddy }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Match");}); //match
      markerCADDY2 = L.marker([50.62997,3.04561],{icon:caddy }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"CarrefourExpress1");}); //carrefour express vauban
      markerCADDY3 = L.marker([50.63435,3.03073],{icon:caddy }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"CarrefourExpress2");}); //carrefour express bois blanc
      markerCADDY4 = L.marker([50.63748,3.07436],{icon:caddy }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Euralille");}); //euralille
      markerCADDY5 = L.marker([50.62575,3.03954],{icon:caddy }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"CarrefourCity");}); //carrefour city cormon
      markerCADDY6 = L.marker([50.63219,3.05076],{icon:caddy }).addTo(theMap).on('click',function(e) { leftPan.open(this._latlng.lat,this._latlng.lng,"Casino2");}); //Petit casino
    },
    remove (){
      theMap.removeLayer(markerCADDY);
      theMap.removeLayer(markerCADDY1);
      theMap.removeLayer(markerCADDY2);
      theMap.removeLayer(markerCADDY3);
      theMap.removeLayer(markerCADDY4);
      theMap.removeLayer(markerCADDY5);
      theMap.removeLayer(markerCADDY6);
    }
  },
  thermo : {
    add(){
      let thermo = L.icon({
        iconUrl: "images/markers/thermo.png",
        iconSize: [40, 40],
        iconAnchor: [18, 30],
        popupAnchor: [0,0],
      });
      markerTHERMO = L.marker([50.63308,3.02345],{icon:thermo }).addTo(theMap).on('click',function(e) { leftPan.tempInfoUrbawood();}); //thermo urbawood
    },
    remove (){
      theMap.removeLayer(markerTHERMO);
    }
  }
};
