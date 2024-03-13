const apiKey = 'FmwH69436DfQMYhIQsuNFmxhQfA5koFH&q';




export default function apiObGifs({ keyword = 'die bart' } = {}) {

    const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;


    return fetch(urlApi)
        .then(obj => obj.json())
        .then(response => {

            const { data = [] } = response;

            const gifs = data.map(image => {
                const { images, title, id } = image;
                const { url, frames, hash } = images.original;
                return { title, id, url, frames, hash };
            });
            return gifs;



        });
}
