// функции

import { StudentType } from "./01_object";

export const sum =(a: number, b: number) => {
    return a + b;
}


export const addSkill =(student: StudentType, skill: string) => {
    student.tehnologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive =(student: StudentType) => {
    student.isActive = true
}