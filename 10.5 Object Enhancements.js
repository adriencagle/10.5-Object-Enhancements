function createInstructor(first, last){
    return{ 
        first, 
        last
    }
}

let favNum = 42;
let instructor = {
    firstName: "colt",
    [favNum]: "Favorite Number!" 
}


let instructor = {
    firstName: "colt",
    sayHi(){
        return "hi";
    },
    sayBye(){
        return this.firstName +"bye";
    }
}

let newAnimal = {
    createAnimal(spec, verb, sound){
        return {spec, [verb](){
            return sound}}
    }
}