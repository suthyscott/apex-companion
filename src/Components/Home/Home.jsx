import { useState, useEffect } from "react"
import FilterForm from "./FilterForm"
import LegendDisplay from "./LegendDisplay"
import axios from "axios"

const Home = () => {
  const [displayLegend, setDisplayLegend] = useState({})

  const getRandomLegend = async () => {
    console.log('hit')
    const res = await axios.get('/api/randomLegend')
    setDisplayLegend(res.data)
  }
  return (
    <div className="flex justify-between min-h-[90vh]">
      <LegendDisplay displayLegend={displayLegend} getRandomLegend={getRandomLegend}/>
      <FilterForm/>
    </div>
  )
}

export default Home