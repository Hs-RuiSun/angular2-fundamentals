import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppFormComponent } from './form/app-form.component';
import { OnChangesParentComponent } from './lifecycle-hook/on-changes-parent.component';
import { OnChangesComponent } from './lifecycle-hook/on-changes.component';
import { ObservableComponent } from './observable&RxJS/observable.component';
import { SizerComponent } from './template-syntax/sizer.component';
import { LifeCycleComponent } from './lifecycle-hook/lifecycle-component';
import { LoggerComponent } from './message/logger.component';


@NgModule({
  declarations: [
    AppComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    AppFormComponent,
    ObservableComponent,
    SizerComponent,
    LifeCycleComponent,
    LoggerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
