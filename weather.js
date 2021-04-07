var weather = require('weather-js');
 
// Options:
// search:     location name or zipcode
// degreeType: F or C
 
weather.find({search: 'Lyon, France', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);

  let nom = result[0].location.name;
  let temp = result[0].current.temperature;
  let sky = result[0].current.skytext;

  console.log(JSON.stringify('Ville : '+ nom, null, 2));
  console.log(JSON.stringify('Temperature : '+ temp, null, 2));
  console.log(JSON.stringify('Ciel : '+ sky, null, 2));
});