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
    }else{
      res = " " + heure + "h" + minute;
    }
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
    var temps1 = horairesBus.stringSuivant(heure1, minute1);
    var temps2 = horairesBus.stringSuivant(heure2, minute2);
    var temps3 = horairesBus.stringSuivant(heure3, minute3);
    var horaires = [temps1, temps2, temps3];
    return horaires;
  },

  getHoraires(ligne, arret, sens){ //(18, "SOLFERINO", "ANATOLE+FRANCE")
    var xhr = new XMLHttpRequest();
    var chemin = "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=transpole-prochainspassages&facet=nomstation&facet=codeligne&facet=sensligne&refine.codeligne=" + ligne + "&refine.nomstation=" + arret + "&refine.sensligne=" + sens;
    xhr.open('GET', chemin, false);
    xhr.send(null);
    var requete = xhr.response;
    try{
      var suivant1 = requete.records[0].fields.heureestimeedepart;
      var suivant2 = requete.records[1].fields.heureestimeedepart;
      var suivant3 = requete.records[2].fields.heureestimeedepart;
      var horaires = horairesBus.tempsRestant(suivant1, suivant2, suivant3);
      return horaires;
    }catch{
      console.log("Non disponible");
      var erreur = ["Non disponible", "Non disponible", "Non disponible"];
      return erreur;
    }
  }
};
/*
{
  "nhits":3,
  "parameters":{
    "dataset":[
      "transpole-prochainspassages"
    ],
    "refine":{
      "codeligne":"18",
      "nomstation":"SOLFERINO",
      "sensligne":"ANATOLE FRANCE"
    },
    "timezone":"UTC",
    "rows":10,
    "sort":[
      "cletri"
    ],
    "format":"json",
    "facet":[
      "nomstation",
      "codeligne",
      "sensligne"
    ]
  },
  "records":[
    {
      "datasetid":"transpole-prochainspassages",
      "recordid":"2d216b618862ab42e120d2aad6ec3524a50d7b0a",
      "fields":{
        "identifiantstation":"TRANSPOLE:StopPointRef:BP:7224:LOC",
        "sensligne":"ANATOLE FRANCE",
        "datemodification":"2019-01-16T07:34:09+00:00",
        "cletri":"ANATOLE FRANCE/SOLFERINO/2019-01-16T08:43:19.000+01:00",
        "codeligne":"18",
        "heureestimeedepart":"2019-01-16T07:43:19+00:00",
        "nomstation":"SOLFERINO",
        "clemodification":"TRANSPOLE:ItemId::53754:LOC"
      },
      "record_timestamp":"2019-01-16T06:38:00+00:00"
    },
    {
      "datasetid":"transpole-prochainspassages",
      "recordid":"236f2eb05ae95900ffe814df37193d61d3b81bd1",
      "fields":{
        "identifiantstation":"TRANSPOLE:StopPointRef:BP:7224:LOC",
        "sensligne":"ANATOLE FRANCE",
        "datemodification":"2019-01-16T07:32:09+00:00",
        "cletri":"ANATOLE FRANCE/SOLFERINO/2019-01-16T08:58:26.000+01:00",
        "codeligne":"18",
        "heureestimeedepart":"2019-01-16T07:58:26+00:00",
        "nomstation":"SOLFERINO",
        "clemodification":"TRANSPOLE:ItemId::52412:LOC"
      },
      "record_timestamp":"2019-01-16T06:38:00+00:00"
    },
    {
      "datasetid":"transpole-prochainspassages",
      "recordid":"6658518d1b61e818f8a8bd5fe339a27cb4714f85",
      "fields":{
        "identifiantstation":"TRANSPOLE:StopPointRef:BP:7224:LOC",
        "sensligne":"ANATOLE FRANCE",
        "datemodification":"2019-01-16T06:35:55+00:00",
        "cletri":"ANATOLE FRANCE/SOLFERINO/2019-01-16T09:11:55.000+01:00",
        "codeligne":"18",
        "heureestimeedepart":"2019-01-16T08:11:55+00:00",
        "nomstation":"SOLFERINO",
        "clemodification":"TRANSPOLE:ItemId::56992:LOC"
      },
      "record_timestamp":"2019-01-16T06:38:00+00:00"
    }
  ],
  "facet_groups":[
    {
      "name":"nomstation",
      "facets":[
        {
          "name":"SOLFERINO",
          "path":"SOLFERINO",
          "count":3,
          "state":"refined"
        }
      ]
    },
    {
      "name":"codeligne",
      "facets":[
        {
          "name":"18",
          "path":"18",
          "count":3,
          "state":"refined"
        }
      ]
    },
    {
      "name":"sensligne",
      "facets":[
        {
          "name":"ANATOLE FRANCE",
          "path":"ANATOLE FRANCE",
          "count":3,
          "state":"refined"
        }
      ]
    }
  ]
}
*/
