
{
  
	class Population {
		constructor(popSize, elitism, mutationRate, netLayers) {
			this.networks = [];
			this.popSize = popSize;
			this.highScore = 0;
			this.mutationRate = mutationRate;
			this.elitism = elitism;
			let baseNet = new swag.Net(netLayers);
			//garb collection will delete "basenet" after constructor is done.
			for (let i = 0; i < popSize; i++) {
				let net = new swag.Net();
				net.copy(baseNet);
				net.score = 0;
				this.networks.push(net);
			}
		}

		cullAndBreed() {
			//keeps the strongest players.
			//brutally kills the weakest

			//but first we have to sort them. good to bad
			this.networks.sort((a, b) => (a.score > b.score ? -1 : 1));
			this.highScore =
				this.networks[0].score < this.highScore
					? this.highScore
					: this.networks[0].score;
			//next we put the best ones in an array for later
			let newPopulation = [];
			for (let i = 0; i < this.elitism; i++) {
				this.networks[i].score = 0;
				newPopulation.push(this.networks[i]);
				//this actually only pushes the references btw.
				//which is fine
			}
			//next we have to generate enough offspring to fill the rest of the pop
			//higher scores have a higher chance of making offspring
			//"making offspring" just means a mutated net is made from it.
			for (let i = 0; i < this.popSize - this.elitism; i++) {
				for (let j = 0; j < this.popSize; j++) {
					if (Math.random() < 0.3) {
						//doing this with a sorted population should randomly choose
						//the best ones to breed
						let t = new swag.Net();
						t.score = 0; //init score
						t.copy(this.networks[i]);
						t.mutate(0.6, this.mutationRate);
						newPopulation.push(t);
						j = this.popSize + 5; //this is just to end the for loop
					}
					if (j == this.popSize - 1) {
						j = 0; //incase you just get super unlucky we have a fail safe.
					}
				}
			}
			// if (newPopulation.length == this.popSize) {
			// 	console.log('all good');
			// } else {
			// 	console.log('BAD ' + newPopulation.length);
			// }
			this.networks = newPopulation;
		}
	}
	
		swag.Population = Population;

}