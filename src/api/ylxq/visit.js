import request from '@/utils/request'

// 查询拜访记录列表
export function listVisit(query) {
  return request({
    url: '/system/visit/list',
    method: 'get',
    params: query
  })
}

// 查询拜访记录详细
export function getVisit(id) {
  return request({
    url: '/system/visit/' + id,
    method: 'get'
  })
}

// 新增拜访记录
export function addVisit(data) {
  return request({
    url: '/system/visit',
    method: 'post',
    data: data
  })
}

// 修改拜访记录
export function updateVisit(data) {
  return request({
    url: '/system/visit',
    method: 'put',
    data: data
  })
}

// 删除拜访记录
export function delVisit(id) {
  return request({
    url: '/system/visit/' + id,
    method: 'delete'
  })
}

// 导出拜访记录
export function exportVisit(query) {
  return request({
    url: '/system/visit/export',
    method: 'get',
    params: query
  })
}