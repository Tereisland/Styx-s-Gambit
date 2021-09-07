// Initialise game variables
let money = 500;
let targetX = 0;
let targetY = 0;

let turretX = 500;
let turretY = 500;

let missiles = [];


function setup() {
  createCanvas(800, 600);

}

function draw() {
  background(220);
  
  drawFooter();

  drawturret();

  // Update missiles
  missiles.forEach(missile => {
    // missile.collide();
    missile.move();
    missile.display();
  });


  ellipse(targetX, targetY, 50, 50);
  
  money = money + 1;
}



function mousePressed() {
  // prevent default
  targetX = mouseX;
  targetY = mouseY;
  
  append(missiles,  new Missile(mouseX, mouseY, turretX, turretY, 10));

  return false;

}




function drawFooter() {
  line(0, 500, 800, 500);

  textSize(32);
  text('Money: '+money, 10, 580);

  text('x: '+ mouseX, 200, 580)

  text('T Missiles: '+ missiles.length, 400, 580)


}


// A turret should be a class too
function drawturret() {
   push()
  fill(200);
  rect(turretX, turretY, 50, -50); 
  pop()
}


// Missile
class Missile {
  constructor(targetX, targetY, launchX, launchY, speed) {
    this.targetX = targetX;
    this.targetY = targetY;
    this.launchX = launchX;
    this.launchY = launchY;
    this.speed = speed;
    this.x = launchX;
    this.y = launchY;
  }

  display() {
    ellipse(this.x, this.y, 20, 20);
  }

  move() {
    this.x = this.x - (this.targetX / this.speed);
    this.y = this.y - (this.targetY / this.speed);
  }
}

