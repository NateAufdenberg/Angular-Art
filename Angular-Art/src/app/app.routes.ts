import { Routes, } from '@angular/router';
import { PortraitComponent } from '../portrait/portrait.component';
import { ArtComponent } from './art/art.component';



export const routes: Routes = [
    { path: 'app-art', component: ArtComponent},
    { path: 'app-portrait', component: PortraitComponent}
];
