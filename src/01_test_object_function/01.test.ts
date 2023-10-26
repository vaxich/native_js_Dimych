// тесты

import { mult, splitIntoWord, sum } from "./01";



test.skip("сумма должна быть корректной" , () => {
    // data
    const a=1;
    const b=2;
    const c=3;

    // action
    const result = sum(a , b);
    const result2 = sum(b , c);

    // expect result
    expect(result).toBe(3);
    expect(result2).toBe(5);
})

test.skip("умножение должно быть корректным" , () => {
    // data
    const a=1;
    const b=2;
    const c=3;

    // action
    const result = mult(a , b);
    const result2 = mult(b , c);

    // expect result
    expect(result).toBe(2);
    expect(result2).toBe(6);
})

test.skip("сплитинг должно быть корректным" , () => {
    // data
    const sent1="hello my friends";
    const sent2="JS - programming language";
    
    

    // action
    const result1 = splitIntoWord(sent1);
   
    const result2 = splitIntoWord(sent2);

    // expect result
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friends");

    expect(result2.length).toBe(4);
    expect(result2[0]).toBe("JS");
    expect(result2[1]).toBe("-");
    expect(result2[2]).toBe("programming");
    expect(result2[3]).toBe("language");

})