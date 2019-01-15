var leftPan = {
  open(id){
    document.getElementById("leftPan").style.visibility = "visible";
    document.getElementById("leftPan").style.width = "500px";
    document.getElementsByClassName("logo")[0].setAttribute("src","images/logos/"+id+".png");
    document.getElementsByClassName("streetpic")[0].setAttribute("src","images/streetpics/"+id+".png");
    $('.adress').html(places[id].adress_street + ", " + places[id].adress_city);
    $('.phone').html(places[id].phone);
    $('.email').html(places[id].email);
    document.getElementsByClassName("website")[0].innerHTML = '<a target="_blank" href="http://'+places[id].website+'">'+places[id].website+'</a>' ;
    if (places[id].twitter != ""){
      $('.twitterFeed').html('<a class="twitter-timeline" data-width="480" data-dnt="true" href="https://twitter.com/'+places[id].twitter+'?ref_src=twsrc%5Etfw" data-tweet-limit="5">Tweets by '+places[id].twitter+'</a> <script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
    }
  },
  close(){
    document.getElementById("leftPan").style.visibility = "hidden";
    document.getElementById("leftPan").style.width = "0";
  }
}
