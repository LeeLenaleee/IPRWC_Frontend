export class ItemModel {
  id: number;
  prijs: number;
  naamAlbum: string;
  producent: string;
  zanger: string;
  lengte: number;
  cover: string;


  constructor(id: number, prijs: number, naamAlbum: string, producent: string, zanger: string, lengte: number, cover: string) {
    this.id = id;
    this.prijs = prijs;
    this.naamAlbum = naamAlbum;
    this.producent = producent;
    this.zanger = zanger;
    this.lengte = lengte;
    this.cover = cover;
  }
}
