class food {
    constructor(x, y,r) {

        var options ={
            restitution:0.4,
            isStatic:true
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
        this.Visibility = 255;

    }
    display() {
        if(this.body.speed<3){
            var angle = this.body.angle;
          var pos= this.body.position;
            
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
          }
          else{
            World.remove(world,this.body);
            push();
            this.Visibility= this.Visibility-5;
            pop();
          }

        
    }

};