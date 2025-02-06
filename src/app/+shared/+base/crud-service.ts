import { inject } from "@angular/core";
import { BackendService } from "../+services/backend.service";

export class CrudService<TRequest> {
    backend = inject(BackendService);
    apiName='';
    add(data: TRequest) {
        return this.backend.post(`api/${this.apiName}/add`, data);
    }
    edit(id: number, data: TRequest) {
        return this.backend.put(`api/${this.apiName}/edit/${id}`, data);
    }
    remove(id: number) {
        return this.backend.delete(`api/${this.apiName}/remove/${id}`);
    }
    list() {
        return this.backend.post(`api/${this.apiName}/list`, {});
    }
}