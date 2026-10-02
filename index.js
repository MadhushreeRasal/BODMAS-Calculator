function result(input){
	//Variables declaration
	let equation; 
	let eq;
	
	//making backspace work
	if(input == '<'){
		//display the numbers entered on the claculator screen
		equation = document.getElementById('display').value;
		//minus the last value cause of backspace
		let a = equation.slice(0, -1); 
		document.getElementById('display').value= a; //Display the modified equation
		equation = a;
	}else{
			equation = document.getElementById('display').value += input;
			let b = equation.slice(0,-1);
			console.log(b);
			//separating the operators and operands
			eq = b.split(/([+-/*=])/); 
		
		//once the "=" is pressed the equation is ready to be processed 
		if(input == '='){
			let storeresult; //store the calculated result
			//now we calculate
			for(let i = 0; i<eq.length; i++){
				//multiplication and division first - BODMAS rule
				if(eq[i] == '*' || eq[i] == '/'){
					let x=1;
					
					//search till first value/operand is found
					while(eq[i - x] === null){
						x++;
					}
					// Actual calculations
					let no1 = eq[i - x];// store the first operand
				
					let no2 = eq[i + 1];// second operand
					storeresult;
					if(eq[i] == '*'){
						storeresult = Number(no1) * Number(no2);
						console.log(storeresult);
						eq[i - x] = storeresult;// store the calculator values in place of the 1st operand 
					}else{
						storeresult = Number(no1) / Number(no2);
						console.log(storeresult);
						eq[i - x] = storeresult; // store the calculator values in place of the 1st operand 
					}
					
					// Make the already calculated array value null so the values are not calculated again by mistake
					eq[i + 1]= null;
					eq[i]= null;
				}
			}
			
			for(let i=0; i<eq.length; i++){
				//addition and substraction second BODMAS rule 
				if(eq[i] == '+' || eq[i] == '-'){
					let x = 1;
					
					//search till first value/operand is found 
					while(eq[i - x] === null){
						x++;
					}
					
					// Actual calculations
						let no1 = eq[i - x]; // store the first operand
					
						let no2 = eq[i + 1]; // second operand
						storeresult;
						if(eq[i] == '+'){
							storeresult = Number(no1) + Number(no2);
							console.log(storeresult);
							eq[i - x] = storeresult;// store the calculator values in place of the 1st operand 
						}else{
							storeresult = Number(no1) - Number(no2);
							console.log(storeresult);
							eq[i - x] = storeresult;// store the calculator values in place of the 1st operand 
						}
					
					// Make the already calculated array value null so the values are not calculated again  by mistake
					eq[i + 1]= null;
					eq[i]= null;
				}
			}
			
			//display the final result 
			document.getElementById('display').value= storeresult;
		}
	}
	
}
