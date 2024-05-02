import { AbstractProductA } from "./abstract-product-a.interface";

export interface AbstractProductB {
    usefulFunctionB(): string;

    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}