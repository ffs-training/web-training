import { getResource } from './resource';

export class DataAccess {
    constructor() {
    }
    /**
     * getData
     */
    public getData(): Array<number> {
        return getResource();
    }

    public getSum(): number {
        return this.getData().reduce((p, v) => (p + v), 0);
    }

    public getTwice(): Array<number> {
        return this.getData().map((v) => (v * 2));
    }

    public getFind(value: number): number | undefined {
        return this.getData().find((v) => (v === value));
    }
}