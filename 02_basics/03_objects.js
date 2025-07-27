// singleton
//object.create

//object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Ajwa",
    "full name": "Ajwa Khan",
    [mySym]: "mykey1",
    age: 20,
    location: "Peshawar",
    email: "ajwa@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])

Jsuser.email = "ajwa@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "ajwa@microsoft.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log('Hello JS user, $(this.name)');
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());