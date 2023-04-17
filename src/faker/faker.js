import names from "./data/names.js";
import patronymics from "./data/patronymics.js";
import surnames from "./data/surnames.js";
import addresses from "./data/addresses.js";
import randomNumber from "../code/random-number.js";

export default class Faker {
    constructor(sex = 'men') {
        this.#names = names;
        this.#surnames = surnames;
        this.#patronymics = patronymics;
        this.#sex = sex;
        this.#addresses = addresses;
    }

    get randomName() {
        const countElements = this.#names[this.#sex].length;
        return this.#names[this.#sex][randomNumber(0, countElements - 1)];
    }

    get randomSurname() {
        const countElements = this.#surnames[this.#sex].length;
        return this.#surnames[this.#sex][randomNumber(0, countElements - 1)];
    }

    get randomPatronymic() {
        const countElements = this.#patronymics[this.#sex].length;
        return this.#patronymics[this.#sex][randomNumber(0, countElements - 1)];
    }

    get randomPhoneNumber() {
        const operatorCode = this.getRandomOperatorCode().toString();
        const numberPhonePart1 = randomNumber(1, 999).toString().padStart(3, '0');
        const numberPhonePart2 = randomNumber(1, 99).toString().padStart(2, '0');
        const numberPhonePart3 = randomNumber(1, 99).toString().padStart(2, '0');

        return `+7 (${operatorCode}) ${numberPhonePart1}-${numberPhonePart2}-${numberPhonePart3}`
    }

    get randomAddress() {
        return this.#addresses[randomNumber(0, this.#addresses.length - 1)]
    }

    #names = null;
    #surnames = null;
    #patronymics = null;
    #addresses = null;
    #sex = '';

    getRandomOperatorCode() {
        return randomNumber(900, 999);
    }
}
