var  marks = [1,5,99,47,21];
var sprites;

var s1, s2, s3, s4, s5;
function setup() 
{
  createCanvas(400,400);
  console.log(marks);

  s1 = createSprite(100, 100, 20, 20);

  console.log(s1.position);
  s2 = createSprite(200, 50, 20, 20);
  s3 = createSprite(250, 150, 20, 20);
  s4 = createSprite(50, 300, 20, 20);
  s5 = createSprite(300, 200, 20, 20);

  sprites = [s1, s2, s3, s4, s5];

  console.log(sprites[0].position.x);
  console.log(sprites[1].position.x);
  console.log(sprites[2].position.x);
  console.log(sprites[3].position.x);
  console.log(sprites[4].position.x);
  average();
}

function draw() 
{
  background(0);

  text(mouseX+ "," + mouseY, 350, 375);
  


  drawSprites();
}


function average(){
  var sum = marks[0] + marks[1] + marks[2] +marks[3] + marks[4];
  var avg = sum/marks.length;
  console.log(avg);
}

