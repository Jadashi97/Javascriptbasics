
// these switch and case work work as if statement
function CaseInSwitch(val) {
    let answer = " "
    switch(val) {
        case 1:
        answer = "alpha";
        break;
        case 2:
        answer = "beta"
        break;
        case 3:
        answer = "gamma"
        break;
        case 4:
        answer = "delta"
    }
    return answer;
}
console.log(CaseInSwitch(4));


function switchStuff(val) {
    let answer = " ";
    switch(val) {
        case "a":
        answer =  "apple";
            break;
        case "b":
        answer =  "bird";
            break;
        case "c":
        answer =  "cat";
            break;

        default:
        answer =  "stuff";
            break;
    }
    return answer;
}
console.log(switchStuff("c"));

function dailyThings(val) {
    let answer = " ";
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "nahh it aint here";
            break;
    } return answer;
}
console.log(dailyThings("t"));

// multiple identical options in switch statements

function readPulse(val) {
    let answer = " "
    switch(val) {
        case 60-80 :
        case 80-120:
        case 120-160:
            answer = " low, mid, high";
            break;
        case 160-200:
            answer = " that is a faltline";
            break;
        
    } return answer;
}
console.log(readPulse(80-120));