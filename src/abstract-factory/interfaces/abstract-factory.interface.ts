import { AbstractProductA } from "../../abstract-product/interfaces/abstract-product-a.interface";
import { AbstractProductB } from "../../abstract-product/interfaces/abstract-product-b.interface";

export interface AbstractFactory {
    createProductA(): AbstractProductA;

    createProductB(): AbstractProductB;
}