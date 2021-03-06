import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as userComponent from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import * as material from '@angular/material';
import { FoodComponent,AddNewData } from './food/food.component';
import { ReportsComponent } from './reports/reports.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsComponent } from './charts/charts.component';
import { SearchFilterPipe } from './reports/search.pipe';
import { MatPaginatorIntlCro } from './matClass';
import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from '../@core/material.persian-date.adapter';
import { BoxComponent } from './box/box.component';

const routes: Routes = [
  { path: 'user', component: userComponent.UserComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'food-manage', component: FoodComponent},
  { path: 'charts', component: ChartsComponent }

];
// hi
@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [userComponent.UserComponent,AddNewData, FoodComponent, ReportsComponent, ChartsComponent, userComponent.TheUserComponent, SearchFilterPipe, BoxComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    material.MatIconModule,
    material.MatAutocompleteModule,
    material.MatCardModule,
    material.MatTabsModule,
    material.MatChipsModule,
    material.MatSelectModule,
    material.MatFormFieldModule,
    material.MatInputModule,
    material.MatButtonModule,
    material.MatTableModule,
    material.MatPaginatorModule,
    material.MatIconModule,
    material.MatDialogModule,
    material.MatCheckboxModule,
    material.MatToolbarModule,
    FormsModule,
    material.MatSlideToggleModule,
    material.MatButtonToggleModule,
    material.MatDatepickerModule,
    material.MatRippleModule,
    material.MatRadioModule,
    material.MatProgressSpinnerModule,
    material.MatListModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: material.MatPaginatorIntl, useClass: MatPaginatorIntlCro},
    { provide: material.DateAdapter, useClass: MaterialPersianDateAdapter, deps: [material.MAT_DATE_LOCALE] },
    { provide: material.MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS }
  ],
  entryComponents: [userComponent.TheUserComponent,AddNewData]
})
export class MicropanelModule { }
