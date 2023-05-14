import { get } from '@/utils/request';

export function getUserList(params: any) {
  return get('/user/list', params);
}
