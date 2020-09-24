function randomFunc(){
	let result = document.getElementById("result");
	let quantityStudents = document.getElementById("quantityStudents").value;
	let quantityGroups = document.getElementById("quantityGroups").value;
	let isCheckBox = document.getElementById("checkCondition").checked;
	let iSshowIndex = document.getElementById("showIndex").checked;
	
	let quantityStudentsInt = parseInt(quantityStudents)
	let quantityGroupsInt = parseInt(quantityGroups)
	
	result.value = '';
	if(quantityStudents == '')
		quantityStudentsInt = 24;
	if(quantityGroups == '')
		quantityGroupsInt = 6;
	
	let arraySequence = (Array.from({length: quantityStudentsInt}, (_, i) => i + 1)).sort(() => Math.random() - 0.5);
//	let arraystartSequence = (document.getElementById("startSequence").value).split(',').map(x=>+x);
//	let arrayendSequence = (document.getElementById("endSequence").value).split(',').map(x=>+x);
//	let unuseSequence = (document.getElementById("unuseSequence").value).split(',').map(x=>+x);
	
	if(isCheckBox){
//		let ind = 1;
//		arraySequence = arraySequence.filter(x => !arraystartSequence.includes(x) );
//		arraySequence = arraySequence.filter(x => !arrayendSequence.includes(x) );
//		arraySequence = arraySequence.filter(x => !unuseSequence.includes(x) );
//		for(let i = 0 ; i < arraystartSequence.length ; i++){
//			if(iSshowIndex){
//				result.value += ind.toString() + '. ' + arraystartSequence[i] + '\n';
//				ind++;
//			}
//			else
//				result.value += arraystartSequence[i] + '\n';
//		}
//		for(let i = 0 ; i < arraySequence.length ; i++){
//			if(iSshowIndex){
//				result.value += ind.toString() + '. ' + arraySequence[i] + '\n';
//				ind++;
//			}
//			else
//				result.value += arraySequence[i] + '\n';
//		}
//		for(let i = 0 ; i < arrayendSequence.length ; i++){
//			if(iSshowIndex){
//				result.value += ind.toString() + '. ' + arrayendSequence[i] + '\n';
//				ind++;
//			}
//			else
//				result.value += arrayendSequence[i] + '\n';
//		}
	}
	else{
		let ind = 1;
		for(let i = 0 ; i < quantityGroupsInt ; i++){
			if(iSshowIndex)
				result.value += 'กลุ่มที่ ' + (i+1).toString() + ' :   ';
			for(let j=0 ; j < Math.floor(quantityStudentsInt/quantityGroupsInt)+((quantityStudentsInt%quantityGroupsInt-(i)>0)?1:0); j++){
				result.value += arraySequence[ind-1] + '\t';	
				ind++;
				
			}
			result.value += '\n';
		}
	}
}// JavaScript Document// JavaScript Document// JavaScript Document