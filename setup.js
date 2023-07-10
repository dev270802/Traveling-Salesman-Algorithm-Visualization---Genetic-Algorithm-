export let cities = [];
export let totalcities = 40;
export let popSize=10000;
export let population=[]

export function setup(){
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