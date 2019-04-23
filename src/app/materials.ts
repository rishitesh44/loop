import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatTableModule, MatInputModule, RouterModule, MatListModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatTableModule, MatInputModule, RouterModule, MatListModule, MatSelectModule],
})
export class MaterialModule {}
