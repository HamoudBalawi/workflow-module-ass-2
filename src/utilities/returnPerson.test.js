import { returnPerson } from "./returnPerson"

const person = {name: "mohammed", age:34}

test("test return person", function(){
    expect(returnPerson(person.name, person.age)).toEqual(person)
})
