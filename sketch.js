class info{
  constructor(id, id2,starting,ending){
    this.id = id;
    this.id2 = id2;
    this.starting = starting;
    this.ending = ending;
  }
}
class cir {
  constructor(x,y,diameter,colour,id){
    this.id = id;
    this.x = x;
    this.y = y;
    this.diameter = diameter;  
    this.colour = colour;
    this.arr = [];
  }
  display() {
    
    fill(this.colour);
    ellipse(this.x, this.y, this.diameter); 
    fill(255);
    text(this.id,this.x,this.y);
    textAlign(CENTER)
    
  }
  displayshadow(p){
    fill(255,255,255,p)
    ellipse(this.x,this.y, this.diameter+200 )
  }
  circleclick(){
    if(dist(this.x, this.y, mouseX, mouseY)< this.diameter/2 && mouseIsPressed){
    //fill(50);
    this.x = mouseX;
    this.y = mouseY;
    }
  }      
}
  
let diameter = 70;

let a = new cir(100,100,diameter,'blue','ABC')
let b = new cir(400,100,diameter,'red','DEF')
let c = new cir(100, 400, diameter, 'black', 'GHI')
let rec = new cir(500, 500, diameter, 'green', 'ROOT')


function setup() { 
  createCanvas(600, 600);
} 

function draw() { 
  background(0);
  fill(255);
  noStroke();
  a.circleclick();
  b.circleclick();
  
  a.displayshadow(50);
  b.displayshadow(50);
  rec.displayshadow(50);
  c.displayshadow(50);
  a.display();
  b.display();
  c.display();
  rec.display();
  
  interact(a,b);
  interact(b,a);
  interact(c,a);
  release(a,rec);
  release(b,rec);
  
}
function interact(a, b){
  if (dist(a.x, a.y, b.x, b.y) < b.diameter+100){
    for (i=0; i < a.arr.length;i++){
        if (a.arr[i].id2 == b.id && a.arr[i].ending == null){
          //console.log('hohoho');
          return
        }
      }
      let data = new info();
      data.starting = new Date();
      data.id2 = b.id;
      data.id = a.id;
      a.arr.push(data);
      //console.log("yayya");
      //console.log(data);
  }else if (dist(a.x, a.y, b.x, b.y) > b.diameter+100){

    for (i=0; i < a.arr.length;i++){
      if (a.arr[i].id2 == b.id && a.arr[i].ending == null){
        a.arr[i].ending = new Date();
        //console.log("bababa");
        //console.log(a.arr[i]);
      }
    }
  }
}
function release(a,rec){
  if (mouseIsPressed){
    if(dist(a.x,a.y,rec.x,rec.y) < a.diameter+100){
      if(a.arr.length != 0 && a.arr[0].ending != null){
        rec.arr.push(a.arr);
        a.arr = [];
      }
      
    }
  }
}
function mouseReleased() {
  //console.log(mouseX, mouseY);
  //d = new Date();
  console.log(rec.arr);
  //a.id = 'jaja';
  //console.log(d.getHours(), d.getMinutes(), d.getSeconds());
  //console.log(d.getDate(),d.getMonth()+1, d.getYear()+1900);
}

