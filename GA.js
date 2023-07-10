function calculateFitness() {
    for (let i = 0; i < population.length; i++) {
        let d = calculateDistance(cities, population[i]);

        if (d < distance) {
            distance = d;
            console.log(d);
            bestEver = population[i];
        }
        fitness[i] = 1 / (pow(d, 4)+ 1);

    }
}

function normalizeFitness() {
    let sum = 0;
    for (let i = 0; i < fitness.length; i++) {
        sum += fitness[i];
    }
    for (let i = 0; i < fitness.length; i++) {
        fitness[i] = fitness[i] / sum;
    }

}

//new population generation function;
function nextGeneration() {
    let newPopulation = [];
    for (let i = 0; i < population.length-1; i++) {
        let order = (pickOne(population, fitness))
        //let parent2 = (pickOne(population, fitness));
        mutate(order);
        newPopulation[i] = order
        
    }
    newPopulation.push(bestEver);
    population = newPopulation;
}

//crossover function
/*
function crossOver(parent1, parent2) {
    let index1 = floor(random(parent1.length));
    let index2 = floor(random(index1, parent1));
    let child = parent1.slice(index1, index2);
    for (let i = 0; i < parent2.length; i++) {
        if (!child.includes(parent2[i])) {
            child.push(parent2[i])
        }

    }
    return child;

}
*/

//function to pick parents
function pickOne(population, fitness) {
    let index = 0;
    let r = random(1);

    while (r > 0) {
        r = r - fitness[index];
        index++;
    }
    index--;
    return population[index].slice();
}

// mutate function
function mutate(order) {
    
            let first = floor(random(order.length));
            let second = floor(random(order.length))
            swap(order, first, second);
       
}