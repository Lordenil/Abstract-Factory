import { AbstractProductA } from "./interfaces/abstract-product-a.interface";
import { AbstractProductB } from "./interfaces/abstract-product-b.interface";

export class ConcreteProductB2 implements AbstractProductB {

    public usefulFunctionB(): string {
        return 'The result of the product B2.';
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B2 collaborating with the (${result})`;
    }
}