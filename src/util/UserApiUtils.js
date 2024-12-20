import { API_BASE_URL } from '../constant'
import { request } from './ApiRequest'

export function getCurrentUser () {
  return request({
    url: `${API_BASE_URL}/user`,
    method: 'GET'
  })
}

export function signIn (signInRequest) {
  return request({
    url: `${API_BASE_URL}/user/signIn`,
    method: 'POST',
    body: JSON.stringify(signInRequest)
  })
}

export function signUp (signUpRequest) {
  return request({
    url: `${API_BASE_URL}/user/signUp`,
    method: 'POST',
    body: JSON.stringify(signUpRequest)
  })
}

export function updateUser (updateUserRequest) {
  return request({
    url: `${API_BASE_URL}/user/update`,
    method: 'PUT',
    body: JSON.stringify(updateUserRequest)
  })
}

export function deleteAccount () {
  return request({
    url: `${API_BASE_URL}/user`,
    method: 'PUT'
  })
}

export function sendTempPassword (email) {
  return request({
    url: `${API_BASE_URL}/user/send-temp-password?email=${email}`,
    method: 'POST'
  })
}

export function getReporterList (isActivity, searchType, searchKeyword, page) {
  return request({
    url: `${API_BASE_URL}/user/get-reporter-list-for-publisher?isActivity=${isActivity}&searchType=${encodeURIComponent(
      searchType
    )}&searchKeyword=${encodeURIComponent(searchKeyword)}&page=${page}`,
    method: 'GET'
  })
}

export function createReporter (signUpRequest) {
  return request({
    url: `${API_BASE_URL}/user/create-reporter-for-publisher`,
    method: 'POST',
    body: JSON.stringify(signUpRequest)
  })
}

export function updateReporter (reporterId, signUpRequest) {
  return request({
    url: `${API_BASE_URL}/user/update-reporter-for-publisher?reporterId=${reporterId}`,
    method: 'PUT',
    body: JSON.stringify(signUpRequest)
  })
}

export function deleteReporter (reporterId) {
  return request({
    url: `${API_BASE_URL}/user/delete-reporter-for-publisher?reporterId=${reporterId}`,
    method: 'PUT'
  })
}

export function recoverReporter (reporterId) {
  return request({
    url: `${API_BASE_URL}/user/recover-reporter-for-publisher?reporterId=${reporterId}`,
    method: 'PUT'
  })
}

export function getUserList (
  role = '',
  isActivity = null,
  searchType = '',
  searchKeyword = '',
  page = 0
) {
  const query = new URLSearchParams({
    role,
    isActivity,
    searchType,
    searchKeyword,
    page
  }).toString()
  return request({
    url: `${API_BASE_URL}/user/get-user-list-for-admin?${query}`,
    method: 'GET'
  })
}

export function getUserAction (activityType = '', page = 0) {
  const query = new URLSearchParams({
    activityType,
    page
  }).toString()
  return request({
    url: `${API_BASE_URL}/user/get-user-action?${query}`,
    method: 'GET'
  })
}

export function getActionList (
  activityType = '',
  role = '',
  startDate = '',
  endDate = '',
  searchType = '',
  searchKeyword = '',
  page = 0
) {
  const query = new URLSearchParams({
    activityType,
    role,
    startDate,
    endDate,
    searchType,
    searchKeyword,
    page
  }).toString()
  return request({
    url: `${API_BASE_URL}/user/get-action-list-for-admin?${query}`,
    method: 'GET'
  })
}

export function getActionDetail (actionId) {
  return request({
    url: `${API_BASE_URL}/user/get-action-detail?actionId=${actionId}`,
    method: 'GET'
  })
}
