import { useFetch } from '@vueuse/core';
import { type IApiRequest } from '@/interface/IGlobal'

export const useApi = async (apiOptions: IApiRequest) => {
    const { data, error, isFetching } = await useFetch(`${import.meta.env.VITE_BASE_URL}${apiOptions.endpoint}`, {
        beforeFetch({ options }) {
            options.headers = {
                'accept': 'application/json'
            }
        }
    })[apiOptions.method](apiOptions.body)
    return { data, error, isFetching }
}