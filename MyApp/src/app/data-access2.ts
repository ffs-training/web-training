import { getResource } from './resource';

export class DataAccess2 {
    constructor() {
    }

    public getData(): Array<number> {
        return getResource();
    }

    public getSum(): number {
        let arr: Array<number> = this.getData();
        let sum: number = 0;
        for (let i: number = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    public getTwice(): Array<number> {
        let arr: Array<number> = this.getData();
        let twiceArr: Array<number> = [];
        for (let i: number = 0; i < arr.length; i++) {
            twiceArr.push(arr[i] * 2);
        }
        return twiceArr;
    }

    public getFind(value: number): number | undefined {
        let arr: Array<number> = this.getData();
        let findValue: number | undefined;
        for (let i: number = 0; i < arr.length; i++) {
            if (arr[i] === value) {
                findValue = arr[i];
            }
        }
        return findValue;
    }
}