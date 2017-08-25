import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {
    constructor() {}

    calculate(a: number, b: number): number {
        return a * b;
    }
}
