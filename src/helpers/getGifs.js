export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=hfz3S6PlqXeyn37R4C9fMFPXZawDQhB4`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });

    return gifs;
}