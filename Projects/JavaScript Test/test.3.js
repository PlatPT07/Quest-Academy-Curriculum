

function Score(num) {
    if(num > 100 || num < 0) {
        return "ERROR";
    } else if(num > 80) {
        return "A";
    } else if(num > 60) {
        return "B";
    } else if(num > 40) {
        return "C";
    } else if(num > 20) {
        return "D";
    } return "F";
}


console.log(Score(-5));