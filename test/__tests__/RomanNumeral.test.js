let RomanNumeral;

describe('Roman Numeral Calculator',()=>{
    beforeEach(() => {
        RomanNumeral = require('../../RomanNumeral')
    });

    it('should convert decimal 1 to roman numeral I', function () {
        expect(RomanNumeral.convert(1)).toEqual("I");
        expect(RomanNumeral.convert(2)).toEqual("II");
        expect(RomanNumeral.convert(3)).toEqual("III");
    });

    it('should convert 4 to IV', function () {
        expect(RomanNumeral.convert(4)).toEqual("IV");
    });

    it('should convert 5 to V', function () {
        expect(RomanNumeral.convert(5)).toEqual("V");
    });

    it('should convert 6 to IV', function () {
        expect(RomanNumeral.convert(6)).toEqual("VI");
    });

    it('should convert 7 to VII', function () {
        expect(RomanNumeral.convert(7)).toEqual("VII");
    });

    it('should convert 8 to VIII', function () {
        expect(RomanNumeral.convert(8)).toEqual("VIII");
    });

    it('should convert 9 to IX', function () {
        expect(RomanNumeral.convert(9)).toEqual("IX");
    });

    it('should convert 10 to X', function () {
        expect(RomanNumeral.convert(10)).toEqual("X");
    });

    it('should convert other cases', function () {
        expect(RomanNumeral.convert(11)).toEqual("XI");
        expect(RomanNumeral.convert(21)).toEqual("XXI");
        expect(RomanNumeral.convert(30)).toEqual("XXX");
        expect(RomanNumeral.convert(40)).toEqual("XL");
        expect(RomanNumeral.convert(50)).toEqual("L");
        expect(RomanNumeral.convert(90)).toEqual("XC");
        expect(RomanNumeral.convert(100)).toEqual("C");
        expect(RomanNumeral.convert(102)).toEqual("CII");
        expect(RomanNumeral.convert(400)).toEqual("CD");
        expect(RomanNumeral.convert(500)).toEqual("D");
        expect(RomanNumeral.convert(600)).toEqual("DC");
        expect(RomanNumeral.convert(900)).toEqual("CM");
        expect(RomanNumeral.convert(1000)).toEqual("M");
        expect(RomanNumeral.convert(1900)).toEqual("MCM");
        expect(RomanNumeral.convert(4000)).toEqual("MMMM");
        expect(RomanNumeral.convert(5000)).toEqual("V");
    });
})
