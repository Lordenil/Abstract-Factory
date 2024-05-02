import { ConcreteFactory1 } from "./abstract-factory/concrete-factory-1.class";
import { ConcreteFactory2 } from "./abstract-factory/concrete-factory-2.class";
import { AbstractFactory } from "./abstract-factory/interfaces/abstract-factory.interface";

function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());

