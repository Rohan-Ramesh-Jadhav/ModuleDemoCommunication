import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'ModuleDemo';

	//global setting members
	isLoggedIn: boolean = false;
	userEmail: string = 'rohanjdhv97@gmail.com';

	//global shared data between the modules and components
	details:any ={
		user:[
			{
				email: 'rohanjdhv97@gmail.com',
				username: 'Rohan.Jadhav',
				password: 'venom@97',
				phno: 8861681649,
				place: 'Bangaluru'
			},
			{
				email: 'rohanjdhv550@gmail.com',
				username: 'Rohan.R',
				password: 'venom@550',
				phno: 7411193649,
				place: 'Bangaluru'
			}
		]
	}

	//login check function
	logInStateFun(loginStatusSent:boolean){
		this.isLoggedIn = loginStatusSent;
	}

	//function to insert the data in the details
	insertDetails(userNewData:any){
		let newData:any =
			{
				'email': userNewData[1],
				'username':userNewData[0],
				'password':userNewData[3],
				'phno':userNewData[2],
				'place':userNewData[4]
			}
		this.details.user.push(newData);
		this.userEmail = userNewData[1];
	}
}
