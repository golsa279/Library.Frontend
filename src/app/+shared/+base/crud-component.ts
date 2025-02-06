import { OnInit } from "@angular/core";
import { CrudService } from "./crud-service";
import { TestRequest } from "@angular/common/http/testing";

export class CrudComponent<TRequest,TResponse,TService extends CrudService<TRequest>> {
    constructor(public service:TService){}
    data:TResponse[]|undefined;
    busy=false;
    reload(): void {
      this.busy=true;
      this.service.list().subscribe({
        next:res=>{
          this.busy=false;
          this.data=res as TResponse[];
        }
      });
    }  
}