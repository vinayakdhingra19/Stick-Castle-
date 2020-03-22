function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  
  rect(300,150,20,800);
  rect(600,150,20,800);
  rect(325,200,40,600); 
  rect(555,200,40,600); 
  rect(370,250,50,400);
  rect(500,250,50,400);
  rect(428,100,63,700);
  triangle(432,97,460,45,488,97);
  drawSprites();
}