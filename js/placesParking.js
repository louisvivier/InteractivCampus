var placesParking = {
  disponibleNormal(nomparking){
    var xhr = new XMLHttpRequest();
    xhr.response = "json";
    var chemin = "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=disponibilite-parkings&facet=libelle&facet=ville&facet=etat&refine.libelle=" + nomparking;
    xhr.open('GET', chemin, false);
    xhr.send(null);
    var obj = xhr.response;
    var requete = JSON.parse(obj);
    var nombrePlaces = requete.records[0].fields.aff;
    return nombrePlaces;
  },
  disponibleRelais(nomparking){
    var stringPlaces;
    var xhr = new XMLHttpRequest();
    xhr.response = "json";
    var chemin = "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=transpole-parkingrelais&facet=commune&facet=etat";
    xhr.open('GET', chemin, false);
    xhr.send(null);
    var obj = xhr.response;
    var requete = JSON.parse(obj);
    var nombrePlaces = requete.records[nomparking].fields.nbplacesdispo;
    if(nombrePlaces > 0){
      stringPlaces = nombrePlaces.toString();
      return  stringPlaces;
    }else{
      stringPlaces = "Complet";
      return stringPlaces;
    }
  },
  disponible(nomparking, typeparking){
    var res;
    if (typeparking == "normal"){
      res = placesParking.disponibleNormal(nomparking);
    }else if (typeparking == "relais"){
      res = placesParking.disponibleRelais(nomparking);
    }else{
      res = "Type Parking Error";
    }
    return res;
  }
}
