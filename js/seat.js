function setTableFunc(){
	clearResult();
	let result = document.getElementById("result");
	let classroom = document.getElementById("classroom");
	let quantityStudents = document.getElementById("quantityStudents");
	let quantityColumn = document.getElementById("quantityColumn");
	let columnDiv = document.getElementById("columnDiv");
	columnDiv.style.display = "none";
	quantityStudents.disabled = false;
	let temp = '';
	let numStudents = ( quantityStudents.value == '')? 24: parseInt(quantityStudents.value);
	let numColumn = ( quantityColumn.value == '')? 6: parseInt(quantityColumn.value);
	switch(classroom.options[classroom.selectedIndex].value){
		case '1':
			temp = `<div class="mb-3 row row-cols-4 g-3">`;
			for(i=0 ; i < Math.ceil(numStudents) ; i++){
				temp += `	<div class="col"><div class="row row-cols-2">`;
				temp += (i*2<numStudents)?`<div class="col pr-0"><div id="seat-${i*2}" class="py-3 border bg-white text-center">${i*2+1}</div></div>`:``;
				temp += (i*2+1<numStudents)?`<div class="col pl-0"><div id="seat-${i*2+1}" class="py-3 border bg-white text-center">${i*2+2}</div></div>`:``;
				temp += `</div></div>`;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
		case '2':
			temp = `<div class="mb-3 row row-cols-6 g-3">`;
			for(i=0 ; i < Math.ceil(numStudents) ; i++){
				temp += `	<div class="col">
								<div id="seat-${i}" class="py-3 border bg-white text-center">${i+1}</div>
							</div>`;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
		case '3':
			columnDiv.style.display = "block";
			temp = `<div class="mb-3 row row-cols-${numColumn} g-3">`;
			for(i=0 ; i < numStudents ; i++){
				temp += `	<div class="col">
								<div id="seat-${i}" class="py-3 border bg-white text-center">${i+1}</div>
							</div>`;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
		case '4':
			quantityStudents.disabled = true;
			temp = `<div class="mb-3 row row-cols-7 g-3">`;
			for(i=0 ; i < 25 ; i++){
				temp += `	<div class="col">
								<div id="seat-${i}" class="py-3 border bg-white text-center">${i+1}</div>
							</div>`;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
		case '5':
			quantityStudents.disabled = true;
			temp = `<div class="mb-3 row row-cols-6 g-3">`;
			temp += `<div class="col"></div><div class="col"></div><div class="col"></div>`;
			for(i=0 ; i < 25 ; i++){
				temp += `	<div class="col">
								<div id="seat-${i}" class="py-3 border bg-white text-center">${i+1}</div>
							</div>`;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
		case '6':
			quantityStudents.disabled = true;
			temp = `<div class="mb-3 row row-cols-8 g-3">`;
			for(i=0 ; i < 26 ; i++){
				temp += `	<div class="col">
								<div id="seat-${i}" class="py-3 border bg-white text-center">${i+1}</div>
							</div>`;
				temp += (i==7||i==13||i==19)? `<div class="col"></div><div class="col"></div>`:``;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
	}
}

function randomFunc(){
    
}