let count = 0;

let buttonCreature = {
    name: "Needy Button",
    species: "interface creature",
    favoriteFood: "clicks",
    moods: ["sleepy", "nervous", "glowing", "dramatic", "hopeful", "confused"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count -1;

    let currentMood = buttonCreature.moods[arrayPosition];

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

    let message = "<p>You clocked me " + count + " times.</p>";

    message = message + "<p>My current mood is " + currentMood +".</p>";

    message = message + "<p>My name is " + buttonCreature.species + ".</p>";

    message = message + "<p>I am an " + buttonCreature.favoriteFood + ".</p>";

    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

});
