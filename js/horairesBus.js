var soustractionHeure = function(heure1, minute1, heure2, minute2){
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
};

var stringSuivant = function(heure, minute){
  var res;
  if(heure == 0 && minute == 0){
    res = ' un instant';
  }else if(heure == 0){
    if(minute == 1){
      res = ' une minute';
    }else{
      res = " " + minute + " minutes";
    }
  }else{
    res = " " + heure + "h" + minute;
  }
  return res;
};

var tempsRestant = function(suivant, second, troisieme){
  var horaireActuel = new Date();
  var heureActuel = horaireActuel.getUTCHours();
  var minuteActuel = horaireActuel.getUTCMinutes();
  var horaire1 = new Date(suivant);
  var heure1 = horaire1.getUTCHours();
  var minute1 = horaire1.getUTCMinutes();
  var resultat1 = soustractionHeure(heureActuel, minuteActuel, heure1, minute1);
  heure1 = resultat1[0];
  minute1 = resultat1[1];
  var horaire2 = new Date(second);
  var heure2 = horaire2.getUTCHours();
  var minute2 = horaire2.getUTCMinutes();
  var resultat2 = soustractionHeure(heureActuel, minuteActuel, heure2, minute2);
  heure2 = resultat2[0];
  minute2 = resultat2[1];
  var horaire3 = new Date(troisieme);
  var heure3 = horaire3.getUTCHours();
  var minute3 = horaire3.getUTCMinutes();
  var resultat3 = soustractionHeure(heureActuel, minuteActuel, heure3, minute3);
  heure3 = resultat3[0];
  minute3 = resultat3[1];
  var temps1 = stringSuivant(heure1, minute1);
  var temps2 = stringSuivant(heure2, minute2);
  var temps3 = stringSuivant(heure3, minute3);
  console.log(temps1);
  console.log(temps2);
  console.log(temps3);
};
