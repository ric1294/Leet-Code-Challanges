var destCity = function(paths) {
    let destinaionCity;
    let departures = [];
    let destinations = [];
    for (let i = 0; i < paths.length; i++){
      departures.push(paths[i][0]);
      destinations.push(paths[i][1]);
   }

   destinationCity = destinations.filter(value => !departures.includes(value))
    
   return destinationCity[0];
   //console.log(destinations);
};