/**
 * 方針
 * - Animalクラスはクラスとして定義し、それ以外をcompositionで書く
 * - compositionで記載する際に不要なメソッド(makeSound)を委譲しない
 */
class Animal {
    sleep() {
        console.log("お休み");
    }
    
    eat() {
        console.log("食物");
    }

    makeSound() {
        console.log("★");
    }
}

/**
 * 似たような事例(猫や鳥にできて犬にできないこと…？)を考えるとdogClassもcompostitonで書くべきか？
 */
class Dog extends Animal {
    bite() {
        //...
    }
}

// 中略

class Fish {
    constructor() {
        this.animal = new Animal(); 
    }

    eat() {
        console.log("プランクトン");
    }

    swim() {
        console.log("平泳ぎ");
    }

    sleep() {return this.animal.sleep();}
    // 不要なメソッドは委譲しない 
}

const sakana = new Fish();
sakana.sleep();
sakana.eat();
sakana.swim();
sakana.makeSound(); //TypeError: sakana.makeSound is not a function
