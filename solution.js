// 1.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondCity = euroCities[1];
console.log(secondCity);

//2.
euroCities[0] = "Berlin";
console.log(euroCities);

//3.
console.log(euroCities.length);

//4.
euroCities.pop();
console.log(euroCities);

//5.
euroCities.push("Budapest");
console.log(euroCities);

//6.
const asianCities = ["Singapur", "Tokio","Yakarta", "Delhi", "Seul", "Pekin", "Shangai"]; 

//7. 
const worldCities = euroCities.concat(asianCities);
console.log(worldCities);

//8.
worldCities.reverse()
console.log(worldCities);

//9.
euroCities.splice(2, 1);
console.log(euroCities);

//10
console.log(asianCities);
asianCitiesSelected = asianCities.slice(1, 4);
console.log(asianCitiesSelected);

//11.
worldCities[2] = "Toronto";
console.log(worldCities);
// option2 worldCities.splice(2, 1, "Toronto");
//12.
worldCities.splice(1, 0, "Washington");
console.log(worldCities);

//13 
console.log (worldCities.join(", "))





