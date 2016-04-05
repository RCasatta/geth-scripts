
var TOTAL_BLOCKS=100000;
var MAX_BLOCKS=100;
var PER_BLOCKS=2;
var deltas=[];
var alls=[];
var timeInMs = Date.now();
var end=eth.blockNumber;
var start = end - TOTAL_BLOCKS;
var last = eth.getBlock(start-1).timestamp;
var min = {};
var max = {};
var avgs = [];

for(j=2;j<=MAX_BLOCKS;j+=PER_BLOCKS) {
	min[j]=1000000;
	max[j]=0;
}
for(var i=start;i<end;i++) {
	var b = eth.getBlock(i);
	//console.log(i + " of " + end + " is " + b);
	var current=b.timestamp;
	var delta = current-last;
	deltas.push(delta);
	alls.push(delta);
	last=current;
	if( (i%1000)==0 ) {
		var cavg = average(alls);
		console.log(i + "=" + cavg + " elapsed " + (Date.now()-timeInMs)/1000 + "s" );
		avgs.push(cavg);
		alls = [];
		timeInMs = Date.now();
	}
	if(deltas.length>MAX_BLOCKS) {
		for(j=2;j<=MAX_BLOCKS;j+=PER_BLOCKS) {
			var x=deltas.slice(0,j);
			var s=x.reduce(function(a, b) { return a + b; });
			if(s<min[j])
				min[j]=s;
			if(s>max[j])
				max[j]=s;
		}
		deltas.shift();
	}
}
var gavg = average(avgs);
for(j=2;j<=MAX_BLOCKS;j+=PER_BLOCKS) {
	console.log(j + " " +  min[j] + " " + (j*gavg) + " " + max[j]);
}
console.log("average=" + gavg);

function average(times) {
	var sum = times.reduce(function(a, b) { return a + b; });
	var avg = sum / times.length;
	return avg;
}
