import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestsComponent } from './pages/quests/quests.component';
import { HomeComponent } from './pages/home/home-page.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        QuestsComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    exports: [
        HomeComponent
    ]


})
export class FormModule { }
