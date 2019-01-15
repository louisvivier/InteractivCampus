var leftPan = {
  open(id){
    document.getElementById("leftPan").style.visibility = "visible";
    document.getElementById("leftPan").style.width = "500px";
    document.getElementsByClassName("logo")[0].setAttribute("src","images/logos/"+id+".png");
    document.getElementsByClassName("streetpic")[0].setAttribute("src","images/streetpics/"+id+".png");
    document.getElementsByClassName("adress")[0].innerHTML = buildings[id].adress_street + ", " + buildings[id].street_city;
    document.getElementsByClassName("phone")[0].innerHTML = buildings[id].phone;
    document.getElementsByClassName("email")[0].innerHTML = buildings[id].email;
    document.getElementsByClassName("website")[0].innerHTML = '<a href="'+buildings[id].website+'">'+buildings[id].website+'</a>' ;
  },
  close(){
    document.getElementById("leftPan").style.visibility = "hidden";
    document.getElementById("leftPan").style.width = "0";
  }
}
