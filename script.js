function getRandomNumber(size){
    let num = Math.floor(Math.random() * size);
    return num;
}

function getDistance(event, target){
    const xDistance = event.offsetX - target.x;
    const yDistance = event.offsetY - target.y;
    let distance = Math.sqrt((xDistance * xDistance)+(yDistance * yDistance));
    return distance;
}

function getDistanceHint(distance){
    if (distance < 10){
        return "Гориш"
    } else if (distance < 20){
        return "Вода кипит"
    } else if (distance < 50){
        return "В Африке"
    } else if (distance < 100){
        return "На пути в Африку"
    } else if (distance < 200){
        return "На пути на Северный полюс"
    } else {
        return "Прибыл на полюс???"
    }

}

const width = 450;
const height = 400;
let click = 0;

const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

const mapElement = document.getElementById("map");

mapElement.addEventListener("click", (event) => {
    click++;
    console.log(click);
    const distance = getDistance(event, target);
    const distanceHint = getDistanceHint(distance);

    if (distance < 8) {
        alert("Да ты попал")
    }

    const distanceElement = document.getElementById("distance");
    distanceElement.textContent = distanceHint;
});