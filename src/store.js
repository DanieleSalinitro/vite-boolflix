import {reactive} from 'vue'; 
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/', 
    endPoint: {
        movie: 'search/movie',
        tv: 'search/tv'
    }, 
    options: {
        params: {
            api_key: 'f44e950b1df9ad1447febc19b512559c',
            query: 'a',
        }
    }
})