let convert = {};

convert.test= function(a, b){
	console.log(a);
	console.log(b);
	if((a == 0) || (b > 0) || (a < 0 && b < 0)){
		return true;
	}
	else{
		return false;
	}
}

module.exports = convert;