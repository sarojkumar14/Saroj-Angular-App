import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Library } from '../../_models/index';
import { LibraryService, AuthService } from '../../_services/index';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  form: FormGroup;
  private formValid: boolean = false;
  isAddEnabled: boolean = false;
  libary: Library;
  token = '';
  libData: any;
  constructor(private fb: FormBuilder, private libService: LibraryService, private authService: AuthService) {

    this.token = this.authService.getCurrentUserAccessToken();
    this.libService.getAllLibrary(this.token).subscribe(
      data => {
        console.log(data)
        this.libData = data;
      }, err => { throw err; }
    );


    this.form = this.fb.group({
      libname: ['', Validators.required],
      libdesc: ['', Validators.required],
      libimage: null
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      this.formValid = true;
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('libimage').setValue({
          filename: file.name,
          filetype: file.type,
          fileData: reader.result.split(',')[1]
        });
      };
    } else {
      this.formValid = false;
    }
  }

  ngOnInit() {

  }

  removeItem(id) {
    this.libService.deleteLibrary(id, this.token)
      .subscribe(data => {
        console.log("Data deleted");
      }, err => { throw err; })
  }

  addToggle() {
    this.isAddEnabled = this.isAddEnabled ? false : true;
  }

  onSubmit() {
    this.libary = new Library();
    this.libary.name = this.form.value.libname;
    this.libary.description = this.form.value.libdesc;
    this.libary.image = this.form.value.libimage;
    this.libary.token = this.token;
    this.libService.createLibrary(this.libary)
      .subscribe(data => {
        this.isAddEnabled = false;
        this.libData.push(data);
        console.log(data);
      }, err => { throw err; })
  }
}
