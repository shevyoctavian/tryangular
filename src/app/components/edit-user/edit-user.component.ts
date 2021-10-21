import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public editForm: FormGroup;
  userRef: any

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      Nama: [''],
      TTL: [''],
      NIS: [''],
      Agama: [''],
      Alamat: [''],
      Nomor: [''],
      Gender:[''],
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.userService.getUserDoc(id).subscribe(res => {
      this.userRef = res;
      this.editForm = this.formBuilder.group({
        Nama: [this.userRef.Nama],
        TTL: [this.userRef.TTL],
        NIS: [this.userRef.NIS],
        Agama: [this.userRef.Agama],
        Alamat: [this.userRef.Alamat],
        Nomor: [this.userRef.Nomor],
        Gender: [this.userRef.Gender],
      })      
    })
  }


  

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    
    this.userService.updateUser(this.editForm.value, id);
    this.router.navigate(['list-users']);
  };

}
