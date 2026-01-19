import { IHero } from "./ihero";

export interface IApi {
    characters: IHero[],
    page: number,
    size: number;
}
