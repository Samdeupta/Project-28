class Bird extends BaseClass {
  constructor(x,y){
    var options={
      'density':500.0
    }
    super(x,y,50,50,options);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
   super.display();
  }
}
