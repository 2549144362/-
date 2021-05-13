import request from '@/utils/request'

// 查询【请填写功能名称】列表
export function listDynamic(query) {
  return request({
    url: '/system/dynamic/list',
    method: 'get',
    params: query
  })
}

// 查询【请填写功能名称】详细
export function getDynamic(id) {
  return request({
    url: '/system/dynamic/' + id,
    method: 'get'
  })
}

// 新增【请填写功能名称】
export function addDynamic(data) {
  return request({
    url: '/system/dynamic',
    method: 'post',
    data: data
  })
}

// 修改【请填写功能名称】
export function updateDynamic(data) {
  return request({
    url: '/system/dynamic',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delDynamic(id) {
  return request({
    url: '/system/dynamic/' + id,
    method: 'delete'
  })
}

// 导出【请填写功能名称】
export function exportDynamic(query) {
  return request({
    url: '/system/dynamic/export',
    method: 'get',
    params: query
  })
}