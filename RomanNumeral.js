exports.convert = function (number) {
    let response = "";
    let num = number;

    function numeralLookup() {
        let lookup = new Map();
        lookup.set(5000, "V");
        lookup.set(1000, "M");
        lookup.set(900, "CM");
        lookup.set(500, "D");
        lookup.set(400, "CD");
        lookup.set(100, "C");
        lookup.set(90, "XC");
        lookup.set(50, "L");
        lookup.set(40, "XL");
        lookup.set(10, "X");
        lookup.set(9, "IX");
        lookup.set(5, "V");
        lookup.set(4, "IV");
        lookup.set(1, "I");
        return lookup;
    }

    let lookup = numeralLookup();

    for (let [key, value] of lookup) {
        while (num >= key) {
            response += value;
            num -= key;
        }
    }

    return response;
}
