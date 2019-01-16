var leftPan = {
  open(id){
    $("#leftPan").css("background-color",places[id].marker_color);
    $("#leftPan").css("visibility","visible");
    $("#leftPan").css("width","500px");
    $(".logo").attr("src", "images/logos/"+places[id].logo_name+".png");
    $(".streetpic").attr("src", "images/streetpics/"+places[id].streetpic_name+".png");
    $('.name').html(places[id].name);
    $('.adress').html(places[id].adress_street + ", " + places[id].adress_city);
    $('.phone').html(places[id].phone);
    $('.email').html(places[id].email);
    if (typeof(places[id].bus_infos)!= 'undefined'){//Si arret de bus
      $('.NextBus').html("Prochain bus dans : "+horairesBus.getHoraires(places[id].bus_infos["ligne"],places[id].bus_infos["stop"],places[id].bus_infos["way"])[2]+"<br>"+"Puis dans : "+horairesBus.getHoraires(places[id].bus_infos["ligne"],places[id].bus_infos["stop"],places[id].bus_infos["way"])[1]+"<br>"+"Ou encore dans : "+horairesBus.getHoraires(places[id].bus_infos["ligne"],places[id].bus_infos["stop"],places[id].bus_infos["way"])[0]);
      $('.NextBus').css("display","block");
    }
    else{
      $('.NextBus').css("display","none");
    }
    if (typeof(places[id].vlille_station)!= 'undefined'){//Si station Vlille
      $('.Vlille').html("Vélos : "+v_Lille.disponible(places[id].vlille_station)[0]+"<br>"+"Bornes : "+v_Lille.disponible(places[id].vlille_station)[0]);
      $('.Vlille').css("display","block");
    }
    else{
      $('.Vlille').css("display","none");
    }
    $('.website').html('<a target="_blank" href="'+places[id].website+'">'+places[id].link_text+'</a>') ;
    if (places[id].twitter != ""){
      $('.twitterFeed').html('<a class="twitter-timeline" data-width="480" data-dnt="true" href="https://twitter.com/'+places[id].twitter+'?ref_src=twsrc%5Etfw" data-tweet-limit="5">Tweets by '+places[id].twitter+'</a> <script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
    }
    else {
      $('.twitterFeed').html('');
    }
  },
  close(){
    document.getElementById("leftPan").style.visibility = "hidden";
    document.getElementById("leftPan").style.width = "0";
  }
}
//blue #8eabc8
//Red #d65543
//Moutarde #dfc277
//Vert #9eb886
//Gris #adadae
