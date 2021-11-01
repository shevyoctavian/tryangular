import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
public UserForm: FormGroup;
  constructor( 
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.UserForm = this.formBuilder.group({
      Nama: [''],
      TTL: [''],
      NIS: [''],
      Agama: [''],
      Alamat: [''],
      Nomor: [''],
      Gender: [''],
    })      
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.createUser(this.UserForm.value);
    this.router.navigate(['list-users']); 
   };
}
