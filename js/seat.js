var arrayTable = [
	[1,2,3,4,5,6],
	[7,8,9,10,11,12],
	[13,14,15,16,17,18],
	[19,20,21,22,23,24]
];
var numStudents = 24;
var numColumn = 6;
function setTableFunc(){

	let result = document.getElementById("result");
	let classroom = document.getElementById("classroom");
	let quantityStudents = document.getElementById("quantityStudents");
	let quantityColumn = document.getElementById("quantityColumn");
	let columnDiv = document.getElementById("columnDiv");
	let temp = '';

	columnDiv.style.display = "none";
	quantityStudents.disabled = false;
	document.getElementById("randomButton").disabled = false;
	clearResult();
	arrayTable = [];
	numStudents = ( quantityStudents.value == '')? 24: parseInt(quantityStudents.value);
	numColumn = ( quantityColumn.value == '')? 6: parseInt(quantityColumn.value);

	switch(classroom.options[classroom.selectedIndex].value){
		case '1':
			// make array
			numColumn = 8;
			var arrTemp = [];
			var intTemp = 1;
			for(let i = 0 ; i < Math.ceil(numStudents/numColumn) ; i++){
				arrTemp = [];
				for(let j=0 ; j < numColumn && intTemp <= numStudents; j++){
					arrTemp.push(intTemp);
					intTemp++;
				}
				arrayTable.push(arrTemp);
			}
			// make html
			temp = `<div class="mb-3 row row-cols-4 g-3">`;
			for(i=0 ; i < numStudents ; i++){
				temp += `	<div class="col"><div class="row row-cols-2">`;
				temp += (i*2<numStudents)?`<div class="col pr-0" id="seat"><div id="seat-${i*2+1}" class="py-3 text-center">${i*2+1}</div></div>`:``;
				temp += (i*2+1<numStudents)?`<div class="col pl-0" id="seat"><div id="seat-${i*2+2}" class="py-3 text-center">${i*2+2}</div></div>`:``;
				temp += `</div></div>`;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
		case '2':
			// make array
			numColumn = 6;
			var arrTemp = [];
			var intTemp = 1;
			for(let i = 0 ; i < Math.ceil(numStudents/numColumn) ; i++){
				arrTemp = [];
				for(let j=0 ; j < numColumn && intTemp <= numStudents; j++){
					arrTemp.push(intTemp);
					intTemp++;
				}
				arrayTable.push(arrTemp);
			}
			// make html
			temp = `<div class="mb-3 row row-cols-6 g-3">`;
			for(i=0 ; i < numStudents ; i++){
				temp += `	<div class="col" id="seat">
								<div id="seat-${i+1}" class="py-3 text-center">${i+1}</div>
							</div>`;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
		case '3':
			// make array
			var arrTemp = [];
			var intTemp = 1;
			for(let i = 0 ; i < Math.ceil(numStudents/numColumn) ; i++){
				arrTemp = [];
				for(let j=0 ; j < numColumn && intTemp <= numStudents; j++){
					arrTemp.push(intTemp);
					intTemp++;
				}
				arrayTable.push(arrTemp);
			}
			// make html
			columnDiv.style.display = "block";
			temp = `<div class="mb-3 row row-cols-${numColumn} g-3">`;
			for(i=0 ; i < numStudents ; i++){
				temp += `	<div class="col" id="seat">
								<div id="seat-${i+1}" class="py-3 text-center">${i+1}</div>
							</div>`;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
		case '4':
			// make array
			numStudents = 25;
			numColumn = 7;
			var arrTemp = [];
			var intTemp = 1;
			for(let i = 0 ; i < Math.ceil(numStudents/numColumn) ; i++){
				arrTemp = [];
				for(let j=0 ; j < numColumn && intTemp <= numStudents; j++){
					arrTemp.push(intTemp);
					intTemp++;
				}
				arrayTable.push(arrTemp);
			}
			// make html
			quantityStudents.disabled = true;
			quantityStudents.value =  numStudents.toString();
			temp = `<div class="mb-3 row row-cols-${numColumn} g-3">`;
			for(i=0 ; i < numStudents ; i++){
				temp += `	<div class="col" id="seat">
								<div id="seat-${i+1}" class="py-3 text-center">${i+1}</div>
							</div>`;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
		case '5':
			// make array
			numStudents = 25;
			numColumn = 6;
			arrayTable = [
				[1,2,3],
				[4,5,6,7,8,9],
				[10,11,12,13,14,15],
				[16,17,18,19,20,21],
				[22,23,24,25]
			];
			// make html
			quantityStudents.disabled = true;
			quantityStudents.value = numStudents.toString();
			temp = `<div class="mb-3 row row-cols-${numColumn} g-3">`;
			temp += `<div class="col"></div><div class="col"></div><div class="col"></div>`;
			for(i=0 ; i < 25 ; i++){
				temp += `	<div class="col" id="seat">
								<div id="seat-${i+1}" class="py-3 text-center">${i+1}</div>
							</div>`;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
		case '6':
			// make array
			numStudents = 26;
			numColumn = 8;
			arrayTable = [
				[1,2,3,4,5,6,7,8],
				[9,10,11,12,13,14],
				[15,16,17,18,19,20],
				[21,22,23,24,25,26]
			];
			// make html
			quantityStudents.disabled = true;
			quantityStudents.value = numStudents.toString();
			temp = `<div class="mb-3 row row-cols-${numColumn} g-3">`;
			for(i=0 ; i < 26 ; i++){
				temp += `	<div class="col" id="seat">
								<div id="seat-${i+1}" class="py-3 text-center">${i+1}</div>
							</div>`;
				temp += (i==7||i==13||i==19)? `<div class="col"></div><div class="col"></div>`:``;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
	}
	setColorSeat("#FFF","normal","1px solid #dee2e6","1rem");
}

function randomFunc(){

	let result = document.getElementById("result");
	let classroom = document.getElementById("classroom");

	let isCheckBox = document.getElementById("checkCondition").checked;
	let seatNumber = document.getElementById("seatNumber").value;
	let rowNumber = document.getElementById("rowNumber").value;
	let notRowNumber = document.getElementById("notRowNumber").value;
	let closeNumber = document.getElementById("closeNumber").value;
	let notCloseNumber = document.getElementById("notCloseNumber").value;

	randArray();

	if(isCheckBox){
		
		seatNumber = seatNumber.slice(1, -1);
		seatNumber = seatNumber.split('),(');
		rowNumber = rowNumber.slice(1, -1);
		rowNumber = rowNumber.split('),(');
		notRowNumber = notRowNumber.slice(1, -1);
		notRowNumber = notRowNumber.split('),(');
		closeNumber = closeNumber.slice(1, -1);
		closeNumber = closeNumber.split('),(');
		notCloseNumber = notCloseNumber.slice(1, -1);
		notCloseNumber = notCloseNumber.split('),(');
		console.log("cutArray")
		
		for(let i=0 ; i<seatNumber.length ; i++)
			seatNumber[i] = seatNumber[i].split(',').map(x=>+x);
		for(let i=0 ; i<rowNumber.length ; i++)
			rowNumber[i] = rowNumber[i].split(',').map(x=>+x);
		for(let i=0 ; i<notRowNumber.length ; i++)
			notRowNumber[i] = notRowNumber[i].split(',').map(x=>+x);
		for(let i=0 ; i<closeNumber.length ; i++)
			closeNumber[i] = closeNumber[i].split(',').map(x=>+x);
		for(let i=0 ; i<notCloseNumber.length ; i++)
			notCloseNumber[i] = notCloseNumber[i].split(',').map(x=>+x);
		console.log("mapArray")
		
		while(!isCorrect(seatNumber,rowNumber,notRowNumber,closeNumber,notCloseNumber))
			randArray();
	}
	
	arraySetTable();
	setColorSeat("#EFBC45","bold","1px solid #fef0ce","1rem");

}
function setColorSeat(bgcolor,weight,border,fontsize){
	for(let i = 0 ; i < numStudents ; i++){
		document.getElementById(`seat-${i+1}`).style.backgroundColor = bgcolor;
		document.getElementById(`seat-${i+1}`).style.fontWeight = weight;
		document.getElementById(`seat-${i+1}`).style.border = border;
		document.getElementById(`seat-${i+1}`).style.fontSize = fontsize;
	}
}
function randArray(){
	let arraySequence = (Array.from({length: numStudents}, (_, i) => i + 1)).sort(() => Math.random() - 0.5);
	var intTemp = 0;
	for(let i = 0 ; i < arrayTable.length ; i++){
		for(let j = 0 ; j < arrayTable[i].length ; j++){
			arrayTable[i][j] = arraySequence[intTemp];
			intTemp++;
		}
	}

}
function isCorrect(seatNumberArray,rowNumberArray,notRowNumberArray,closeNumberArray,notCloseNumberArray){
	let isFound = true;
	let tempDesk = 0;
	console.log("isCorrect")
	if(seatNumberArray[0].length>1){
		for(let seatNumber of seatNumberArray){
			isFound = false;
			tempDesk = 1;
			for(let row=0 ; row<arrayTable.length ; row++)
				for(let seat of arrayTable[row]){
					if(seat == seatNumber[0] && tempDesk == seatNumber[1])
						isFound = true;
					tempDesk++;
				}
			if(!isFound)
				return false;
		}
	}
	if(rowNumberArray[0].length>1){
		for(let rowNumber of rowNumberArray){
			isFound = false;
			for(let row=0 ; row<arrayTable.length ; row++)
				for(let seat of arrayTable[row])
					if(seat == rowNumber[0] && row+1 == rowNumber[1])
						isFound = true;
			if(!isFound)
				return false;
		}
	}
	if(notRowNumberArray[0].length>1){
		for(let notRowNumber of notRowNumberArray)
			for(let row=0 ; row<arrayTable.length ; row++)
				for(let seat of arrayTable[row])
					if(seat == notRowNumber[0] && row+1 == notRowNumber[1])
						return false;
	}
	if(closeNumberArray[0].length>1)
		for(let closeNumber of closeNumberArray){
			isFound = false;
			for(let row of arrayTable)
				for(let i=1 ; i<row.length ; i++)
					if((row[i-1] == closeNumber[0] && row[i] == closeNumber[1])||(row[i-1] == closeNumber[1] && row[i] == closeNumber[0]))
						isFound = true;
			if(!isFound)
				return false;
		}
	if(notCloseNumberArray[0].length>1)
		for(let notCloseNumber of notCloseNumberArray)
			for(let row of arrayTable)
				for(let i=1 ; i<row.length ; i++)
					if((row[i-1] == notCloseNumber[0] && row[i] == notCloseNumber[1])||(row[i-1] == notCloseNumber[1] && row[i] == notCloseNumber[0]))
						return false;
	return true;
}
function arraySetTable(){
	var intTemp = 1;
	for(let i = 0 ; i < arrayTable.length ; i++){
		for(let j = 0 ; j < arrayTable[i].length ; j++){
			document.getElementById(`seat-${intTemp}`).innerHTML = arrayTable[i][j];
			intTemp++;
		}
	}
}
function resetInput(){
	document.getElementById("randomButton").disabled = true;
	document.getElementById("quantityStudents").disabled = false;
	document.getElementById("quantityStudents").value = '';
	document.getElementById("classroom").value = '2';
	numStudents = 24;
	numColumn = 6;
	columnDiv.style.display = "none";
	document.getElementById("checkCondition").checked = false;
	checkConditionFunc();
	setTableFunc()
}