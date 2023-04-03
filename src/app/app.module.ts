import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShortPipe } from './short.pipe';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CustomDirective } from './custom.directive';
import { BrojeviDirective } from './brojevi.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavigationComponent,
    SidebarComponent,
    ShortPipe,
    CourseDetailsComponent,
    CustomDirective,
    BrojeviDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
