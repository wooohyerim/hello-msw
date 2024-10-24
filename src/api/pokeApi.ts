import { delay, http, HttpResponse } from "msw"
import mockdata from "./mockdata"

// 진짜 데이터
export const getPokeList = async() => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1&offset=0")
    const data = await res.json()
    return data
}


const sleep = (timeout:number) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('아무거나')
        },timeout)
    })
}


// mock data
export const getMockPokeList = async() => {
    await sleep(150)
    return mockdata
}



// msw data
// 한번만 인스톨
export const getMSWPokeList = http.get("https://pokeapi.co/api/v2/pokemon?limit=1&offset=0", async ()=>{
    await delay(150)
    return HttpResponse.json(mockdata)
})