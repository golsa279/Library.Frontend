import { Component, EventEmitter, Input, input, OnInit, Output } from "@angular/core";
import { CrudService } from "./crud-service";
@Component({
    selector: 'app-details',
    imports: [],
    template: ``
})
export class DetailsComponent<TAddRequest, TEditRequest, TService extends CrudService<TAddRequest, TEditRequest>> implements OnInit {
    ngOnInit(): void {
        console.log(this.id);
        if (this.id) {
            this.service?.details(this.id).subscribe(res => {
                this.initial = res;
                //console.log(res);
                this.initForm();
            });
        }
    }
    initForm(){
    }
    service: TService | undefined;
    initial: any | undefined;
    @Input() id: number = 0;
    @Output() onCancel = new EventEmitter;
    @Input() action: string = '';
    ok(data: any) {
        if (this.action == 'add') {
            let addData = data as TAddRequest;
            return this.service?.add(addData);
        }
        else if (this.action == 'edit') {
            let editData = data as TEditRequest;
            return this.service?.edit(this.id, editData);
        }
        return undefined;
    }
}