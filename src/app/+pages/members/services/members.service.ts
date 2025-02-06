import { Injectable } from '@angular/core';
import { CrudService } from '../../../+shared/+base/crud-service';
import { MemberRequest } from '../models/membersRequest';

@Injectable({
  providedIn: 'root'
})
export class MembersService extends CrudService<MemberRequest> {
  override apiName: string='members';
}
