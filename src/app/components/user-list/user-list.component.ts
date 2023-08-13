import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit = () => {
    alert(this.profileForm.value);
  };

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias = () => {
    this.aliases.push(this.fb.control(''));
  };
}
