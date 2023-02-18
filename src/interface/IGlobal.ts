export interface ISideNavLinks {
    text: string,
    link: string,
    icon: string,
    subMenu?: ISideNavLinks[]
}

export interface IApiRequest {
    method: 'post' | 'get' | 'patch' | 'put' | 'delete'
    body?: any
    endpoint: string
}