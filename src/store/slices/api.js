import axios from 'axios';

const API_KEY = 'live_65caNqcO4RblXstT22gc6z7a4CafgqzfFsiWN4pwm287UNdajrH4wAikTDjYwjdW';

const fetchCatImage = async () => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
            params: {
                api_key: API_KEY,
            }
        })

        return response.data[0].url
    } catch (error) {
        console.error('Error fetching cat image:', error)
        throw error
    }
}

export { fetchCatImage }