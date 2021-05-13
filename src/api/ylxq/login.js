import request from '@/utils/request'

// 查询【请填写功能名称】列表
export function listLogin(query) {
  return request({
    url: '/system/login/list',
    method: 'get',
    params: query
  })
}

// 查询【请填写功能名称】详细
export function getLogin(id) {
  return request({
    url: '/system/login/' + id,
    method: 'get'
  })
}

// 新增【请填写功能名称】
export function addLogin(data) {
  return request({
    url: '/system/login',
    method: 'post',
    data: data
  })
}

// 修改【请填写功能名称】
export function updateLogin(data) {
  return request({
    url: '/system/login',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delLogin(id) {
  return request({
    url: '/system/login/' + id,
    method: 'delete'
  })
}

// 导出【请填写功能名称】
export function exportLogin(query) {
  return request({
    url: '/system/login/export',
    method: 'get',
    params: query
  })
}