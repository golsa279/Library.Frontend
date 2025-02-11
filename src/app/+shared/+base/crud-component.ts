import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CrudService } from "./crud-service";
import { TestRequest } from "@angular/common/http/testing";
import { GridRequest } from "../+components/grid/models/grid-request";

@Component({
  selector:'app-crud',
  template:''
})
export class CrudComponent<TAddRequest,TEditRequest,TResponse,TService extends CrudService<TAddRequest,TEditRequest>> {
    @Input() selectable:boolean=false;
    @Input() id: number = 0;
    @Output() select=new EventEmitter<any>();
    @Output() onRemove=new EventEmitter<any>();
    service:TService|undefined;
    data:TResponse[]|undefined;
    busy=false;
    action='list'
    current:any={};
    reload(request:GridRequest={page:0,size:5,keyword:''}): void {
      this.busy=true;
      this.service?.list(request).subscribe({
        next:res=>{
          this.busy=false;
          this.data=res as TResponse[];
        }
      }); 
    } 
    add(){
      this.action='add';
    } 
    edit(data:any){
      this.current=data;
      this.action='edit';
    }
    cancel(){
      this.action='list';
      this.reload();
    }

}