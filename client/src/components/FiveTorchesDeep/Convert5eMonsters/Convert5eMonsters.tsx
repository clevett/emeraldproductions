import React, { useState, useEffect } from "react"
import axios from 'axios'

import { Card } from "react-bootstrap"

import SearchBar from '../../SearchBar/SearchBar'

import fuzzySearch from '../../SearchBar/fuzzySearch/fuzzySearch'

import convertFifthToFTD from '../helpers/convertFifthToFTD'

const Convert5eMonsters = () => {
  const [fifthEditionData, setFifthEditionData] = useState<{}[] | undefined>(undefined)
  const [monsters] = useState(undefined)

  useEffect(() => {
    getDataFrom5eapi()
  }, [])

  useEffect(() => {
    if(fifthEditionData) {
      convertFifthToFTD(fifthEditionData)
    }
  }, [fifthEditionData])

  const getDataFrom5eapi = async () => {
    await axios.get('https://www.dnd5eapi.co/api/monsters/')
    .then(async (response) => {
      const monsterList = response.data.results
      let monsterData: {}[] = []

      await monsterList.forEach(async (monster: { url: string }) => {
        await axios.get(`https://www.dnd5eapi.co${monster.url}`)
        .then((response):void => {
          monsterData.push(response.data)
        })
      })

      setFifthEditionData(monsterData)
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