import { API_BASE_URL } from '../constants'
import { request } from '.Request'

export function createComment (articleId, content) {
  const query = new URLSearchParams({
    articleId,
    content
  }).toString()
  return request({
    url: `${API_BASE_URL}/comment/create?${query}`,
    method: 'POST'
  })
}

export function updateComment (commentId, updatedContent) {
  const query = new URLSearchParams({
    commentId,
    updatedContent
  }).toString()
  return request({
    url: `${API_BASE_URL}/comment/update?${query}`,
    method: 'PUT'
  })
}

export function deleteComment (commentId) {
  const query = new URLSearchParams({ commentId }).toString()
  return request({
    url: `${API_BASE_URL}/comment/delete?${query}`,
    method: 'PUT'
  })
}

export function recoverComment (commentId) {
  const query = new URLSearchParams({ commentId }).toString()
  return request({
    url: `${API_BASE_URL}/comment/recover?${query}`,
    method: 'PUT'
  })
}
