import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  @ViewChild('prgpass') prgpass: ElementRef;

  signupForm:FormGroup;
  passwordcalc:boolean;
  passwordstreingth:any;
  passstrenth:any;
  passscore:any;
  prgcol:any;
  inputtype:string = 'password';
  visibilityicon:string = 'visibility';

  constructor(private _AuthenticationService : AuthenticationService, private router: Router,public location: Location, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      password: new FormControl('')
  });
  }


  
   scorePassword(pass) {
    var score:number = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    var variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return score;
}

checkPassStrength(pass) {
    var score = this.scorePassword(pass);
		if (score > 80)
		{
			return "Strong";
		}
		if (score > 60)
		{
			return "Good";
		}
		if (score >= 30)
		{
			return "Weak";
		}
	
		
    return "";
}

ColorPassword(pass) {
    var score = this.scorePassword(pass);
    if (score > 80)
        return "green";
    if (score > 60)
        return "#FFDB00";
    if (score >= 30)
        return "red";

    return "";
}



  VerifyPasswordStariength(inpfield)
  {
    if(!inpfield || inpfield === '')
		this.passwordcalc = false;
		else
		this.passwordcalc = true;
	
		    this.passstrenth = (this.checkPassStrength(inpfield));
        this.passscore = (this.scorePassword(inpfield))+'%';
        this.prgcol = (this.ColorPassword(inpfield));
        
  }
  
 

  showHidePassword()
  {
    if(this.inputtype == 'password')
    {
      this.inputtype = 'text';
      this.visibilityicon = 'visibility_off';
    }
    else
    {
      this.inputtype = 'password';
      this.visibilityicon = 'visibility';
    }
  }

  backToSignin()
  {
    this.location.back();
  } 

  MemberDetails(memberdetails)
  {
    this._AuthenticationService.saveMemberDetails(memberdetails.value).subscribe(
      data => {
        console.log(data);
      })
  }

}
