import { addSkill, makeStudentActive } from "./01_function";
import { StudentType } from "./01_object"


let student: StudentType;

beforeEach( () => {
    student = {
        id: 1,
        name: "Pavel",
        age: 40,
        isActive: false,
        address: {
            streetTitle: "Lenins",
            city: {
                title: "Krasnodar",
                countryTitle: "Russian"
            }
    
        },
        tehnologies: [
            {
                id: 1,
                title: "html"
            },
            {
                id: 2,
                title: "css"
            },
            {
                id: 3,
                title: "js"
            }
        ]
    }
})

test.skip("новый скил должен быть добавлен", () =>{

    expect(student.tehnologies.length).toBe(3);

    addSkill(student, "JS")

    expect(student.tehnologies.length).toBe(4);
    expect(student.tehnologies[3].title).toBe("JS");
    expect(student.tehnologies[3].id).toBeDefined;

})

test("студент должен быть активным", () =>{

    expect(student.isActive).toBe(false);

    makeStudentActive(student)

    expect(student.isActive).toBe(true);
    

})