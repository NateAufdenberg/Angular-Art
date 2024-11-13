import { Injectable } from '@angular/core';

import { ART_GAVA } from '../../artID.module';

@Injectable({
    providedIn: 'root'
})

export class ArtService {
    get art() {
        return ART_GAVA;
    }
}