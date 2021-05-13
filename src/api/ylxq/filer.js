import request from '@/utils/request'

// 查询【请填写功能名称】列表
export function listFiler(query) {
  return request({
    url: '/system/filer/list',
    method: 'get',
    params: query
  })
}

// 查询【请填写功能名称】详细
export function getFiler(id) {
  return request({
    url: '/system/filer/' + id,
    method: 'get'
  })
}

// 新增【请填写功能名称】
export function addFiler(data) {
  return request({
    url: '/system/filer',
    method: 'post',
    data: data
  })
}

// 修改【请填写功能名称】
export function updateFiler(data) {
  return request({
    url: '/system/filer',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delFiler(id) {
  return request({
    url: '/system/filer/' + id,
    method: 'delete'
  })
}

// 导出【请填写功能名称】
export function exportFiler(query) {
  return request({
    url: '/system/filer/export',
    method: 'get',
    params: query
  })
}