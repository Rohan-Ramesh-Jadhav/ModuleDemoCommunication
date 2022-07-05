import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, DoCheck {
	//user details array
	userDetailsGlobal: any = []
	//input and outputs
	@Input() userDetails:any = [];
	@Input() userEmailGlobale:string = '';

	constructor() { }

	ngDoCheck(): void {
		for(let eachUser in this.userDetails.user)
		{
			if(this.userDetails.user[eachUser]['email']==this.userEmailGlobale){
				this.userDetailsGlobal = this.userDetails.user[eachUser];
			}
		}
	}

	ngOnInit(): void {
		
	}

}
