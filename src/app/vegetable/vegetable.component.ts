import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetable',
  standalone: true,
  imports: [],
  templateUrl: './vegetable.component.html',
  styleUrl: './vegetable.component.css'
})
export class VegetableComponent {

  customlist2=[
    { name: "Capcicum", Price: "10", imgurl: "../../assets/image/vegetable/capcicum.jpg"},
    { name: "Chili", Price: "15", imgurl: "../../assets/image/vegetable/chili.jpg"},
    { name: "Carrot", Price: "20", imgurl: "../../assets/image/vegetable/carrot.jpg"},
    { name: "Pea", Price: "35", imgurl: "../../assets/image/vegetable/pea.jpg"},
];
imgurl: any;

}
