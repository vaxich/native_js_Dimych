

test("мапинг", () => {
    const people = [
        {name: "andrey ivanov" , age: 33},
        {name: "dima petrov" , age: 45},
        {name: "pavel dedelyuk" , age: 28}
    ]

    let devs = people.map( chel => ({
        stack: ["css" , "js" , "react"],
        firstName: chel.name.split(" ")[0],
        lastName: chel.name.split(" ")[1],
    }) );

    console.log(devs);

    expect(devs.length).toBe(3),
      expect(devs.firstName[2]).tobe("pavel"),
      expect(devs.lastName[1]).tobe("petrov")
    
})