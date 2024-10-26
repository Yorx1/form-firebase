import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestsComponent } from './pages/quests/quests.component';
import { SessionModule } from '../session/session.module';


@NgModule({
    declarations:[
        QuestsComponent
    ],
    imports: [
        CommonModule,
        SessionModule
    ],
})
export class FormModule { }
