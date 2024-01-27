import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppheaderComponent } from "./appheader/appheader.component";
import { AppfooterComponent } from "./appfooter/appfooter.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AppheaderComponent, AppfooterComponent, RouterLink]
})
export class AppComponent {
  title = 'BAZAR.COM';
}
