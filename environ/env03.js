let environmentTitle = "The Unusual Forest";

let environmentElements = ["windy", "messy grass", "old tree", "quiet air"];

let mainEntity = {
 name: "The Tree",
 type: "memory object",
 mood: "waiting",
 isAlive: true,
 favoriteElement: environmentElements[2]
};

$("#show-title").click(function () {

 $("#environment-output").html(environmentTitle);

});

$("#show-elements").click(function () {

 let list =
   environmentElements[0] + ", " +
   environmentElements[1] + ", " +
   environmentElements[2] + ", " +
   environmentElements[3];

 $("#environment-output").html(list);

});

$("#show-entity").click(function () {

 let message =
   "<p>Name: " + mainEntity.name + "</p>" +
   "<p>Type: " + mainEntity.type + "</p>" +
   "<p>Mood: " + mainEntity.mood + "</p>" +
   "<p>Favorite element: " + mainEntity.favoriteElement + "</p>";

 $("#environment-output").html(message);

});




