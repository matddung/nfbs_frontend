import { API_BASE_URL } from '../constants'
import { request } from '.Request'

export function createReply (commentId, content) {
  const query = new URLSearchParams({
    commentId,
    content
  }).toString()
  return request({
    url: `${API_BASE_URL}/reply/create?${query}`,
    method: 'POST'
  })
}

export function updateReply (replyId, updatedContent) {
  const query = new URLSearchParams({
    replyId,
    updatedContent
  }).toString()
  return request({
    url: `${API_BASE_URL}/reply/update?${query}`,
    method: 'PUT'
  })
}

export function deleteReply (replyId) {
  const query = new URLSearchParams({ replyId }).toString()
  return request({
    url: `${API_BASE_URL}/reply/delete?${query}`,
    method: 'PUT'
  })
}

export function recoverReply (replyId) {
  const query = new URLSearchParams({ replyId }).toString()
  return request({
    url: `${API_BASE_URL}/reply/recover?${query}`,
    method: 'PUT'
  })
}
