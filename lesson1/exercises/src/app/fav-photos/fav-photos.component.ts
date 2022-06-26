import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = '../assets/top-gun.jpg';
  image2 = '../assets/braveHeart.jpg';
  image3 = '../assets/the-ring.jpg';

  constructor() { }

  ngOnInit() {
  }

}