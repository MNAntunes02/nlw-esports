import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LolEloService {

  constructor() { }

  getElos(){
    return [
      {
        id: 0,
        name: 'Unranked',
        urlImage: './assets/base-icons/elo-lol-0.png'
      },
      {
        id: 1,
        name: 'Bronze',
        urlImage: './assets/base-icons/elo-lol-1.png'
      },
      {
        id: 2,
        name: 'Prata',
        urlImage: './assets/base-icons/elo-lol-2.png'
      },
      {
        id: 3,
        name: 'Ouro',
        urlImage: './assets/base-icons/elo-lol-3.png'
      },
      {
        id: 4,
        name: 'Platina',
        urlImage: './assets/base-icons/elo-lol-4.png'
      },
      {
        id: 5,
        name: 'Diamante',
        urlImage: './assets/base-icons/elo-lol-5.png'
      },
      {
        id: 6,
        name: 'Mestre',
        urlImage: './assets/base-icons/elo-lol-6.png'
      },
      {
        id: 7,
        name: 'Desafiante',
        urlImage: './assets/base-icons/elo-lol-7.png'
      }
    ]
  }
}
