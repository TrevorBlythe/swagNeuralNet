# swagNeuralNet
A javascript neural network library. It can train with backpropagation or neural evoloution! Ill post some examples of those soon!
I am about to be a college student so expect the next four years to be this projects prime.

Go ahead and run index.html and try it out! You will not be dissapointed.

# This project is coming along!
Im rewriting it to be as simple as possible, I made this as a middle finger to 
pytorch and tensorflow.. they have needlessly complicated APIS that dont make
sense. Machine learning is easy to do and doesnt need to be complicated.

Things i will add:
lstm layer
conv layer
more layers
optimizers like adadelta

# Tutorial:

How to make a network.

var net = swag.Net(array of layers);

example:

var net = new swag.Net([
	new swag.FC(2,3),
	new swag.Sig(3),
	new swag.FC(3,1),
]);


# forwarding:

net.forward(array); this returns the output of a network with a given input ( array ) 

saving/loading:
net.save(); //broken, will fix 
net.save(true); //broken, will fix
net.load(json); // broken will fix soon
netTwo.copy(net); //broken, will fix soon

# training:
net.train(input , expected output);

net.evolve(dataset, iterations); //broken, will fix

# Population training:
Im rewriting this.
