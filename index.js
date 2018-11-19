//findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
function findMatching(drivers, string) {
 return drivers.filter(function(name) {
   return name.toUpperCase() === string.toUpperCase()
 });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(name) {
    return name.substring(0, string.length) === string;
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });

}
