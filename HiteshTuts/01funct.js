
// using the function key and incorporating the (switch/ case)
function userRole(name, role){
switch (role) {
    case 'Admin':
    return `${name} access permitted and you can change stuff.`;

    case "user":
    return `${name} please get permission first`;
    
    case "guest":
        return `${name} do you have a guest passs? `;
}
}
console.log(userRole("lokose", "guest"))

// incoorporate the function Expression

var userRole = function(name, role) {
    switch (role) {
        case 'Admin':
        return `${name} access permitted and you can change stuff.`;
    
        case "user":
        return `${name} please get permission first`;
        
        case "guest":
            return `${name} do you have a guest passs? `;
    }

}
console.log(userRole("lokose", "user"))
