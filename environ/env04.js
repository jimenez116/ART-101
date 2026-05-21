function changeEnvironment(worldType) {

    if (worldType == "forest") {

        $("body").css("background-color", "darkgreen");

        $("#environment-text").html("The forest feels calm and alive.");

        $("#tree").show();

        $("#portal").hide();

    }

    else {

        $("body").css("background-color", "darkslateblue");

        $("#environment-text").html("The portal glows with strange energy.");

        $("#portal").show();

    }

}

$("#change-world").click(function () {

    let answer = prompt("Type forest or portal");

    changeEnvironment(answer);

});