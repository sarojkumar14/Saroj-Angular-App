import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

//google map
import { AgmCoreModule } from '@agm/core'; 
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

//html editor
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { PagesRoutingModule } from './pages-routing.module';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { HtmlEditorComponent } from './html-editor/html-editor.component';

@NgModule({
  imports: [ PagesRoutingModule,FormsModule,CommonModule,AgmCoreModule.forRoot({
    apiKey: 'AIzaSyBiFfR3s97MECE1QV5PDX76EsfE4XfuYyY'
  }), AgmSnazzyInfoWindowModule
,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot() ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    GooglemapComponent,
    HtmlEditorComponent
  ]
})
export class PagesModule { }
