import { createFetch } from '@vueuse/core';

const useMyFetch = createFetch({

    baseUrl: 'http://127.0.0.1:8000/api/',
    options: {
        async beforeFetch({ options }) {
            options.method = 'post'
            options.headers = {
                'Authorization': 'token',
                'accept': 'application/json'
            }
            return { options }
        },
    },
    fetchOptions: {
        mode: 'cors',
    },
})

export default useMyFetch