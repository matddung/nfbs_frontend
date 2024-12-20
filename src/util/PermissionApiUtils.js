import { API_BASE_URL } from '../constants'
import { request } from '.Request'

export function getPermissions (roleCodeId) {
  const query = new URLSearchParams({ roleCodeId }).toString()
  return request({
    url: `${API_BASE_URL}/permission/get?${query}`,
    method: 'GET'
  })
}

export function updatePermission (roleCodeId, permissionUpdates) {
  return request({
    url: `${API_BASE_URL}/permission/update?roleCodeId=${roleCodeId}`,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(permissionUpdates)
  })
}
