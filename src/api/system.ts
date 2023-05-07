import { get } from '@/utils/request';

export function getUserList() {
  return get('/system/userList');
}
