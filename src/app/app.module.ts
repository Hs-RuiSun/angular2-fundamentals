import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { AppFormComponent } from './form/app-form.component';
import { OnChangesParentComponent } from './lifecycle-hook/on-changes-parent.component';
import { OnChangesComponent } from './lifecycle-hook/on-changes.component';
import { ObservableComponent } from './observable&RxJS/observable.component';
import { SizerComponent } from './template-syntax/sizer.component';
import { LifeCycleComponent } from './lifecycle-hook/lifecycle-component';
import { LoggerComponent } from './message/logger.component';
import { ZippyComponent } from './observable&RxJS/zippy.component';
import { ReplyComponent } from './reply/reply.component'
import { ReplyService } from './reply.service'
import { InMemoryDataService } from './in-memory-data.service';



@NgModule({
  declarations: [
    AppComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    AppFormComponent,
    ObservableComponent,
    SizerComponent,
    LifeCycleComponent,
    LoggerComponent,
    ZippyComponent
    ReplyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: false, apiBase: 'api/'})
  ],
  providers: [ReplyService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
