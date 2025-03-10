import { createApi, 
   fetchBaseQuery } from '@reduxjs/toolkit/query/react' ;
const DOGS_API_KEY = 
  'live_7AuEPo1L3lwT7c7A6HtWw6LZsHfC5ytZdAF4ZmPUMNtFtFjqqNI1EBiJynmqEwMg';
// fancy types of api
interface Breed {
  id: string;
  name: string;
  image: { url: string }
}
// 
export const apiSlice = createApi({
  reducerPath: 'api',
// fetchin data
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY);
      return headers;
    }
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder
        .query<Breed[], number|void>({ 
          query(limit=10) {
            return `/breeds?limit=${limit}`;
          },
         }),
    };
  }
});
export const { useFetchBreedsQuery } = apiSlice;
// it has come from endpoint 'fetchBreeds'
// (use[name]Query)
