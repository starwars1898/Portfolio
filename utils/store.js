import { create } from "zustand"
import { POST } from "./request"

export const useLogin = create(set => ({
    data: null,
    error: null,
    loading: false,
    fetchData: (url, requestData) => 
        POST(url, requestData, set)
}))