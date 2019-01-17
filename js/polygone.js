var polygone = {
  urbawood : {
    add (){
      poly_urbawood = L.polygon([
        [50.6330912, 3.0232973],
        [50.6332685, 3.0237283],
        [50.6331245, 3.0238751],
        [50.6329517, 3.0234348]
      ],{
        color:'black',
        fillColor:'#be8d2e',
        fillOpacity:0.7
      }).addTo(theMap);
    },
    remove (){
      theMap.removeLayer(poly_urbawood);
    }
  },
  isen : {
    add (){
      poly_ISEN = L.polygon([
        [50.6340013, 3.0493308],
        [50.6340281, 3.0492803],
        [50.6340351, 3.0492889],
        [50.6342127, 3.0489568],
        [50.6342053, 3.0489462],
        [50.6342808, 3.0488018],
        [50.6342590, 3.0487754],
        [50.6342645, 3.0487637],
        [50.6342249, 3.0487103],
        [50.6342174, 3.0487206],
        [50.6342129, 3.0487153],
        [50.6342011, 3.0487380],
        [50.6341665, 3.0487042],
        [50.6341736, 3.0486873],
        [50.6339311, 3.0484332],
        [50.6339328, 3.0484246],
        [50.6339213, 3.0484135],
        [50.6339287, 3.0483953],
        [50.6337333, 3.0481925],
        [50.6336316, 3.0483878],
        [50.6336574, 3.0484126],
        [50.6336508, 3.0484411],
        [50.6336473, 3.0484655],
        [50.6336824, 3.0485108],
        [50.6336737, 3.0485285],
        [50.6336435, 3.0484904],
        [50.6336385, 3.0485367],
        [50.6336345, 3.0485642],
        [50.6336461, 3.0485786],
        [50.6336283, 3.0486151],
        [50.6339693, 3.0490677],
        [50.6339876, 3.0490354],
        [50.6340147, 3.0490684],
        [50.6339248, 3.0492373]
      ],{
        color:'black',
        fillColor:'red',
        fillOpacity:0.7
      }).addTo(theMap);
    },
    remove (){
      theMap.removeLayer(poly_ISEN);
    }
  },
  rameau : {
    add(){
      poly_RAMEAU = L.polygon([
        [50.6346449, 3.0494983],
        [50.6346143, 3.0494582],
        [50.6346113, 3.0494638],
        [50.6345465, 3.0493787],
        [50.6345496, 3.0493729],
        [50.6345203, 3.0493344],
        [50.6344906, 3.0493903],
        [50.6345010, 3.0494039],
        [50.6344613, 3.0494786],
        [50.6344187, 3.0494225],
        [50.6344215, 3.0494173],
        [50.6344113, 3.0494039],
        [50.6344090, 3.0494083],
        [50.6344021, 3.0494019],
        [50.6343968, 3.0494002],
        [50.6343898, 3.0494001],
        [50.6343835, 3.0494047],
        [50.6343811, 3.0494101],
        [50.6343776, 3.0494056],
        [50.6343681, 3.0494237],
        [50.6343711, 3.0494277],
        [50.6343338, 3.0494986],
        [50.6343304, 3.0494942],
        [50.6343221, 3.0495100],
        [50.6343253, 3.0495141],
        [50.6342899, 3.0495813],
        [50.6342855, 3.0495756],
        [50.6342771, 3.0495917],
        [50.6342809, 3.0495966],
        [50.6342446, 3.0496655],
        [50.6342375, 3.0496562],
        [50.6342290, 3.0496724],
        [50.6342329, 3.0496774],
        [50.6342211, 3.0496998],
        [50.6342165, 3.0496938],
        [50.6342093, 3.0497075],
        [50.6342136, 3.0497131],
        [50.6342136, 3.0497131],
        [50.6341831, 3.0497712],
        [50.6341783, 3.0497650],
        [50.6341755, 3.0497704],
        [50.6341713, 3.0497784],
        [50.6341754, 3.0497837],
        [50.6341639, 3.0498056],
        [50.6341598, 3.0498001],
        [50.6341499, 3.0498188],
        [50.6341564, 3.0498272],
        [50.6341198, 3.0498967],
        [50.6341169, 3.0498929],
        [50.6341072, 3.0499114],
        [50.6341104, 3.0499155],
        [50.6340743, 3.0499841],
        [50.6340713, 3.0499802],
        [50.6340633, 3.0499954],
        [50.6340657, 3.0499985],
        [50.6340299, 3.0500667],
        [50.6340257, 3.0500611],
        [50.6340162, 3.0500791],
        [50.6340185, 3.0500821],
        [50.6340141, 3.0500925],
        [50.6340134, 3.0501003],
        [50.6340150, 3.0501108],
        [50.6340150, 3.0501108],
        [50.6340173, 3.0501186],
        [50.6340216, 3.0501248],
        [50.6340183, 3.0501310],
        [50.6340288, 3.0501449],
        [50.6340313, 3.0501402],
        [50.6340787, 3.0502031],
        [50.6340620, 3.0502342],
        [50.6340564, 3.0502268],
        [50.6340478, 3.0502429],
        [50.6340531, 3.0502500],
        [50.6340420, 3.0502708],
        [50.6340400, 3.0502681],
        [50.6340346, 3.0502782],
        [50.6340391, 3.0502879],
        [50.6340310, 3.0502886],
        [50.6340222, 3.0502906],
        [50.6340121, 3.0502947],
        [50.6339975, 3.0503040],
        [50.6339833, 3.0503180],
        [50.6339688, 3.0503393],
        [50.6339596, 3.0503590],
        [50.6339521, 3.0503831],
        [50.6339521, 3.0503831],
        [50.6339473, 3.0504099],
        [50.6339457, 3.0504359],
        [50.6339471, 3.0504617],
        [50.6339524, 3.0504915],
        [50.6339586, 3.0505116],
        [50.6339684, 3.0505332],
        [50.6339797, 3.0505509],
        [50.6339951, 3.0505673],
        [50.6340091, 3.0505771],
        [50.6340288, 3.0505843],
        [50.6340486, 3.0505849],
        [50.6340713, 3.0505773],
        [50.6340844, 3.0505684],
        [50.6340994, 3.0505530],
        [50.6341105, 3.0505365],
        [50.6341204, 3.0505160],
        [50.6341284, 3.0504914],
        [50.6341324, 3.0504711],
        [50.6341346, 3.0504505],
        [50.6341350, 3.0504363],
        [50.6341336, 3.0504116],
        [50.6341386, 3.0504166],
        [50.6341442, 3.0504064],
        [50.6341417, 3.0504032],
        [50.6341530, 3.0503822],
        [50.6341583, 3.0503892],
        [50.6341660, 3.0503747],
        [50.6341610, 3.0503681],
        [50.6341782, 3.0503361],
        [50.6342244, 3.0503976],
        [50.6342208, 3.0504043],
        [50.6342303, 3.0504168],
        [50.6342332, 3.0504113],
        [50.6342383, 3.0504174],
        [50.6342486, 3.0504186],
        [50.6342572, 3.0504145],
        [50.6342616, 3.0504052],
        [50.6342649, 3.0504099],
        [50.6342739, 3.0503939],
        [50.6342687, 3.0503866],
        [50.6343064, 3.0503188],
        [50.6343103, 3.0503242],
        [50.6343187, 3.0503091],
        [50.6343137, 3.0503022],
        [50.6343513, 3.0502348],
        [50.6343552, 3.0502402],
        [50.6343650, 3.0502226],
        [50.6343650, 3.0502226],
        [50.6343604, 3.0502163],
        [50.6343988, 3.0501473],
        [50.6344066, 3.0501578],
        [50.6344159, 3.0501404],
        [50.6344124, 3.0501357],
        [50.6344236, 3.0501148],
        [50.6344236, 3.0501148],
        [50.6344271, 3.0501194],
        [50.6344345, 3.0501056],
        [50.6344308, 3.0501007],
        [50.6344619, 3.0500431],
        [50.6344654, 3.0500478],
        [50.6344735, 3.0500327],
        [50.6344697, 3.0500276],
        [50.6344819, 3.0500053],
        [50.6344856, 3.0500101],
        [50.6344951, 3.0499923],
        [50.6344860, 3.0499801],
        [50.6345223, 3.0499150],
        [50.6345256, 3.0499196],
        [50.6345346, 3.0499036],
        [50.6345302, 3.0498975],
        [50.6345670, 3.0498314],
        [50.6345699, 3.0498354],
        [50.6345787, 3.0498197],
        [50.6345750, 3.0498147],
        [50.6346114, 3.0497495],
        [50.6346144, 3.0497536],
        [50.6346248, 3.0497349],
        [50.6346196, 3.0497278],
        [50.6346229, 3.0497194],
        [50.6346237, 3.0497048],
        [50.6346208, 3.0496933],
        [50.6346167, 3.0496894],
        [50.6346204, 3.0496824],
        [50.6346108, 3.0496698],
        [50.6346086, 3.0496738],
        [50.6345632, 3.0496141],
        [50.6346035, 3.0495384],
        [50.6346153, 3.0495540],
        [50.6346449, 3.0494983]
      ],{
        color:'black',
        fillColor:'red',
        fillOpacity:0.7
      }).addTo(theMap);
    },
    remove (){
      theMap.removeLayer(poly_RAMEAU);
    }
  },
  isa : {
    add (){
      poly_ISA = L.polygon([
        [50.6335936, 3.0471229],
        [50.6337201, 3.0468388],
        [50.6337279, 3.0468225],
        [50.6336267, 3.0467054],
        [50.6338937, 3.0461290],
        [50.6338937, 3.0461290],
        [50.6339872, 3.0462335],
        [50.6339084, 3.0463943],
        [50.6340822, 3.0465919],
        [50.6340790, 3.0466042],
        [50.6340350, 3.0467721],
        [50.6340092, 3.0467437],
        [50.6338039, 3.0471854],
        [50.6336776, 3.0470383],
        [50.6336230, 3.0471544],
        [50.6335936, 3.0471229]
      ],{
        color:'black',
        fillColor:'#6cc934',
        fillOpacity:0.7
      }).addTo(theMap);
    },
    remove (){
      theMap.removeLayer(poly_ISA);
    }
  },
  hei : {
    add (){
      poly_HEI = L.polygon([

        [50.6336070, 3.0455924],
        [50.6335930, 3.0456279],
        [50.6335645, 3.0456530],
        [50.6335466, 3.0456616],
        [50.6335207, 3.0456561],
        [50.6335030, 3.0456380],
        [50.6334829, 3.0456173],
        [50.6334685, 3.0455789],
        [50.6334681, 3.0455037],
        [50.6334854, 3.0454619],
        [50.6333687, 3.0453365],
        [50.6334517, 3.0451441],
        [50.6335117, 3.0450022],
        [50.6335766, 3.0448503],
        [50.6335766, 3.0448503],
        [50.6340932, 3.0454176],//batiment L
        [50.6337684, 3.0461240],
        [50.6337609, 3.0461156],
        [50.6337609, 3.0461156],
        [50.6336587, 3.0463345],
        [50.6335948, 3.0462593],
        [50.6334850, 3.0461386],
        [50.6335822, 3.0459353],
        [50.6335614, 3.0458657],
        [50.6337120, 3.0457422],
        [50.6337238, 3.0457156],
      ],{
        color:'black',
        fillColor:'black',
        fillOpacity:0.7
      }).addTo(theMap);
    },
    remove (){
      theMap.removeLayer(poly_HEI);
    }
  },
  rizomm : {
    add(){
      poly_RIZOMM = L.polygon([
        [50.6328683, 3.0452476],
        [50.6328683, 3.0452476],
        [50.6328830, 3.0453625],
        [50.6329386, 3.0454207],
        [50.6329728, 3.0453830],
        [50.6330228, 3.0454283],
        [50.6330832, 3.0453629],
        [50.6332853, 3.0455762],
        [50.6333657, 3.0453881],
        [50.6333529, 3.0453747],
        [50.6333687, 3.0453365],
        [50.6334517, 3.0451441],
        [50.6333228, 3.0450045],
        [50.6334142, 3.0449001],
        [50.6335117, 3.0450022],
        [50.6335766, 3.0448503],
        [50.6334196, 3.0446810],
        [50.6333880, 3.0446805],
        [50.6328683, 3.0452476]
      ],{
        color:'black',
        fillColor:'#00b9ff',
        fillOpacity:0.7
      }).addTo(theMap);
    },
    remove (){
      theMap.removeLayer(poly_RIZOMM);
    }
  },
  heiprepa : {
    add (){
      poly_HEIPREPA = L.polygon([
        [50.6282470, 3.0472815],
        [50.6282409, 3.0473286],
        [50.6283241, 3.0475512],
        [50.6288319, 3.0470006],
        [50.6287381, 3.0468101],
        [50.6287078, 3.0467995],
        [50.6282470, 3.0472815]

      ],{
        color:'black',
        fillColor:'black',
        fillOpacity:0.7
      }).addTo(theMap);
    },
    remove (){
      theMap.removeLayer(poly_HEIPREPA);
    }
  },
  yncrea : {
    add (){
      poly_yncrea = L.polygon([
        [50.6340037, 3.0458948],
        [50.6342243, 3.0461505],
        [50.6342028, 3.0462018],
        [50.6341248, 3.0463873],
        [50.6339872, 3.0462335],
        [50.6338937, 3.0461290],
        [50.6340037, 3.0458948]
      ],{
        color:'black',
        fillColor:'#be8d2e',
        fillOpacity:0.7
      }).addTo(theMap);
    },
    remove(){
      theMap.removeLayer(poly_yncrea);
    }
  },
  yncreaCompta : {
    add (){
      poly_yncrea_compta = L.polygon([
        [50.63539, 3.04989],
        [50.63532, 3.05005],
        [50.63522, 3.04995],
        [50.63528, 3.04979],
      ],{
        color:'black',
        fillColor:'#ffa500',
        fillOpacity:0.7
      }).addTo(theMap);
    },
    remove(){
      theMap.removeLayer(poly_yncrea_compta);
    }
  },
  catho : {
    add (){
      poly_catho = L.polygon([
        [50.6329202, 3.0459497],
        [50.6330579, 3.0460899],
        [50.6331915, 3.0462259],
        [50.6331790, 3.0462635],
        [50.6331725, 3.0462593],
        [50.6331556, 3.0462621],
        [50.6330642, 3.0464810],
        [50.6330686, 3.0465045],
        [50.6330338, 3.0465845],
        [50.6330402, 3.0465897],
        [50.6330268, 3.0466218],
        [50.6329521, 3.0468005],
        [50.6329282, 3.0467746],
        [50.6329045, 3.0468426],
        [50.6330991, 3.0470432],
        [50.6331550, 3.0469095],
        [50.6331408, 3.0468950],
        [50.6331540, 3.0468626],
        [50.6331611, 3.0468688],
        [50.6332084, 3.0467584],
        [50.6332149, 3.0467666],
        [50.6332359, 3.0467160],
        [50.6332359, 3.0467160],
        [50.6332617, 3.0467408],
        [50.6332834, 3.0466922],
        [50.6332673, 3.0466767],
        [50.6333489, 3.0464801],
        [50.6333491, 3.0464373],
        [50.6333407, 3.0464300],
        [50.6333578, 3.0463925],
        [50.6334764, 3.0465176],
        [50.6332668, 3.0469774],
        [50.6333344, 3.0470539],
        [50.6336405, 3.0463998],
        [50.6336163, 3.0463753],
        [50.6335238, 3.0462818],
        [50.6335205, 3.0462899],
        [50.6334576, 3.0462261],
        [50.6327645, 3.0455223],
        [50.6327691, 3.0455126],
        [50.6326976, 3.0454387],
        [50.6325781, 3.0455705],
        [50.6325986, 3.0456197], //Début chapelle
        [50.6327784, 3.0458079],
        [50.6327448, 3.0458931],
        [50.6327332, 3.0458817],
        [50.6327115, 3.0459374],
        [50.6326941, 3.0459219],
        [50.6326348, 3.0460688],
        [50.6326516, 3.0460854],
        [50.6326299, 3.0461340],
        [50.6326350, 3.0461412],
        [50.6325120, 3.0464361],
        [50.6326589, 3.0465932],
        [50.6327826, 3.0462943],
        [50.6327891, 3.0462995],
        [50.6328101, 3.0462478],
        [50.6328249, 3.0462633],
        [50.6328861, 3.0461164],
        [50.6328713, 3.0461019],
        [50.6328937, 3.0460482],
        [50.6328846, 3.0460368],
        [50.6329202, 3.0459497],//fin chapelle

      ],{
        color:'black',
        fillColor:'#ff69b4',
        fillOpacity:0.7
      }).addTo(theMap);
    },
    remove(){
      theMap.removeLayer(poly_catho);
    }
  },
  cathobis : {
    add (){
      poly_cathobis = L.polygon([
        [50.6321362, 3.0457545],
        [50.6324495, 3.0454101],
        [50.6324403, 3.0453936],
        [50.6324274, 3.0453779],
        [50.6324176, 3.0453680],
        [50.6324057, 3.0453605],
        [50.6323912, 3.0453546],
        [50.6323762, 3.0453511],
        [50.6323591, 3.0453525],
        [50.6323160, 3.0452588],
        [50.6323296, 3.0452419],
        [50.6322144, 3.0449849],
        [50.6322390, 3.0449592],
        [50.6322712, 3.0450347],
        [50.6322916, 3.0450130],
        [50.6322583, 3.0449383],
        [50.6322729, 3.0449238],
        [50.6322340, 3.0448365],
        [50.6321905, 3.0447391],
        [50.6321331, 3.0448002],
        [50.6319923, 3.0444866],
        [50.6319370, 3.0445445],
        [50.6318719, 3.0443992],
        [50.6316840, 3.0446019],
        [50.6316865, 3.0446101],
        [50.6316620, 3.0446375],
        [50.6317096, 3.0447475],
        [50.6317352, 3.0447193],
        [50.6317424, 3.0447316],
        [50.6317366, 3.0447381],
        [50.6318600, 3.0450139],
        [50.6319294, 3.0449375],
        [50.6320590, 3.0452241],
        [50.6320856, 3.0451975],
        [50.6321107, 3.0452525],
        [50.6320917, 3.0452963],
        [50.6320988, 3.0453225],
        [50.6321106, 3.0453447],
        [50.6321250, 3.0453629],
        [50.6321379, 3.0453753],
        [50.6321524, 3.0453828],
        [50.6321705, 3.0453896],
        [50.6321809, 3.0453882],
        [50.6322007, 3.0453836],
        [50.6322042, 3.0454040],
        [50.6321958, 3.0454112],
        [50.6321875, 3.0454144],
        [50.6321704, 3.0454149],
        [50.6320764, 3.0455163],
        [50.6320897, 3.0455450],
        [50.6320589, 3.0455805],
        [50.6320748, 3.0456182],
        [50.6321362, 3.0457545]

      ],{
        color:'black',
        fillColor:'#ff69b4',
        fillOpacity:0.7
      }).addTo(theMap);
    },
    remove(){
      theMap.removeLayer(poly_cathobis);
    }
  }
}
