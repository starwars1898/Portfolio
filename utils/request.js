import axios from "axios"

export const POST = async (url, data, set) => {

    const config = {
        headers: {
          'Content-Type': 'application/json',
        //   'Authorization': 'Bearer your_token_here'
        }
    }

    set({ loading: true })

    const request = await axios.post(
        url,
        data,
        config
    )
    .then((res) => {
        set({ data: res.data, loading: false })
    })
    .catch((error) => {
        set({ error: error.message, loading: false })
    })

    return request
}