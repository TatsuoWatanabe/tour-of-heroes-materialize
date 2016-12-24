export class Hero {

  public static comeOn(params: { id: number; name: string; }) {
    return new Hero(params.id, params.name);
  }

  constructor(public id: number, public name: string) {
  }

}
