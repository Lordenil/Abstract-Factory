import { ConcreteProductA2 } from "../abstract-product/concrete-product-a2.class";
import { ConcreteProductB2 } from "../abstract-product/concrete-product-b2.class";
import { AbstractProductA } from "../abstract-product/interfaces/abstract-product-a.interface";
import { AbstractProductB } from "../abstract-product/interfaces/abstract-product-b.interface";
import { AbstractFactory } from "./interfaces/abstract-factory.interface";

export class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}