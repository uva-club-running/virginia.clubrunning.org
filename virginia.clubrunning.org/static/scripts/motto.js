mottos = [
    "If you wanna run hard, you gotta run hard",
    "The fastest social club on grounds",
    "The pain in our legs masks the inevitable suffering of the human experience",
    "Violating every conventional dress code standard since 2007"
];

$(document).ready(function() {
    document.getElementById("motto").innerHTML = mottos[Math.floor(Math.random() * (4))];
});