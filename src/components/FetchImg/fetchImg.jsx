
const API_KEY = '26322794-ee74ff0d80e575e4a05e42d55';
const PER_PAGE = 12;

const fetchImg = (query,page) =>{
   
   return fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`)
   .then(response => {
       if(response.ok) {
           return response.json();
       }

       return Promise.reject(new Error('Нет фото на такой запрос'))
   })
}
export default fetchImg;