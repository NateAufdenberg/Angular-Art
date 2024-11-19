import { Component, computed, inject, input } from '@angular/core';

import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router, RouterLink, RouterOutlet, RouterState, RouterStateSnapshot } from '@angular/router';
import { ArtService } from '../arts/art.service';
import  { type Art } from '../arts/art.model';
import { CommonModule } from '@angular/common';
import { provideRouter, withComponentInputBinding } from '@angular/router';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [CommonModule],
  // providers:[
  //   provideRouter(appRoutes, withComponentInputBinding()),
  // ],
  templateUrl: './art.component.html',
  styleUrl: './art.component.css'
})
export class ArtComponent {
  phillerBoy: string = '';
  
}

export const resolveArtName: ResolveFn<string> = (
 activatedRoute: ActivatedRouteSnapshot,
 routerState: RouterStateSnapshot
) => {
  const artService = inject(ArtService);
  const artName =
  artService.art.find(
    (a) => a.id === activatedRoute.paramMap.get('artId')
  )?.titleArt || '';
  return artName
  
}