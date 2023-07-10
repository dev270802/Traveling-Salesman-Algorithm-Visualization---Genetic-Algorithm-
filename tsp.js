
let cities = [];
let totalcities = 40;
let popSize=10000;
let bestEver=[];
let population=[]
let distance=Infinity;
let fitness=[];

function setup() {
    createCanvas(500, 500);
    let order=[];
    for (let i = 0; i < totalcities; i++) {
        let v = createVector(random(width-100), random(height-100));
        cities[i] = v;
        order[i]=i;

    }
    for(let i=0;i<popSize;i++){
        population[i]=shuffle(order);
    }
    
}



function draw() {
    background(0);



    //Genetic Algorithm function
    calculateFitness();
    normalizeFitness();
    nextGeneration();



    fill(255);
    //drawing points of cities
    for (let i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }

    //drawing vertices of bestEver solution 
    stroke(255);
    strokeWeight(2);
    noFill()
    beginShape();
    for (let i = 0; i < bestEver.length; i++) {
        let n=bestEver[i];
        vertex(cities[n].x, cities[n].y);
    }
    vertex(cities[bestEver[0]].x, cities[bestEver[0]].y)
    endShape();
   
}

//calculate the distance
function calculateDistance(points,order) {
    let sum = 0;
    for (let i = 0; i < order.length - 1; i++) {
        let cityA=points[order[i]]
        let cityB=points[order[i+1]]
        sum += dist(cityA.x, cityA.y, cityB.x, cityB.y)
    }
    let last=points[order[order.length-1]]
    let first=points[order[0]]
    sum += dist(last.x, last.y, first.x, first.y)
    return sum;
}

//swap code
function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}
function dist(x1,y1,x2,y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    return (x * x + y * y);
}

