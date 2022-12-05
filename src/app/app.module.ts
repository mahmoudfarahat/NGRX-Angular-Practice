import { appReducer } from './store/app.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { LoggingService } from './logging.service';
import {StoreModule} from '@ngrx/store'
import { ShoppingListReducer } from './shopping-list/store/shopping-list.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromApp from './store/app.reducer'
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
     StoreModule.forRoot(fromApp.appReducer),
     StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),

  ],
  bootstrap: [AppComponent],
  // providers: [LoggingService]
})
export class AppModule {}
