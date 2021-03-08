import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './Components/first/first.component';
import { SecondComponent } from './Components/second/second.component';
import { User1Component } from './Components/UserStore/user1/user1.component';
import { User2Component } from './Components/UserStore/user2/user2.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './Store/Reducers/app.reducer';
import { Ngrx1Component } from './Components/Ngrx/ngrx1/ngrx1.component';
import { Ngrx2Component } from './Components/Ngrx/ngrx2/ngrx2.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    User1Component,
    User2Component,
    Ngrx1Component,
    Ngrx2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
