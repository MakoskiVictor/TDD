import { expect, describe, it } from "vitest";

const listGifts = (letter) => {
    if(typeof letter !== "string") throw new Error("Argument should be a string"); 
    const  letterArray = letter.split(" ");
    let letterObject = {}
    for(let i = 0; i < letterArray.length; i++) {
        letterObject.letterArray[i] = 1;
        /* if(Object.hasOwn(letterObject, letterArray[i])) {
            
            letterObject.letterArray[i] = letterObject.letterArray[i] + 1;
        }
        letterObject.letterArray[i] = 1; */
    }
    return letterObject;
}


describe("listGifts", () => {
    it("Should be a function", () => {
        expect(typeof listGifts).toBe("function");
    })
    it("Should throw an error if argument is not a string", () => {
        expect(() => listGifts(1)).toThrow(/string/)
        expect(() => listGifts([])).toThrow(/string/)
        expect(() => listGifts({})).toThrow(/string/)
        expect(() => listGifts(true)).toThrow(/string/)
        expect(() => listGifts(undefined)).toThrow(/string/)
    })
    it("Should return an object", () => {
        expect(listGifts("")).toStrictEqual({})
    })
    it("Should return an object with every word as a key and the times repeated as a value", ()=>{
        expect(listGifts("bici coche balón")).toStrictEqual({bici: 1, coche: 1, balón: 1})
       /*  expect(listGifts("bici coche balón bici")).toStrictEqual({bici: 2, coche: 1, balón: 1}) */
    })
})