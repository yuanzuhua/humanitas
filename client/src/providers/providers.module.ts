import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopicaService } from './topica.service';
import { ZeteticaService } from './zetetica.service';
import { UserService } from './user.service';

@NgModule({
    declarations: [ ],
    exports: [ ],
    imports: [
        CommonModule
    ],
    providers: [ TopicaService, ZeteticaService, UserService ]
})
export class ProvidersModule { }
