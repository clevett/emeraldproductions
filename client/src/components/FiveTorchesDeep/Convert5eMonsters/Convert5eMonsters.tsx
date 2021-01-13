import React, { useState, useEffect } from "react"
import axios from 'axios'

import SearchBar from '../../SearchBar/SearchBar'

import fuzzySearch from '../../SearchBar/fuzzySearch/fuzzySearch'

const Convert5eMonsters = () => {
  const [monsters] = useState(undefined)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    await axios.get('https://www.dnd5eapi.co/api/monsters/')
    .then(response => {
      const monsterList = response.data.results
      let monsters: any[] = []
      monsterList.map(async (monster: { url: string }) => {
        await axios.get(`https://www.dnd5eapi.co${monster.url}`)
        .then(response => {
          monsters.push(response.data)
        })
      })

      console.log(monsters)
    })
    .catch(error => console.log(error)) 

    //this.onTermSubmit('human')
  }

  return(
    <div>
    </div>
  )
}

export default Convert5eMonsters