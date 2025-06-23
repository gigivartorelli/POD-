let normal;
let myImput;
let msg
let g 
let col1
let col2
let pulso = 0;
let velocidad = 0.125
let c
let points
let select
let election
let direction = 1;

function preload() {
  normalabajo = loadFont('/assets/ouijaabajo1.ttf');
  normalarriba = loadFont('/assets/ouijaarriba1.ttf');
}

function mousePressed() {
   if (col1 === "black") {
    col1 = "snow";
    col2 = "black";
  } else {
    col1 = "black";
    col2 = "snow";
  }
}

function setup() {

  createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
  noStroke();
  noCursor()

  sliderBg = createSlider(0, 20,9)
  sliderBg.addClass("slider") // hay que ver si hace falta esto (ponerlo en el css)
  angleMode(DEGREES)
  sliderBg.position(windowWidth/2-140, windowHeight/2+230)
  
  slider = createSlider(0, 15, 4)
  slider.position(windowWidth/2+10, windowHeight/2+230)

  
  myImput = createInput('OUIJA')
  
  myImput.position(windowWidth/2-140, windowHeight/2+190)
 
  col1 = "snow"
  col2 = "black"

  select = createSelect()
  select.option('Normal') 
  select.option('Ghost') 
  select.option('Possesed') 
  select.position (windowWidth/2+10, windowHeight/2+190)
  
}


function draw() {
  
  g = -sliderBg.value ()
  msg = myImput.value()

  let efecto = select.value();

  if (efecto === 'Possesed') {
    let valc = slider.value();
    valc += direction * random(0, 15);

    let valg = sliderBg.value();
    valg += direction * random(20, 0);

    if (valc >= 15 || valc <= 0) {
      direction *= -1;
    }
     if (valg >= 20 || valg <= 0) {
      direction *= -1;
    }

  
    slider.value(valc); // actualizar valor
    sliderBg.value(-valg); // actualizar valor
  
    
  }
  
  background(col1);
    fill(col2)
     textSize(100)
  push()
  translate(windowWidth/2, windowHeight/2)
  shearX(g)
  c = -slider.value ()

  if (efecto === 'Ghost') {
    let alphaArriba = random(30, 120);
    let alphaAbajo = random(30, 120);


    if (col2 === "black") {
      fill(0, 0, 0, alphaArriba);
    } else {
      fill(255, 255, 255, alphaArriba);
    }
    textFont(normalarriba);
    text(msg, 0, c);

    if (col2 === "black") {
      fill(0, 0, 0, alphaAbajo);
    } else {
      fill(255, 255, 255, alphaAbajo);
    }
    textFont(normalabajo);
    text(msg, 0, -c);
    filter(BLUR, 2)
    



  } else {
    fill(col2);
    textFont(normalarriba);
    text(msg, 0, c);
    textFont(normalabajo);
    text(msg, 0, -c);
  }

  pop()

  

  let d = dist(mouseX, mouseY, windowWidth/2, windowHeight/2);
  let maxDist = dist(0, 0, windowWidth / 2, windowHeight / 2);
  let size = map(d, maxDist, 0, 10, 30);

  pulso += velocidad;
  if (pulso > 10 || pulso < 0) {
    velocidad = -velocidad;
  }


  push();
  textAlign(LEFT, TOP)
  textStyle(BOLD);
  textSize(13);
  text("POD       2025", 50, 40);
  pop();

  push();
  textStyle(NORMAL);
  textSize(13);
  
  textAlign(RIGHT, TOP);

  text("Amighini | Camblor | Vartorelli", windowWidth - 60, 40);
  pop();
  
   
  push()
  

  stroke(col1)
  strokeWeight(2)

  blendMode(EXCLUSION)
  //ADD, DARKEST
  stroke(2000)
  fill(255)

  
  ellipse (mouseX, mouseY, (6*size)+pulso)
  blendMode(ADD)
 
  fill(255, 255, 255, 100)
  ellipse (mouseX, mouseY, (6*size)+pulso)
  
 mousecruz(mouseX, mouseY)
 

  pop() 
  
 

}

function mousecruz(x, y){
  translate(x, y)
  strokeCap(SQUARE)
  blendMode(BLEND)
  stroke(col1)
  strokeWeight(2)
  line (-5, 0, 5, 0)
  line (0, -5, 0, 5)

}



