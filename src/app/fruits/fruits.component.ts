import { Component } from '@angular/core';
import { SlideshowComponent } from "../slideshow/slideshow.component";
import { NgOptimizedImage } from '@angular/common';
@Component({
    selector: 'app-fruits',
    standalone: true,
    templateUrl: './fruits.component.html',
    styleUrl: './fruits.component.css',
    imports: [SlideshowComponent]
})
export class FruitsComponent {
    customlist=[
        { name: "Apple", Price: "10", imgurl: "../../assets/image/fruit/apple.png"},
        { name: "Banana", Price: "15", imgurl: "../../assets/image/fruit/banana.jpg"},
        { name: "Orange", Price: "20", imgurl: "../../assets/image/fruit/orange.jpg"},
        { name: "Mango", Price: "25", imgurl: "../../assets/image/fruit/mango.jpg"}, 
        { name: "Watermelon", Price: "30", imgurl: "../../assets/image/fruit/water malon.jpg"}, 
        { name: "Grape", Price: "35", imgurl: "../../assets/image/fruit/grape.jpg"},
        { name: "Strawberry", Price: "45", imgurl: "../../assets/image/fruit/strawberry.jpg"},
        { name: "Guava", Price: "60", imgurl: "../../assets/image/fruit/guava.jpg"},
        { name: "Raspberry", Price: "60", imgurl: "../../assets/image/fruit/raspberry.jpg"},

        { name: "Apricot", Price: "60", imgurl: "../../assets/image/fruit/apricot.jpg"},
    ];
imgurl: any;

}
