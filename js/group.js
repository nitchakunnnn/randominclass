function randomFunc(){
	let result = document.getElementById("result");
	let quantityStudents = document.getElementById("quantityStudents").value;
	let quantityGroups = document.getElementById("quantityGroups").value;
	let sameGroup = document.getElementById("sameGroup").value;
	let notSameGroup = document.getElementById("notSameGroup").value;
	let isCheckBox = document.getElementById("checkCondition").checked;
	let isShowIndex = document.getElementById("showIndex").checked;
	
	let quantityStudentsInt = parseInt(quantityStudents)
	let quantityGroupsInt = parseInt(quantityGroups)
	
	result.value = '';
	if(quantityStudents == '')
		quantityStudentsInt = 24;
	if(quantityGroups == '')
		quantityGroupsInt = 6;
	
	let arraySequence = getRandArray(quantityStudentsInt,quantityGroupsInt);
	
	
	if(isCheckBox){
		
		sameGroup = sameGroup.slice(1, -1);
		sameGroup = sameGroup.split('),(');
		notSameGroup = notSameGroup.slice(1, -1);
		notSameGroup = notSameGroup.split('),(');
		
		for(let i=0 ; i<sameGroup.length ; i++){
			sameGroup[i] = sameGroup[i].split(',').map(x=>+x);
		}
		for(let i=0 ; i<notSameGroup.length ; i++){
			notSameGroup[i] = notSameGroup[i].split(',').map(x=>+x);
		}
		
		while(!isCorrect(arraySequence,sameGroup,notSameGroup))
			arraySequence = getRandArray(quantityStudentsInt,quantityGroupsInt);
	}
	for(let i = 0 ; i < arraySequence.length ; i++){
		if(isShowIndex)
			result.value += 'กลุ่มที่ ' + (i+1).toString() + ' :  ';
		for(let j=0 ; j < arraySequence[i].length; j++){
			result.value += arraySequence[i][j] + ', ';
		}
		result.value = result.value.slice(0, -2);
		result.value += '\n';
	}
}// JavaScript Document// JavaScript Document// JavaScript Document
function getRandArray(quantityStudentsInt,quantityGroupsInt){
	let ind = 0;
	let arraySequence2d = [];
	let temp = [];
	let arraySequence = (Array.from({length: quantityStudentsInt}, (_, i) => i + 1)).sort(() => Math.random() - 0.5);
	for(let i = 0 ; i < quantityGroupsInt ; i++){
		temp = [];
		for(let j=0 ; j < Math.floor(quantityStudentsInt/quantityGroupsInt)+((quantityStudentsInt%quantityGroupsInt-(i)>0)?1:0); j++){
			temp.push(arraySequence[ind]);
			ind++;
		}
		arraySequence2d.push(temp);
	}
	return arraySequence2d
}
function isCorrect(arraySequence,sameGroup,notSameGroup){
	for(let i=0;i<arraySequence.length;i++){
		let setArraySequence = new Set(arraySequence[i]);
		for(let j=0;j<notSameGroup.length;j++){
			let setNotSameGroup = new Set(notSameGroup[j]);
			let con1 = new Set([...setArraySequence].filter(x => setNotSameGroup.has(x)));
			if(con1.size>1)
				return false;
		}
	}
	if(document.getElementById("sameGroup").value!=''){
		for(let i=0;i<sameGroup.length;i++){
			let con = false;
			for(let j=0;j<arraySequence.length;j++){
				if(sameGroup[i].every(val => arraySequence[j].includes(val)))
					con = true;
			}
			if(!con)
				return false;
		}
	}
	return true;
}