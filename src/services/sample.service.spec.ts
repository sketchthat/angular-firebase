/* tslint:disable:no-unused-vars */
import {
    getTestBed,
    TestBed
} from '@angular/core/testing';

import { SampleService } from './sample.service';

describe('SampleService', () => {
    let service: SampleService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SampleService]
        });
        service = getTestBed().get(SampleService);
    });

    it('', () => {
        expect(service).toBeTruthy();
    });

    it('should test calculate', () => {
        const result = service.calculate(5, 10);

        expect(result).toEqual(50);
    });
});
