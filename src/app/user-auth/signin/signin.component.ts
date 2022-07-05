import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	//global members of the class
	//authState will take true if signin, for signup it will take false as value 
	private authState: boolean = true;
	private userNameState:boolean = false;
	private userPassword: boolean = false;
	userEmailErr: boolean = false;
	userPasswordErr: boolean = false;

	//Input and Output Variables
	@Input() userDetails: any = [];
	@Output() loginState = new EventEmitter();
	@Output() passingNewUserData = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	//global member functions of the class
	
	//function to select the signin style
	selectionStyleSignin():string{
		if(this.authState)
		{
			return 'btn btn-gray w-50 overflow-hidden';
		}
		else
		{
			return 'btn btn-dark text-light w-50 overflow-hidden';
		}
	}
	
	//function to select signup style
	selectionStyleSignup():string{
		if(!this.authState)
		{
			return 'btn btn-gray w-50 overflow-hidden';
		}
		else
		{
			return 'btn btn-dark text-light w-50 overflow-hidden';
		}
	}

	//toggler function to set the toggle variable
	toggler(passedState:boolean):void{
		this.authState = passedState;
	}

	//function to send the state to the condition 
	check():boolean{
		return this.authState;
	}

	//selected input style
	changeInputState(inputTag:string):void{
		if(inputTag=='userName')
		{
			this.userNameState = true;
		}
		else if(inputTag=='userPass'){
			this.userPassword = true;
		}
	}

	//unset the sellection to the input 
	unsetSelected(inputTag:string):void{
		if(inputTag=='userName')
		{
			this.userNameState = false;
		}
		else if(inputTag=='userPass'){
			this.userPassword = false;
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
		else
		{
			if(this.userPassword==false)
			{
				return 'form-control bg-dark text-center text-light my-1';
			}
			else
			{
				return 'form-control text-center my-1';
			}
		}
	}

	//check is the user details correct or not
	CheckUserData(userEmail:string, password:string){
		for(let eachKey in this.userDetails.user)
		{
			if(this.userDetails.user[eachKey]['email']==userEmail && this.userDetails.user[eachKey]['password']==password)
			{
				this.loginState.emit(true);
			}
			else
			{
				this.userPasswordErr = true;
			}
		}
	}

	passData(newUserData:[]){
		this.passingNewUserData.emit(newUserData);
	}
}
