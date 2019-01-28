var horairesBus = {
  soustractionHeure(heure1, minute1, heure2, minute2){
    var heure, minute;
    if(minute2-minute1 < 0){
      minute2 = minute2 + 60;
      heure2 = heure2 - 1;
      minute = minute2-minute1;
      if(heure2- heure1 < 0){
        heure2 = heure2 + 24;
        heure = heure2 - heure1;
      }else{
        heure = heure2 - heure1;
      }
    }else{
      minute = minute2-minute1;
      if(heure2- heure1 < 0){
        heure2 = heure2 + 24;
        heure = heure2 - heure1;
      }else{
        heure = heure2 - heure1;
      }
    }
    var resultat = [heure, minute];
    return resultat;
  },

  stringSuivant(heure, minute){
    var res;
    if(heure == 0 && minute == 0){
      res = ' un instant';
    }else if(heure == 0){
      if(minute == 1){
        res = ' une minute';
      }else{
        res = " " + minute + " minutes";
      }
    }else if(heure == 1 || heure == 2){
      res = " " + heure + "h" + minute;
    }else{
      res = "Pas de bus disponible";
    }
    return res;
  },

  conversionHeure(heure, minute){
    var minuteDecimal = minute/60;
    let res = heure + minuteDecimal;
    return res;
  },

  conversionHeureMinute(heureDecimal){
    var minuteDecimal = heureDecimal%1;
    var heure = heureDecimal - minuteDecimal;
    var minute = minuteDecimal*60;
    minute = Math.round(minute);
    let res = [heure, minute];
    return res;
  },

  tempsRestant(suivant, second, troisieme){
    var horaireActuel = new Date();
    var heureActuel = horaireActuel.getUTCHours();
    var minuteActuel = horaireActuel.getUTCMinutes();
    var horaire1 = new Date(suivant);
    var heure1 = horaire1.getUTCHours();
    var minute1 = horaire1.getUTCMinutes();
    var resultat1 = horairesBus.soustractionHeure(heureActuel, minuteActuel, heure1, minute1);
    heure1 = resultat1[0];
    minute1 = resultat1[1];
    var horaire2 = new Date(second);
    var heure2 = horaire2.getUTCHours();
    var minute2 = horaire2.getUTCMinutes();
    var resultat2 = horairesBus.soustractionHeure(heureActuel, minuteActuel, heure2, minute2);
    heure2 = resultat2[0];
    minute2 = resultat2[1];
    var horaire3 = new Date(troisieme);
    var heure3 = horaire3.getUTCHours();
    var minute3 = horaire3.getUTCMinutes();
    var resultat3 = horairesBus.soustractionHeure(heureActuel, minuteActuel, heure3, minute3);
    heure3 = resultat3[0];
    minute3 = resultat3[1];
    var tabHorairesNonTrie = [[heure1, minute1], [heure2, minute2], [heure3, minute3]];
    dec1 = horairesBus.conversionHeure(tabHorairesNonTrie[0][0], tabHorairesNonTrie[0][1]);
    dec2 = horairesBus.conversionHeure(tabHorairesNonTrie[1][0], tabHorairesNonTrie[1][1]);
    dec3 = horairesBus.conversionHeure(tabHorairesNonTrie[2][0], tabHorairesNonTrie[2][1]);
    var tabDecimal = [dec1, dec2, dec3];
    tabDecimal.sort();
    var tabHoraires = [horairesBus.conversionHeureMinute(tabDecimal[0]), horairesBus.conversionHeureMinute(tabDecimal[1]), horairesBus.conversionHeureMinute(tabDecimal[2])];
    var temps1 = horairesBus.stringSuivant(tabHoraires[0][0], tabHoraires[0][1]);
    var temps2 = horairesBus.stringSuivant(tabHoraires[1][0], tabHoraires[1][1]);
    var temps3 = horairesBus.stringSuivant(tabHoraires[2][0], tabHoraires[2][1]);
    var horaires = [temps1, temps2, temps3];
    return horaires;
  },

  tempsRestant1(suivant){
    var horaireActuel = new Date();
    var heureActuel = horaireActuel.getUTCHours();
    var minuteActuel = horaireActuel.getUTCMinutes();
    var horaire1 = new Date(suivant);
    var heure1 = horaire1.getUTCHours();
    var minute1 = horaire1.getUTCMinutes();
    var resultat1 = horairesBus.soustractionHeure(heureActuel, minuteActuel, heure1, minute1);
    heure1 = resultat1[0];
    minute1 = resultat1[1];
    var temps1 = horairesBus.stringSuivant(heure1, minute1);
    var temps2 = "Plus de bus disponible";
    var temps3 = "Plus de bus disponible";
    var horaires = [temps1, temps2, temps3];
    return horaires;
  },

  tempsRestant2(suivant, second){
    var horaireActuel = new Date();
    var heureActuel = horaireActuel.getUTCHours();
    var minuteActuel = horaireActuel.getUTCMinutes();
    var horaire1 = new Date(suivant);
    var heure1 = horaire1.getUTCHours();
    var minute1 = horaire1.getUTCMinutes();
    var resultat1 = horairesBus.soustractionHeure(heureActuel, minuteActuel, heure1, minute1);
    heure1 = resultat1[0];
    minute1 = resultat1[1];
    var horaire2 = new Date(second);
    var heure2 = horaire2.getUTCHours();
    var minute2 = horaire2.getUTCMinutes();
    var resultat2 = horairesBus.soustractionHeure(heureActuel, minuteActuel, heure2, minute2);
    heure2 = resultat2[0];
    minute2 = resultat2[1];
    var tabHorairesNonTrie = [[heure1, minute1], [heure2, minute2]];
    dec1 = horairesBus.conversionHeure(tabHorairesNonTrie[0][0], tabHorairesNonTrie[0][1]);
    dec2 = horairesBus.conversionHeure(tabHorairesNonTrie[1][0], tabHorairesNonTrie[1][1]);
    var tabDecimal = [dec1, dec2];
    tabDecimal.sort();
    var tabHoraires = [horairesBus.conversionHeureMinute(tabDecimal[0]), horairesBus.conversionHeureMinute(tabDecimal[1])];
    var temps1 = horairesBus.stringSuivant(tabHoraires[0][0], tabHoraires[0][1]);
    var temps2 = horairesBus.stringSuivant(tabHoraires[1][0], tabHoraires[1][1]);
    var temps3 = "Plus de bus disponible";
    var horaires = [temps1, temps2, temps3];
    return horaires;
  },

  getHoraires(ligne, arret, sens){ //("18", "SOLFERINO", "ANATOLE+FRANCE")
    var xhr = new XMLHttpRequest();
    xhr.response = "json";
    var chemin = "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=ilevia-prochainspassages&facet=nomstation&facet=codeligne&facet=sensligne&refine.codeligne=" + ligne + "&refine.nomstation=" + arret + "&refine.sensligne=" + sens;
    xhr.open('GET', chemin, false);
    xhr.send(null);
    var obj = xhr.response;
    var requete = JSON.parse(obj);
    try{
      var suivant1 = requete["records"][0]["fields"]["heureestimeedepart"];
      try{
        var suivant2 = requete["records"][1]["fields"]["heureestimeedepart"];
        try{
          var suivant3 = requete["records"][2]["fields"]["heureestimeedepart"];
          var horaires = horairesBus.tempsRestant(suivant1, suivant2, suivant3);
          return horaires
        }catch{
          var horaires = horairesBus.tempsRestant2(suivant1, suivant2);
          return horaires;
        }
      }catch{
        var horaires = horairesBus.tempsRestant1(suivant1);
        return horaires;
      }
    }catch{
      var erreur = ["Non disponible", "Non disponible", "Non disponible"];
      return erreur;
    }
  }
};
