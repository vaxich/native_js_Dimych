

test("отобрать стариков" , () => {
    const ages = [5, 23, 36, 89, 91, 100];

    const oldAges = ages.filter( (age) => age > 90)

    expect(oldAges.length).toBe(2)
    expect(oldAges[0]).toBe(91)
})

test("отобрать дешёвые курсы" , () => {
    const  courses = [
        {title: "css", price: 110},
        {title: "js", price: 200},
        {title: "react", price: 150},
    ]

    const chipCourse = courses.filter( (course) => course.price < 160)

    expect(chipCourse.length).toBe(2)
    expect(chipCourse[0].price).toBe(110)
})