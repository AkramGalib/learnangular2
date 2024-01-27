import { RouterLink } from '@angular/router';
import { FruitsComponent } from '../fruits/fruits.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-appheader',
  standalone: true,
  imports: [CommonModule, RouterLink, AppheaderComponent, FruitsComponent],
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent {

}