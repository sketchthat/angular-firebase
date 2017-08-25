import { SampleService } from './services/sample.service';
export { SampleService } from './services/sample.service';
export declare class FirebaseExampleModule {
    static forRoot(): {
        ngModule: typeof FirebaseExampleModule;
        providers: typeof SampleService[];
    };
}
