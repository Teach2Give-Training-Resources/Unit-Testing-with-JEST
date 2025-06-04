import { getRandomNumber } from "./BasicUtils";

export class Generator {
    generateRandomNumbers(num: number) {
        const numbers: number[] = [];
        for (let i = 0; i < num; i++) {
            numbers.push(getRandomNumber());
        }
        return numbers;
    }
}