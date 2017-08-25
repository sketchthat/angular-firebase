import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
export declare class SampleService {
    private db;
    private auth;
    constructor(db: AngularFireDatabase, auth: AngularFireAuth);
    calculate(a: number, b: number): number;
}
