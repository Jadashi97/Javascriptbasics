
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
