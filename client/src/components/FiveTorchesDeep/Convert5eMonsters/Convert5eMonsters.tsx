import React, { useState, useEffect } from "react"
import axios from 'axios'

import { Card } from "react-bootstrap"

// import SearchBar from '../../SearchBar/SearchBar'

// import fuzzySearch from '../../SearchBar/fuzzySearch/fuzzySearch'

import convertFifthMonsterToFTD from "../helpers/convertFifthMonsterToFTD"

import { MonsterFTD } from "../types/types"

const Convert5eMonsters = () => {
  const [monsters, setMonsters] = useState<{}[] | undefined>(undefined)

  useEffect(() => {
    if(monsters) {
      console.log(monsters)
      console.log(monsters[0])
    }
  }, [monsters])

  useEffect(() => {
    getInitialMonstersFrom5eapi(["goblin", "orc", "wolf"])
  }, [])

  const getInitialMonstersFrom5eapi = async (monsterList:string[]) => {
    let monsterData: {}[] = []

    await monsterList.forEach(async (monster:string) => {
      await axios.get(`https://www.dnd5eapi.co/api/monsters/${monster}`)
      .then((response):void => {
        monsterData.push(convertFifthMonsterToFTD(response.data))
      })
    })

    setMonsters(monsterData)
  }

  //Get All Monsters but the API cuts them short
  //This is probably toooooo much on intitial load
  const getDataFrom5eapi = async () => {
    await axios.get('https://www.dnd5eapi.co/api/monsters/')
    .then(async (response) => {
      const monsterList = response.data.results
      let monsterData: {}[] = []

      await monsterList.forEach(async (monster: { url: string }) => {
        await axios.get(`https://www.dnd5eapi.co${monster.url}`)
        .then((response):void => {
          monsterData.push(convertFifthMonsterToFTD(response.data))
        })
      })
    })
    .catch(error => console.log(error)) 
  }


  const monsterCards = (monsterList: any[] | undefined) => {
    console.log(monsterList)
    if (monsterList) {
      monsterList.map((monster: any) => {
        const { name, size, type, hd } = monster
  
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{size}, {type}</Card.Subtitle>
              <Card.Text>
                HD: {hd}
              </Card.Text>
            </Card.Body>
          </Card>
        )
      })
    } else {
      return "No monsters found"
    }
  }

  return(
    <div>
      {monsterCards(monsters)}
    </div>
  )
}

export default Convert5eMonsters