import './App.css'
import { useQuery } from '@tanstack/react-query'
import {  getPokeList } from './api/pokeApi'

function App() {
  const {data} = useQuery({
    queryKey:["pokeList"],
    queryFn:()=>getPokeList()
  })

  return (
    <>
  {JSON.stringify(data)}
    </>
  )
}

export default App
