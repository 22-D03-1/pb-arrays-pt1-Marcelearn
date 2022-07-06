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