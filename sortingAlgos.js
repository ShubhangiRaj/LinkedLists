function bubbleSort(arr){
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < (arr.length - i - 1); j++){
			if(arr[j] > arr[j+1]){
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
			}
		}
	}
	return arr;
}

function selectionSort(arr){
	for(let i = 0; i < arr.length; i++){
		let indexOfMin = i;
		for(let j = i+1; j < arr.length; j++){
			if(arr[j] < arr[indexOfMin]){
				indexOfMin = j
			}
		}
		if(indexOfMin !== i){
			let lesser = arr[indexOfMin];
			arr[indexOfMin] = arr[i];
			arr[i] = lesser;
		}
	}
	return arr;
}

function insertionSort(arr){
	for(let i = 1; i < arr.length; i++){
		let value  = arr[i];
		let j = i - 1;
		
		while(j >= 0){
			if(value < arr[j]){
				arr[j+1] = arr[j];
				arr[j] = value;
				j--; 
			} else {
				break;
			}
		}
	}
	return arr; 
}