import http from '@/utils/request'

export function login( data ) {
  return http.request( {
    method : 'get',
    url : '/login',
    data
  } )
}

export function logout() {
  return http.request( {
    url : '/logout',
    method : 'get'
  } )
}

// *-------------------------------------------

// 用户列表
export function UserList( data ) {
  return http.request( {
    method : 'post',
    url : '/v1/user/list',
    data
  } )
}

export function getInfo( data ) {
  return http.request( {
    method : 'get',
    url : '/getUserInfo',
    data
  } )
}

export function loginHistory() {
  return http.request( {
    url : '/login/history',
    method : 'get'
  } )
}

export function testRequest() {
  return http.request( {
    url : '/test',
    method : 'get'
  } )
}
