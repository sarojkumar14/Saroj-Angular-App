import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { HtmlEditorComponent } from './html-editor/html-editor.component';
import { FileuploadComponent } from './fileupload/fileupload.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Example Pages'
    },
    children: [
      {
        path: '404',
        component: P404Component,
        data: {
          title: 'Page 404'
        }
      },
      {
        path: '500',
        component: P500Component,
        data: {
          title: 'Page 500'
        }
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register Page'
        }
      },
      {
        path: 'map',
        component: GooglemapComponent,
        data: {
          title: 'map Page'
        }
      },
      {
        path: 'htmleditor',
        component: HtmlEditorComponent,
        data: {
          title: 'Html Editor'
        }
      },
      {
        path: 'fileupload',
        component: FileuploadComponent,
        data: {
          title: 'File upload'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
