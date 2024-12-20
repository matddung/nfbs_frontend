import { API_BASE_URL } from '../constants'
import { request } from '.Request'

export function getGroupCodes () {
  return request({
    url: `${API_BASE_URL}/groupCode/get`,
    method: 'GET'
  })
}

export function createGroupCode (name) {
  const query = new URLSearchParams({ name }).toString()
  return request({
    url: `${API_BASE_URL}/groupCode/create?${query}`,
    method: 'POST'
  })
}

export function updateGroupCode (id, name) {
  const query = new URLSearchParams({ id, name }).toString()
  return request({
    url: `${API_BASE_URL}/groupCode/update?${query}`,
    method: 'PUT'
  })
}

export function deleteGroupCode (id) {
  const query = new URLSearchParams({ id }).toString()
  return request({
    url: `${API_BASE_URL}/groupCode/delete?${query}`,
    method: 'DELETE'
  })
}
