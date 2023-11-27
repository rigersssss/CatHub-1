import axios from 'axios';

const API_KEY = 'live_65caNqcO4RblXstT22gc6z7a4CafgqzfFsiWN4pwm287UNdajrH4wAikTDjYwjdW';

const fetchCatImages = async () => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10', {
            params: {
                api_key: API_KEY,
            }
        })
        return response.data
    } catch (error) {
        console.error('Error fetching cat image:', error)
        throw error
    }
}

export { fetchCatImages }