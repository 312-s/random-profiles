import Faker from "../faker/faker.js";

export default class UserProfile {
    #nameParts;
    #phone;
    #address;

    constructor(nameParts, numberPhone, address) {
        this.#nameParts = nameParts;
        this.#phone = numberPhone;
        this.#address = address;
    }

    get name() {
        return this.#nameParts.name;
    }

    get surname() {
        return this.#nameParts.surname;
    }

    get patronymic() {
        return this.#nameParts.patronymic;
    }

    get fullName() {
        return `${this.#nameParts.surname} ${this.#nameParts.name} ${this.#nameParts.patronymic}`;
    }

    get phone() {
        return this.#phone;
    }

    get address() {
        return this.#address;
    }

    static get generateUserProfile() {
        const faker = new Faker();
        const nameParts = {
            surname: faker.randomSurname,
            name: faker.randomName ,
            patronymic: faker.randomPatronymic
        };
        const numberPhone = faker.randomPhoneNumber;
        const address = faker.randomAddress;

        return new UserProfile(nameParts, numberPhone, address);
    }
}
