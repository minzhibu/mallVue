import request from '@/utils/request.js'

//分页查询
export function selectList(parentId,page, size){
	return request({
		url: '/productCategory/list/'+parentId+'/'+page+'/'+size,
		method: 'get',
	})
}