

test("" , () => {

    let props={
        name: "pavel",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        adress: {
            street: {
                title: "Lenina"
            }
        }
    }

    //let age = props.age;
    //let lessons = props.lessons;
    const {age, lessons} = props // эквивалентно предыдущим двум строчкам.. ищем свойства age и lessons в объекте props и присваиваем их


    expect(age).tobe(32);
    expect(lessons.length).toBe(2)
})