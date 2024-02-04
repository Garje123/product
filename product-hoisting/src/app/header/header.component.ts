import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../shared/card.service';
import { Product } from '../shared/share.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private prod: ProductService, private http: HttpClient) { }
  myform: FormGroup | any
  id = uuid();
  count = 1;
  title = 'fileupload';
  file_error: any;
  selectedfile: File = null as any;
  selectedFileName = ''
  dasablefile: any = false
  ngOnInit(): void {
    this.myform = new FormGroup({
      image: new FormControl('', Validators.required),
      ProductName: new FormControl('',Validators.required),
      Price: new FormControl('',Validators.required)
    })
  }
  fileupload(event: any) {
    this.file_error = ''
    this.selectedfile = event.target.files[0];
    console.log(this.selectedfile)
    this.selectedFileName = this.selectedfile.name;
    let fileSize = 0
    let ext = null
    fileSize = (Math.round(this.selectedfile.size));
    console.log(fileSize)
    if (fileSize <= 1024 * 100) {
      this.dasablefile = false
      this.file_error = 'Image should be more than 100kb'
    } else {
      ext = this.selectedfile.name.split('?')[0].split('.').pop();
      if (ext == 'mp4' || ext == 'jpg' || ext == 'MP4' || ext == 'JPG' || ext == 'png' || ext == 'PNG') {
        this.dasablefile = true
      } else {
        this.dasablefile = false
        this.file_error = 'plEASE UPLOAD VALID IMAGE OR PDF'
      }
    }

  }
  MyProduct() {
    console.log(this.myform)
    let getproduct = new Product(this.myform.value.image, this.myform.value.ProductName, this.myform.value.Price, this.id, this.count)
    console.log(getproduct)
    this.prod.getObjForm(getproduct)
  }
}


