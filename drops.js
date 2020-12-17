class Drops
{

    update(){
        if(this.drops.position.y > height){
          
            Matter.Body.setPosition(this.drops,{x:random(0,400),y:random (0,400)})

        }
    }

	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			friction:0.1,

			
			}
            this.x=x;
            this.y=y;
            this.r=r;
            this.drop=Bodies.circle(this.x, this.y, this.r/4, options)
            World.add(world, this.drop);

	}
	display()
	{
			
			var paperpos=this.body.position;		
       
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER)

			image(this.image,0,0,this.r,this.r)
			pop()
			
	}

}