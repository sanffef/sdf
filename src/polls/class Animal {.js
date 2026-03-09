class Animal {
  constructor(name, daysToFeed, happiness) {
    this.name = name;
    this.daysToFeed = daysToFeed;
    this.happiness = happiness;
  }
  get happiness(){
    return this._happiness;
  }
  set happiness(value){
    if(value > 100){
        this._happiness = 100;
    }else{
        if(value < 0){
            this._happiness = 0;
        }else{
            this._happiness = value;
        }
    }
  }
}
class BaseAnimal{
  update(animal){
    animal.daysToFeed -=1;
    const badMood = animal.daysToFeed < 0 ? 4 : 2;
    animal.happiness -= badMood;
  }
}
class Unicorn extends BaseAnimal{
    update(animal){
        animal.happiness -= 1;
        const goodMood = animal.daysToFeed < 0 ? 2 : 1;
        animal.happiness += goodMood;
    }
}
class GoldenDragon extends BaseAnimal{
    update(animal){

    }
}
class Phoenix extends BaseAnimal{
    update(animal){
        animal.happiness -=1;
        const badMood = animal.daysToFeed < 0 ? 4 : 2;
        if(animal.happiness = badMood){
         animal.happiness = 100;
        }else{
            animal.happiness -= badMood;
        }
    }
}
class Sloth extends BaseAnimal{
    constructor() {
    super();
    this.lazyDay = true;
  }
    update(animal){
        if(this.lazyDay){
            this.lazyDay = false;
        }else{
            super.update(animal);
      this.lazyDay = true;
        }

    }
}
class Zoo{
    constructor(animals =[]){
        this.animals = this.animals;
        this.strategies = {
      'Unicorn': new UnicornStrategy(),
      'Golden Dragon': new GoldenDragonStrategy(),
      'Phoenix': new PhoenixStrategy(),
      'Sloth': new SlothStrategy()
    };
    this.defaultStrategy = new BaseAnimalStrategy();
    }
    updateStatus() {
    for (let animal of this.animals) {
      const strategy = this.strategies[animal.name] || this.defaultStrategy;
      strategy.update(animal);
    }
    return this.animals;
  }
}
module.exports = { Animal, Zoo };