var leftPan = {
  open(lat,lng,icon,id){
    $('.leaflet-marker-icon').css("opacity","0.6");
    $('.infos').css("background-color","#fff");
    $("#leftPan").css("background-color",places[id].marker_color);
    $("#leftPan").css("visibility","visible");
    $("#leftPan").css("width","500px");
    $(".logo").attr("src", "images/logos/"+places[id].logo_name+".png");
    $(".streetpic").attr("src", "images/streetpics/"+places[id].streetpic_name+".png");
    $('.name').html(places[id].name);
    $('.adress').html(places[id].adress_street + ", " + places[id].adress_city);
    $('.phone').html(places[id].phone);
    $('.email').html(places[id].email);
    $('.website').html('<a href="'+places[id].website+'">'+places[id].link_text+'</a>') ;
    if (typeof(places[id].rating)!= 'undefined'){
      if (places[id].rating["tripadvisor"] != ""){
        $(".rating").html('<a href="'+places[id].rating["tripadvisor"]+'"><img border="0" alt="Tripadvisor" src="images/logos/tripadvisor.png" width="100" height="100"></a>');
      }
      else {
        $(".rating").html('');
      }
    }
    else {
      $(".rating").html('');
    }
    if (typeof(places[id].bus_infos)!= 'undefined'){//Si arret de bus
      let type = "bus";
      let request = horairesBusTram.getHoraires(type, places[id].bus_infos[0]["ligne"],places[id].bus_infos[0]["stop"],places[id].bus_infos[0]["way"]);
      $('.NextBus1').html("<b>"+places[id].bus_infos[0]["name"]+"</b><br>Prochain bus dans : "+request[0]+"<br>"+"Puis dans : "+request[1]+"<br>"+"Et dans : "+request[2]);
      $('.NextBus').css("display","block");
      $('.NextBus1').css("display","block");
      if(typeof(places[id].bus_infos[1]) != 'undefined'){
        let request = horairesBusTram.getHoraires(type, places[id].bus_infos[1]["ligne"],places[id].bus_infos[1]["stop"],places[id].bus_infos[1]["way"]);
        $('.NextBus2').html("<b>"+places[id].bus_infos[1]["name"]+"</b><br>Prochain bus dans : "+request[0]+"<br>"+"Puis dans : "+request[1]+"<br>"+"Et dans : "+request[2]);
        $('.NextBus2').css("display","block");
        if(typeof(places[id].bus_infos[2]) != 'undefined'){
          let request = horairesBusTram.getHoraires(type, places[id].bus_infos[2]["ligne"],places[id].bus_infos[2]["stop"],places[id].bus_infos[2]["way"]);
          $('.NextBus3').html("<b>"+places[id].bus_infos[2]["name"]+"</b><br>Prochain bus dans : "+request[0]+"<br>"+"Puis dans : "+request[1]+"<br>"+"Et dans : "+request[2]);
          $('.NextBus3').css("display","block");
        }
        else{
          $('.NextBus3').css("display","none");
        }
      }
      else{
        $('.NextBus2').css("display","none");
        $('.NextBus3').css("display","none");
      }
    }
    else{
      $('.NextBus').css("display","none");
    }
    if (typeof(places[id].tram_infos)!= 'undefined'){//Si arret de tram
      let type = "tram";
      let request = horairesBusTram.getHoraires(type, places[id].tram_infos[0]["ligne"],places[id].tram_infos[0]["stop"],places[id].tram_infos[0]["way"]);
      $('.NextTram1').html("<b>"+places[id].tram_infos[0]["name"]+"</b><br>Prochain tram dans : "+request[0]+"<br>"+"Puis dans : "+request[1]+"<br>"+"Et dans : "+request[2]);
      $('.NextTram').css("display","block");
      $('.NextTram1').css("display","block");
      if(typeof(places[id].tram_infos[1]) != 'undefined'){
        let request = horairesBusTram.getHoraires(type, places[id].tram_infos[1]["ligne"],places[id].tram_infos[1]["stop"],places[id].tram_infos[1]["way"]);
        $('.NextTram2').html("<b>"+places[id].tram_infos[1]["name"]+"</b><br>Prochain tram dans : "+request[0]+"<br>"+"Puis dans : "+request[1]+"<br>"+"Et dans : "+request[2]);
        $('.NextTram2').css("display","block");
        if(typeof(places[id].tram_infos[2]) != 'undefined'){
          let request = horairesBusTram.getHoraires(type, places[id].tram_infos[2]["ligne"],places[id].tram_infos[2]["stop"],places[id].tram_infos[2]["way"]);
          $('.NextTram3').html("<b>"+places[id].tram_infos[2]["name"]+"</b><br>Prochain tram dans : "+request[0]+"<br>"+"Puis dans : "+request[1]+"<br>"+"Et dans : "+request[2]);
          $('.NextTram3').css("display","block");
        }
        else{
          $('.NextTram3').css("display","none");
        }
      }
      else{
        $('.NextTram2').css("display","none");
        $('.NextTram3').css("display","none");
      }
    }
    else{
      $('.NextTram').css("display","none");
    }
    if (typeof(places[id].vlille_station)!= 'undefined'){//Si station Vlille
      let request = v_Lille.disponible(places[id].vlille_station);
      $('.Vlille').html("Vélos : "+request[0]+"<br>"+"Bornes : "+request[1]);
      $('.Vlille').css("display","block");
    }
    else{
      $('.Vlille').css("display","none");
    }
    if (typeof(places[id].parking_info) != 'undefined'){
      let request = placesParking.disponible(places[id].parking_info.parking_id, places[id].parking_info.parking_type);
      $('.ParkingPlace').html("Places disponibles : "+request+"<br>"+"Capacité max : "+ places[id].parking_info.parking_capacity);
      $('.ParkingPlace').css("display","block");
    }else{
      $('.ParkingPlace').css("display","none");
    }
    if (places[id].twitter != ""){
      $('.twitterFeed').html('<a class="twitter-timeline" data-width="480" data-dnt="true" href="https://twitter.com/'+places[id].twitter+'?ref_src=twsrc%5Etfw" data-tweet-limit="5">Tweets by '+places[id].twitter+'</a> <script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
    }
    else {
      $('.twitterFeed').html('');
    }
    icon.style.opacity = "1";
    theMap.setView([lat, lng],theMap.getZoom()); //CENTRAGE MAP APRES CLICK SUR MARKER (en conservant niveau de zoom)
    $("a").attr("target", "popup");
    $("a").attr("onclick", 'window.open(this.href,"popup","width=800,height=600,left=300,top=300"); return false;');
  },
  close(){
    document.getElementById("leftPan").style.visibility = "hidden";
    document.getElementById("leftPan").style.width = "0";
    $('.leaflet-marker-icon').css("opacity","1");
  },
  tempInfoUrbawood(){
    $("#leftPan").css("background-color","#bfbfbf");
    $("#leftPan").css("visibility","visible");
    $("#leftPan").css("width","500px");
    $('.adress').html('');
    $('.phone').html('');
    $('.email').html('');
    $('.website').html('') ;
    $(".logo").attr("src", "");
    $(".streetpic").attr("src", "");
    $('.name').html('Temperature d\'Adicode Euratech');
    $('.infos').css("background-color","#bfbfbf");
    $('.Vlille').css("display","none");
    $('.NextBus').css("display","none");
    $('.NextTram').css("display","none");
    $('.twitterFeed').html('<iframe src="http://10.34.168.24:8300/createChart?feedType=Temperature&chartType=dot&node=6FED0711&limitNumberOfData=40" width="460" height="250" style="border:none"></iframe>');
  },
}
//blue #8eabc8
//Red #d65543
//Moutarde #dfc277
//Vert #9eb886
//Gris #adadae
var optionsPan = {
  init (){
    $(".schools").click(function(){ optionsPan.schools();});
    $(".metro").click(function(){ optionsPan.metro(); });
    $(".bus").click(function(){ optionsPan.bus(); });
    $(".tram").click(function(){ optionsPan.tram();});
    $(".vlille").click(function(){ optionsPan.vlille(); });
    $(".train").click(function(){ optionsPan.train(); });
    $(".parking").click(function(){ optionsPan.parking(); });
    $(".markets").click(function(){ optionsPan.markets(); });
    $(".food").click(function(){ optionsPan.food(); });
    $(".atm").click(function(){ optionsPan.atm(); });
    $(".temp").click(function(){ optionsPan.temp(); });
  },
  schools(){
    if (switchSchools == 1){
      markers.ecole.remove();
      polygone.isen.remove();
      polygone.rameau.remove();
      polygone.urbawood.remove();
      polygone.hei.remove();
      polygone.rizomm.remove();
      polygone.heiprepa.remove();
      polygone.isa.remove();
      polygone.catho.remove();
      polygone.cathobis.remove();
      polygone.yncrea.remove();
      polygone.yncreaCompta.remove();
      $('.schools').css("opacity","0.5");
      switchSchools = 0;
    }
    else if (switchSchools == 0){
      markers.ecole.add();
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
      $('.schools').css("opacity","1");
      switchSchools = 1;
    }
  },
  metro(){
    if (switchMetro == 1){
      markers.metro.remove();
      $('.metro').css("opacity","0.5");
      polyline.ligne1.remove();
      polyline.ligne2.remove();
      switchMetro = 0;
    }
    else if (switchMetro == 0){
      markers.metro.add();
      $('.metro').css("opacity","1");
      polyline.ligne1.add();
      polyline.ligne2.add();
      switchMetro = 1;
    }
  },
  bus(){
    if (switchBus == 1){
      markers.bus.remove();
      $('.bus').css("opacity","0.5");
      switchBus = 0;
    }
    else if (switchBus == 0){
      markers.bus.add();
      $('.bus').css("opacity","1");
      switchBus = 1;
    }
  },
  tram(){
    if (switchTram == 1){
      markers.tram.remove();
      $('.tram').css("opacity", "0.5");
      switchTram = 0;
    }else if (switchTram == 0){
      markers.tram.add();
      $('.tram').css("opacity", "1");
      switchTram = 1;
    }
  },
  vlille(){
    if (switchVlille == 1){
      markers.velo.remove();
      $('.vlille').css("opacity","0.5");
      switchVlille = 0;
    }
    else if (switchVlille == 0){
      markers.velo.add();
      $('.vlille').css("opacity","1");
      switchVlille = 1;
    }
  },
  train(){
    if (switchTrain == 1){
      markers.gare.remove();
      $('.train').css("opacity","0.5");
      switchTrain = 0;
    }
    else if (switchTrain == 0){
      markers.gare.add();
      $('.train').css("opacity","1");
      switchTrain = 1;
    }
  },
  parking(){
    if (switchParking == 1){
      markers.parkings.remove();
      $('.parking').css("opacity","0.5");
      switchParking = 0;
    }
    else if (switchParking == 0){
      markers.parkings.add();
      $('.parking').css("opacity","1");
      switchParking = 1;
    }
  },
  markets(){
    if (switchMarkets == 1){
      markers.caddy.remove();
      $('.markets').css("opacity","0.5");
      switchMarkets = 0;
    }
    else if (switchMarkets == 0){
      markers.caddy.add();
      $('.markets').css("opacity","1");
      switchMarkets = 1;
    }
  },
  food(){
    if (switchFood == 1){
      markers.sandwich.remove();
      markers.pizza.remove();
      markers.aeu.remove();
      $('.food').css("opacity","0.5");
      switchFood = 0;
    }
    else if (switchFood == 0){
      markers.sandwich.add();
      markers.pizza.add();
      markers.aeu.add();
      $('.food').css("opacity","1");
      switchFood = 1;
    }
  },
  temp(){
    if (switchTemp == 1){
      markers.thermo.remove();
      $('.temp').css("opacity","0.5");
      switchTemp = 0;
    }
    else if (switchTemp == 0){
      markers.thermo.add();
      $('.temp').css("opacity","1");
      switchTemp = 1;
    }
  },
  atm(){
    if (switchAtm == 1){
      markers.atm.remove();
      $('.atm').css("opacity","0.5");
      switchAtm = 0;
    }
    else if (switchAtm == 0){
      markers.atm.add();
      $('.atm').css("opacity","1");
      switchAtm = 1;
    }
  }
}
