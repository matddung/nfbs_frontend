import { API_BASE_URL } from '../constants'
import { request } from '.Request'

export function getCodes (groupCodeId = null) {
  const query = new URLSearchParams({ groupCodeId }).toString()
  return request({
    url: `${API_BASE_URL}/code/get?${query}`,
    method: 'GET'
  })
}

export function createCode (groupCodeId, name) {
  const query = new URLSearchParams({ groupCodeId, name }).toString()
  return request({
    url: `${API_BASE_URL}/code/create?${query}`,
    method: 'POST'
  })
}

export function updateCode (codeId, name = '', groupCodeId = null) {
  const query = new URLSearchParams({
    codeId,
    name,
    groupCodeId
  }).toString()
  return request({
    url: `${API_BASE_URL}/code/update?${query}`,
    method: 'PUT'
  })
}

export function deleteCode (codeId) {
  const query = new URLSearchParams({ codeId }).toString()
  return request({
    url: `${API_BASE_URL}/code/delete?${query}`,
    method: 'PUT'
  })
}

export function recoverCode (codeId) {
  const query = new URLSearchParams({ codeId }).toString()
  return request({
    url: `${API_BASE_URL}/code/recover?${query}`,
    method: 'PUT'
  })
}
