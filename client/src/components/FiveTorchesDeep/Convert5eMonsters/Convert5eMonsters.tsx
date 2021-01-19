import React, { useState, useEffect } from "react"
import axios from 'axios'

import { Container, Row } from "react-bootstrap"
import MonsterCards from "../MonsterCards/MonsterCards"
import { MonsterFTD } from "../types/types"

// import SearchBar from '../../SearchBar/SearchBar'

// import fuzzySearch from '../../SearchBar/fuzzySearch/fuzzySearch'

import convertFifthMonsterToFTD from "../helpers/convertFifthMonsterToFTD"
import DriveThruLink from '../../DriveThruLink/DriveThruLink'

const Convert5eMonsters = () => {
  const [monsters, setMonsters] = useState<MonsterFTD[] | undefined>(undefined)
  const [selectedMonsters, setSelectedMonsters] = useState(["goblin", "orc", "wolf"])

  useEffect(() => {
    console.log("USE EFFECT MONSTERS")
    console.log(monsters)
  }, [monsters])

  useEffect(() => {
    getInitialMonstersFrom5eapi(selectedMonsters)
  }, [])

  const getInitialMonstersFrom5eapi = async (monsterList:string[]) => {
    // let monsterData: any[] = []

    await axios.get(`https://www.dnd5eapi.co/api/monsters/goblin`)
      .then((response):void => {
        setMonsters([convertFifthMonsterToFTD(response.data)])
      })

    // await monsterList.forEach(async (monster:string) => {
    //   await axios.get(`https://www.dnd5eapi.co/api/monsters/${monster}`)
    //   .then((response):void => {
    //     monsterData.push(convertFifthMonsterToFTD(response.data))
    //   })
    // })

    // console.log("MONSTER DATA")
    // console.log(monsterData)

    // if(monsterData.length > 0) {
    //   setMonsters(monsterData)
    // } else {
    //   setMonsters(undefined)
    // }
  }

  return(
    <Container className='FTDFifthEditionMonsters content text-white'>
      <Row className='header-row text-center mb-3 justify-content-center w-100'>
        {/* <img alt='bloody pentagram' src={pentagram}></img> */}
        <DriveThruLink id='264584' name='Five Torches Deep Fifth Edition Bestiary' />
        {/* <img alt='bloody pentagram' src={pentagram}></img> */}
      </Row>
      <Row>
        <MonsterCards monsters={monsters} />
      </Row>
    </Container>
  )
}

export default Convert5eMonsters


  //Get All Monsters but the API cuts them short
  //This is probably toooooo much on intitial load
  // const getDataFrom5eapi = async () => {
  //   await axios.get('https://www.dnd5eapi.co/api/monsters/')
  //   .then(async (response) => {
  //     const monsterList = response.data.results
  //     let monsterData: {}[] = []

  //     await monsterList.forEach(async (monster: { url: string }) => {
  //       await axios.get(`https://www.dnd5eapi.co${monster.url}`)
  //       .then((response):void => {
  //         monsterData.push(convertFifthMonsterToFTD(response.data))
  //       })
  //     })
  //   })
  //   .catch(error => console.log(error)) 
  // }