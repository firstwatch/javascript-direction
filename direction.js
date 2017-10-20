var directionArray = [{gt: 315, lt: 45, direction: "N"},
{gt: 45, lt: 135, direction: "E" },
{gt: 135, lt: 225, direction: "S" },
{gt: 225, lt: 315, direction: "W" },
]

function getDirection(current, index, arr) {
    var value = this % 360;
    value = value < 0 ? 360 + value : value;
    if (current.gt > current.lt) {
        return (value > current.gt && value <= 360) || (value >= 0 && value <= current.lt);
    }
    return value > current.gt && value <= current.lt;
}

function computeDirection() {
    var value = document.getElementById("angle").value;
    if (!value) return;
    var angle = parseFloat(value);
    var directionInstance = directionArray.find(getDirection, angle);
    var directionElement = document.getElementById("direction");
    if (!directionInstance) {
        directionElement.innerText = "Something broke!";
    } else {
        directionElement.innerText = "Your direction is: " + directionInstance.direction;
    }
}

function test(value, expected) {
    results.total++;
    var directionElement = directionArray.find(getDirection, value);
    if (!directionElement) {
        results.bad++;
        console.log("Did not return valid element for value of " + value);
        return;
    }
    var result = directionElement.direction;
    if (result != expected) {
        results.bad++;
        console.log("Expected " + expected + ", but was " + result);
        return;
    }
}

var results = {
    total: 0,
    bad: 0
}

test(25, "N");
test(45, "N")
test(123, "E");
test(219, "S");
test(310, "W");
test(720, "N");
test(-719, "N")
console.log("Of " + results.total + " tests, " + results.bad + " failed, "
+ (results.total - results.bad) + " passed.");
