import { Component } from '@angular/core';
import { SlideshowComponent } from "../slideshow/slideshow.component";
import { RouterLink } from '@angular/router';
import { Slideshow1Component } from "../slideshow1/slideshow1.component";

@Component({
    selector: 'app-apphome',
    standalone: true,
    templateUrl: './apphome.component.html',
    styleUrl: './apphome.component.css',
    imports: [SlideshowComponent, RouterLink, Slideshow1Component]
})
export class ApphomeComponent {

}
