function randomFunc() {
	let result = document.getElementById("result");
	let quantity = document.getElementById("quantityStudents").value;
	let checkBox = document.getElementById("checkCondition").checked;
	
	result.value = '';
	if(quantity == '')
		quantity = "24";
	
	let arraySequence = (Array.from({length: parseInt(quantity)}, (_, i) => i + 1)).sort(() => Math.random() - 0.5);
	let arraystartSequence = (document.getElementById("startSequence").value).split(',').map(x=>+x);
	let arrayendSequence = (document.getElementById("endSequence").value).split(',').map(x=>+x);
	let unuseSequence = (document.getElementById("unuseSequence").value).split(',').map(x=>+x);
	
	if(checkBox){
		arraySequence = arraySequence.filter(x => !arraystartSequence.includes(x) );
		arraySequence = arraySequence.filter(x => !arrayendSequence.includes(x) );
		arraySequence = arraySequence.filter(x => !unuseSequence.includes(x) );
		for(let i = 0 ; i < arraystartSequence.length ; i++){
			result.value += arraystartSequence[i] + '\n';
		}
		for(let i = 0 ; i < arraySequence.length ; i++){
			result.value += arraySequence[i] + '\n';
		}
		for(let i = 0 ; i < arrayendSequence.length ; i++){
			result.value += arrayendSequence[i] + '\n';
		}
	}
	else{
		for(let i = 0 ; i < arraySequence.length ; i++){
			result.value += arraySequence[i] + '\n';
		}
	}
}// JavaScript Document// JavaScript Document