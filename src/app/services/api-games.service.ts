import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiGamesService {

  constructor() { }

  getGames(){
    return [
      {
        urlImage: "../../../assets/images/image-7.jpg",
        name: "Valorant",
        ad: 12,
      },
      {
        urlImage: "../../../assets/images/image-1.png",
        name: "League of Legends",
        ad: 8,
      },
      {
        urlImage: "../../../assets/images/image-2.png",
        name: "Dota",
        ad: 6,
      },
      {
        urlImage: "../../../assets/images/image-3.png",
        name: "Counter-Strike Global Offensive",
        ad: 4,
      },
      {
        urlImage: "../../../assets/images/image-4.png",
        name: "Apex",
        ad: 3,
      },
      {
        urlImage: "../../../assets/images/image-5.png",
        name: "Fortnite",
        ad: 2,
      },
      {
        urlImage: "../../../assets/images/image-6.png",
        name: "World of Warcraft",
        ad: 7,
      },
    ]
  }

}
