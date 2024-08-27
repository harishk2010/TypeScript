let User: [string, number, boolean];

// User=[true,"harish",3]    /// wont work if not in proper order ///
/// tuple is all about restricting the 'number' and 'order' of the data

let rgb: [number, number, number] = [255, 122, 555];

//or

type User =[number,string]

const newUser:User=[112,"email.com"]

newUser[1]="changed.com" // possible
// newUser.push(true)   // based on the version you may or maynot push data like boolean 

export {}