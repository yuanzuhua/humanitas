import { Component, Input } from '@angular/core';
import { AppSettings } from '../core/app.settings';
import { TopicaService } from '../providers/topica.service';

@Component({
    templateUrl: './references-panel.component.html',
    selector: "references-panel"
})
export class ReferencesPanelComponent {

    @Input()
    public data:any;

    constructor(public _settings:AppSettings, 
        private _topicaService:TopicaService)
    {
    }

    save(data: any): void {
        this._topicaService.save(data).subscribe(result => this._topicaService.notifyAll(this.data));
    }

}