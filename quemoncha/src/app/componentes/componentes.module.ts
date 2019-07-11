import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { customTranslateLoader } from '../app.module';
import { NgModule } from '@angular/core';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { BarraInferiorComponent } from './barra-inferior/barra-inferior.component';

@NgModule({
    declarations: [
        BarraSuperiorComponent,
        BarraInferiorComponent
    ],
    exports: [
        BarraSuperiorComponent,
        BarraInferiorComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: customTranslateLoader,
                deps: [HttpClient]
            }
        })
    ]
})
export class ComponentesModule { }