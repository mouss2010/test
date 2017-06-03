import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ZtotestModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, ZtotestModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}