import { Injectable } from '@angular/core';
import { CrudService } from '../../../+shared/+base/crud-service';
import { MemberAddRequest} from '../models/memberAddRequest';
import { MemberEditRequest } from '../models/memberEditRequest';

@Injectable({
  providedIn: 'root'
})
export class MembersService extends CrudService<MemberAddRequest,MemberEditRequest> {
  override apiName: string='members';
}
