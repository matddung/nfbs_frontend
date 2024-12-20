import { API_BASE_URL } from '../constants'
import { request } from '.Request'

export function getCategoryArticleList (categoryId, page) {
  return request({
    url: `${API_BASE_URL}/article/category-list?categoryId=${categoryId}&page=${page}`,
    method: 'GET'
  })
}

export function getArticle (articleId) {
  return request({
    url: `${API_BASE_URL}/article/?articleId=${articleId}`,
    method: 'GET'
  })
}

export function searchArticles (
  publisherName = '',
  categoryId = null,
  keyword = '',
  keywordSearchType = '',
  startDate = '',
  endDate = '',
  page = 0
) {
  const query = new URLSearchParams({
    publisherName,
    categoryId,
    keyword,
    keywordSearchType,
    startDate,
    endDate,
    page
  }).toString()
  return request({
    url: `${API_BASE_URL}/article/search?${query}`,
    method: 'GET'
  })
}

export function searchPublisherArticleList (
  publisherName = '',
  writerId = null,
  categoryId = null,
  searchKeyword = '',
  searchType = '',
  page = 0
) {
  const query = new URLSearchParams({
    publisherName,
    writerId,
    categoryId,
    searchKeyword,
    searchType,
    page
  }).toString()
  return request({
    url: `${API_BASE_URL}/article/search-publisher?${query}`,
    method: 'GET'
  })
}

export function createArticle (articleRequest, image = null) {
  const formData = new FormData()
  formData.append('articleRequest', JSON.stringify(articleRequest))
  if (image) formData.append('image', image)

  return request({
    url: `${API_BASE_URL}/article/create`,
    method: 'POST',
    body: formData
  })
}

export function updateArticle (articleId, articleUpdateRequest, image = null) {
  const formData = new FormData()
  formData.append('articleUpdateRequest', JSON.stringify(articleUpdateRequest))
  if (image) formData.append('image', image)

  return request({
    url: `${API_BASE_URL}/article/update?articleId=${articleId}`,
    method: 'PUT',
    body: formData
  })
}

export function deleteArticle (articleId) {
  return request({
    url: `${API_BASE_URL}/article/delete?articleId=${articleId}`,
    method: 'PUT'
  })
}

export function recoverArticle (articleId) {
  return request({
    url: `${API_BASE_URL}/article/recover?articleId=${articleId}`,
    method: 'PUT'
  })
}

export function getArticlesForPublisher (
  categoryId = null,
  writerId = null,
  isActivity = null,
  startDate = '',
  endDate = '',
  searchType = '',
  searchKeyword = '',
  page = 0
) {
  const query = new URLSearchParams({
    categoryId,
    writerId,
    isActivity,
    startDate,
    endDate,
    searchType,
    searchKeyword,
    page
  }).toString()
  return request({
    url: `${API_BASE_URL}/article/get-articles-for-publisher?${query}`,
    method: 'GET'
  })
}

export function getArticlesForAdmin (
  publisherName = '',
  categoryId = null,
  isActivity = null,
  startDate = '',
  endDate = '',
  searchType = '',
  searchKeyword = '',
  page = 0
) {
  const query = new URLSearchParams({
    publisherName,
    categoryId,
    isActivity,
    startDate,
    endDate,
    searchType,
    searchKeyword,
    page
  }).toString()
  return request({
    url: `${API_BASE_URL}/article/get-articles-for-admin?${query}`,
    method: 'GET'
  })
}
