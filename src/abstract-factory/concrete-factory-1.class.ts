import { ConcreteProductA1 } from "../abstract-product/concrete-product-a1.class";
import { ConcreteProductB1 } from "../abstract-product/concrete-product-b1.class";
import { AbstractProductA } from "../abstract-product/interfaces/abstract-product-a.interface";
import { AbstractProductB } from "../abstract-product/interfaces/abstract-product-b.interface";
import { AbstractFactory } from "./interfaces/abstract-factory.interface";

export class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}