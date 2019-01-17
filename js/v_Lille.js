var v_Lille = {
  stringDisponible(nb){
    var res = "";
    if(nb == 0){
      res = "Pas de vélo disponible";
    }else if(nb == 1){
      res = "1 vélo disponible";
    }else{
      res = "" + nb + " vélos disponibles";
    }
    return res;
  },

  stringBorne(nb){
    var res = "";
    if(nb == 0){
      res = "Pas de borne disponible";
    }else if(nb == 1){
      res = "1 place disponible";
    }else{
      res = "" + nb + " places disponibles";
    }
    return res;
  },

  disponible(nomstation){
    var idsation = listeStationV_Lille[nomstation][0];
    var villestation = listeStationV_Lille[nomstation][1];
    var xhr = new XMLHttpRequest();
    xhr.response = "json";
    var chemin = "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion&refine.commune=" + villestation + "&refine.nom=" + idsation;
    xhr.open('GET', chemin, false);
    xhr.send(null);
    var obj = xhr.response;
    var requete = JSON.parse(obj);
    try{
      var veloDisponible, borneDisponible;
      var nbDisponible = requete["records"][0]["fields"]["nbvelosdispo"];
      var nbBorneDisponible = requete["records"][0]["fields"]["nbplacesdispo"];
      if(typeof(nbDisponible) == "undefined"){
        veloDisponible = "Pas de donné disponible";
      }else{
        veloDisponible = v_Lille.stringDisponible(nbDisponible);
      }
      if(typeof(nbBorneDisponible) == "undefined"){
        borneDisponible = "Pas de donné disponible";
      }else{
        borneDisponible = v_Lille.stringBorne(nbBorneDisponible);
      }
      let resultat = [veloDisponible, borneDisponible];
      return resultat;
    }catch{
      let res = "Non disponible"
      let resultat = [res, res];
      return resultat;
    }
  }
};
