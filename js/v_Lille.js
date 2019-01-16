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
      res = "1 borne disponible";
    }else{
      res = "" + nb + " bornes disponibles";
    }
    return res;
  },

  disponible(nomstation){
    var idsation = listeStationV_Lille[nomstation][0];
    var villestation = listeStationV_Lille[nomstation][1];
    var xhr = new XMLHttpRequest();
    var chemin = "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion&refine.commune=" + villestation + "&refine.nom=" + idsation;
    xhr.open('GET', chemin, false);
    xhr.send(null);
    var requete = xhr.response;
    try{
      var nbDisponible = requete["records"][0]["fields"]["nbvelosdispo"];
      var nbBorneDisponible = requete["records"][0]["fields"]["nbbornesdispo"];
      var veloDisponible = v_Lille.stringDisponible(nbDisponible);
      var borneDisponible = v_Lille.stringBorne(nbBorneDisponible);
      let resultat = [veloDisponible, borneDisponible];
      return resultat;
    }catch{
      let res = "Non disponible"
      let resultat = [res, res];
      return resultat;
    }
  }
};
