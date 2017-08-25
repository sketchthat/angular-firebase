import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SampleService } from './services/sample.service';
export { SampleService } from './services/sample.service';

@NgModule({
    declarations: [

    ],
    exports: [

    ],
    imports: [
        CommonModule
    ]
})
export class FirebaseExampleModule {
    static forRoot() {
        return {
            ngModule: FirebaseExampleModule,
            providers: [SampleService]
        };
    }
}
