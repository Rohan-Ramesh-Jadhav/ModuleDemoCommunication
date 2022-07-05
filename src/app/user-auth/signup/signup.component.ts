import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	//regular expresions
	regExpNum:any = /[0-9]/g;
	regExpEmail:any = /[@.]/g
	//class members
	private userNameState:boolean = false;
	private userEmail: boolean = false;
	private userPhno: boolean = false;
	private userPass: boolean = false;
	private userPlace: boolean = false;
	userNameErr: boolean = false;
	userEmailErr: boolean = false;
	userPhnoErr: boolean = false;
	userPassErr: boolean = false;
	userPlaceErr: boolean = false;

	//input and output variables
	@Output() newResistration = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

  	//selected input style
	changeInputState(inputTag:string):void{
		if(inputTag=='userName')
		{
			this.userNameState = true;
		}
		else if(inputTag=='userEmail'){
			this.userEmail = true;
		}
		else if(inputTag=='userPhno'){
			this.userPhno = true;
		}
		else if(inputTag=='userPass'){
			this.userPass = true;
		}
		else if(inputTag=='userPlace'){
			this.userPlace = true;
		}
	}

	//unset the sellection to the input 
	unsetSelected(inputTag:string):void{
		if(inputTag=='userName')
		{
			this.userNameState = false;
		}
		else if(inputTag=='userEmail'){
			this.userEmail = false;
		}
		else if(inputTag=='userPhno'){
			this.userPhno = false;
		}
		else if(inputTag=='userPass'){
			this.userPass = false;
		}
		else if(inputTag=='userPlace'){
			this.userPlace = false;
		}
	}

	//set the style to the selected and unselected inputs
	changeStyleSelected(inputTag:string):string{
		if(inputTag=='userName')
		{
			if(this.userNameState==false)
			{
				return 'form-control bg-dark text-center text-light my-1';
			}
			else
			{
				return 'form-control text-center my-1';
			}
		}
		else if(inputTag=='userEmail')
		{
			if(this.userEmail==false)
			{
				return 'form-control bg-dark text-center text-light my-1';
			}
			else
			{
				return 'form-control text-center my-1';
			}
		}
		else if(inputTag=='userPhno')
		{
			if(this.userPhno==false)
			{
				return 'form-control bg-dark text-center text-light my-1';
			}
			else
			{
				return 'form-control text-center my-1';
			}
		}
		else if(inputTag=='userPass')
		{
			if(this.userPass==false)
			{
				return 'form-control bg-dark text-center text-light my-1';
			}
			else
			{
				return 'form-control text-center my-1';
			}
		}
		else if(inputTag=='userPlace')
		{
			if(this.userPlace==false)
			{
				return 'form-control bg-dark text-center text-light my-1';
			}
			else
			{
				return 'form-control text-center my-1';
			}
		}
		return 'form-control bg-dark text-center text-light my-1';
	}

	//function to set the user registration
	setUserData(userName:string,email:string,userPhno:string,userPassword:string,userPlace:string):void{
		let Userdata:string[] = []
		if(userName=='' && email=='' && userPhno=='' && userPassword=='' && userPlace=='')
		{
			this.userNameErr = true;
			this.userEmailErr = true;
			this.userPhnoErr = true;
			this.userPassErr = true;
			this.userPlaceErr = true;
		}
		if(userName.match(this.regExpNum))
		{
			this.userNameErr = true;
		}
		else
		{
			Userdata.push(userName);
		}
		
		if(email.match(this.regExpEmail)==null)
		{
			this.userEmailErr = true;
		}
		else
		{
			let emailMatch:any = email.match(this.regExpEmail);
			if(emailMatch.length<2)
			{
				this.userEmailErr = true;
			}
			else
			{
				Userdata.push(email);
			}
		}

		if(userPhno=='' || userPhno.length<10)
		{
			this.userPhnoErr = true;
		}
		else
		{
			Userdata.push(userPhno);
		}

		if(userPassword=='')
		{
			this.userPassErr = true;
		}
		else
		{
			Userdata.push(userPassword);
		}

		if(userPlace=='' || userPlace.match(this.regExpNum))
		{
			this.userPlaceErr = true;
		}
		else
		{
			Userdata.push(userPlace);	
		}

		if(Userdata.length>4)
		{
			this.newResistration.emit(Userdata);
		}
	}

	//set all spans to null
	setAllSpansBack(){
		this.userNameErr = false;
		this.userEmailErr = false;
		this.userPhnoErr = false;
		this.userPassErr = false;
		this.userPlaceErr = false;
	}
}
