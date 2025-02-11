import { inject } from "@angular/core";
import { BackendService } from "../+services/backend.service";
import { GridRequest } from "../+components/grid/models/grid-request";

export class CrudService<TAddRequest,TEditRequest,TRemoveRequest> {
    backend = inject(BackendService);
    apiName='';
    add(data: TAddRequest) {
        return this.backend.post(`api/${this.apiName}/add`, data);
    }
    edit(id: number, data: TEditRequest) {
        return this.backend.put(`api/${this.apiName}/edit/${id}`, data);
    }
    remove(id: number, data:TRemoveRequest) {
        return this.backend.delete(`api/${this.apiName}/remove/${id}`);
    }
    list(request:GridRequest) {
        return this.backend.post(`api/${this.apiName}/list`,request);
    }
    details(id:number){
        return this.backend.get(`api/${this.apiName}/details/${id}`);
    }
}