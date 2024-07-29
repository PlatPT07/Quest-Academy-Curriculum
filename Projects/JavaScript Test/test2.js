

function pyramid() {
    for (var i = 0; i <= 3; i++) {
        var row = "";
        for (var j = 0; j <= i; j++) {
            row += j
        }
        console.log(row);
    }
}

pyramid();

