/** Interface */

interface Component {
    getDetail() : string;
}

/** Component */

class ProductComponent implements Component {
   
    protected name : string;

    constructor(name:string) {
        this.name = name;
    }

    public getDetail(): string {
        return `${this.name}`;
    }
}

/** Abstract class decorator */

abstract class ProductDecorator implements Component {
    protected component:Component;

    constructor(component: Component) {
        this.component = component;
    }

    public getDetail(): string {
        return this.component.getDetail();
    }
}

/** Decorator 1 */

class CommercialInfoProductDecorator extends ProductDecorator {

    private tradename: string;
    private brand: string;

    constructor(component:Component, tradename: string, brand:string) {
         super(component);

         this.tradename = tradename;
         this.brand = brand;
    }

    public getDetail(): string {
        return `${this.tradename} ${this.brand}` +
        super.getDetail();
    }

}

/** Decorator 1 */

const productComponent = new ProductComponent("Beer");
console.log(productComponent.getDetail());

/** Decorator with component */

const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "one", "corona ");
console.log(commercialInfoProduct.getDetail());

/** Decorator 2 */

class StoreProductDecorator extends ProductDecorator {
    private price: number;

    constructor(component: Component, price: number) {
        super(component);

        this.price = price;
    }

    getDetail(): string {
        return super.getDetail() + ` ${this.price}`;
    }
}

/** With two classes */

const storeProduct = new StoreProductDecorator(productComponent, 17.0);
console.log(storeProduct.getDetail());

/** With three classes */

const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 7.0);
console.log(storeProduct2.getDetail());

/** Decorator 3 */

class HTMLProductDecorator extends ProductDecorator {

    getDetail(): string {
        return `<h1> Info product </h1>
        <p>
        ${super.getDetail()}
        </p>`;
    }
}

/** With four classes */

const htmlProductDecorator = new HTMLProductDecorator(storeProduct2);
 console.log(htmlProductDecorator.getDetail());