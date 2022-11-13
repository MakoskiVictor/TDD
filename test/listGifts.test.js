import { expect, describe, it } from "vitest";

const listGifts = (letter) => {
    if(typeof letter !== "string") throw new Error("Argument should be a string"); 
    const  letterArray = letter.split(" ").sort();
    let letterObject = {}
    letterArray.map((el) => letterObject[el] = letterObject[el] + 1 || 1)
        

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
    /* it("Should return an object", () => {
        expect(listGifts("")).toStrictEqual({})
    }) */
    it("Should return an object with every word as a key and the times repeated as a value", ()=>{
        expect(listGifts("bici coche balón")).toStrictEqual({bici: 1, coche: 1, balón: 1})
    })
    it("The value should be equal to the number that the value es expressed", () => {
        expect(listGifts("bici bici coche balón")).toStrictEqual({balón: 1, bici: 2, coche: 1})
        expect(listGifts("bici coche balón coche coche")).toStrictEqual({bici: 1, coche: 3, balón: 1})
    })
    it("Should ignore the values with the character `_`"), () => {
        expect(listGifts("bici bici _coche coche balón")).toStrictEqual({bici: 2, coche: 1, balón: 1})
        expect(listGifts("bici coche balón _playstation bici coche peluche")).toEqual({bici: 2, coche: 2, balón: 1, peluche: 1})
        expect(listGifts("bici bici _coche coche coche _coche balón")).toStrictEqual({bici: 2, coche: 2, balón: 1})
        expect(listGifts("bici bici _coche coche coche _coche balón")).not.toStrictEqual({_coche: 2, bici: 2, coche: 2, balón: 1})
    }
})