var leftPan = {
  open(id){
    document.getElementById("leftPan").style.visibility = "visible";
    document.getElementById("leftPan").style.width = "500px";
  },
  close(){
    document.getElementById("leftPan").style.visibility = "hidden";
    document.getElementById("leftPan").style.width = "0";
  }
}
