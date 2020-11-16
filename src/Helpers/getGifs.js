
export const getGifs = async (category) => {

    try {
        const APIKey = "2xjov0ZRHNKdy5LktxohTzh5hA4aCDSZ";

        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${encodeURI(category)}&limit=10`);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            };
        });
        console.log(gifs)
        return gifs;

    } catch (error) {
        console.error(error);
    }

};