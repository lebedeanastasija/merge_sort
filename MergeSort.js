function MergeSort(array){
	if(array.length != 1){
		var middle = array.length / 2;
		var array1 = array.slice(0, middle);
		var array2 = array.slice(middle);
		
		var new_array1 = MergeSort(array1);
		var new_array2 = MergeSort(array2);
		
		return GlueArrays(new_array1, new_array2);
	}
	else {
		return array;
	}
}

function GlueArrays(array1, array2){
	var result = [];
	while( (array1.length > 0) || (array2.length > 0) ){
		if(array1.length > 0 && array2.length > 0){
			if(Number(array1[0]) < Number(array2[0])){
				result.push(array1.shift());
			}
			else{
				result.push(array2.shift());
			}
		}
		else
			if (array1.length > 0){
				result.push(array1.shift());
			}
			else{
				result.push(array2.shift());
			}
	}
	return result;
}

function GetMergeSortedArray(){
	var array_input = document.getElementById("array_input");
	var array = array_input.value;
	array = array.split(',');
	var sorted_array = MergeSort(array);
	array_input.value = sorted_array.toString();
}