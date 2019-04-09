import {Genre} from './genre';

export class Game {
  name: string;
  shortDescription: string;
  longDescription: string;
  genre: Genre[];
  image: string;
  newPrice: number;
  oldPrice: number;
  bestGame: boolean;
}
