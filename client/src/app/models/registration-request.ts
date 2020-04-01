import { Req } from './request';

export interface RegistrationReq extends Req {
    publicKey: string;
}
