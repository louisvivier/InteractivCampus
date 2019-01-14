var Polygone = function(){
  var poly_urbawood = L.polygon([
           [50.6330912, 3.0232973],
           [50.6332685, 3.0237283],
           [50.6331245, 3.0238751],
           [50.6329517, 3.0234348]
        ],{
        color:'brown',
        fillColor:'brown',
        fillOpacity:0.7
      }).addTo(macarte);
    var poly_ISEN = L.polygon([
      [50.63427, 3.04880],
      [50.63385, 3.04962],
      [50.63334, 3.04894],
      [50.63373, 3.04821]
    ],{
      color:'red',
      fillColor:'red',
      fillOpacity:0.7
    }).addTo(macarte);
    var poly_ISA = L.polygon([
      [50.63408, 3.04659],
      [50.63404, 3.04677],
      [50.63401, 3.04674],
      [50.63380, 3.04718],
      [50.63368, 3.04704],
      [50.63363, 3.04715],
      [50.63359, 3.04711],
      [50.63373, 3.04682],
      [50.63363, 3.04670],
      [50.63389, 3.04613],
      [50.63398, 3.04623],
      [50.63391 ,3.04639]
    ],{
      color:'green',
      fillColor:'green',
      fillOpacity:0.7
    }).addTo(macarte);
    var poly_HEI = L.polygon([
      [50.63393, 3.04524],
      [50.63368, 3.04581],
      [50.63334, 3.04545],
      [50.63357, 3.04485]
    ],{
      color:'black',
      fillColor:'black',
      fillOpacity:0.7
    }).addTo(macarte);
    var poly_yncrea = L.polygon([
      [50.63359, 3.04711],
      [50.63373, 3.04682],
      [50.63363, 3.04670],
      [50.63350, 3.04701],
    ],{
      color:'brown',
      fillColor:'brown',
      fillOpacity:0.7
    }).addTo(macarte);
    var poly_yncrea_compta = L.polygon([
      [50.63539, 3.04989],
      [50.63532, 3.05005],
      [50.63522, 3.04995],
      [50.63528, 3.04979],
    ],{
      color:'brown',
      fillColor:'brown',
      fillOpacity:0.7
    }).addTo(macarte);
};
