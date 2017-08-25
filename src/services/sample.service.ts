import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class SampleService {
    constructor(
        private db: AngularFireDatabase,
        private auth: AngularFireAuth,
    ) {}

    calculate(a: number, b: number): number {
        return a * b;
    }
}
