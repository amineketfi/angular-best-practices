import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { CatalogRepositoryService } from "./catalog-repsitory.service";
import { CatalogComponent } from "./catalog.component";
import { FilterClassService } from "./filter-classes.service";



@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [

  ],
  declarations: [
    CatalogComponent
  ],
  providers: [
    CatalogRepositoryService,
    FilterClassService
  ]
})
export class CatalogModule {};
