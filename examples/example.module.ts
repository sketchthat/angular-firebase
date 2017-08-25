import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { FirebaseExampleModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        FirebaseExampleModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
