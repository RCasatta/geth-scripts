
deltas=[];
var timeInMs = Date.now();
last=eth.getBlock(1).timestamp;
for(var i=2;i<eth.blockNumber;i++) {
	var current=eth.getBlock(i).timestamp;
	deltas.push(current-last);
	last=current;
	if( (i%10000)==0 ) {
		console.log(i + "=" + average(deltas) + " elapsed " + (Date.now()-timeInMs)/1000 + "s" );
		deltas=[];
		timeInMs = Date.now();
	}
}




function average(times) {
	var sum = times.reduce(function(a, b) { return a + b; });
	var avg = sum / times.length;
	return avg;
} 