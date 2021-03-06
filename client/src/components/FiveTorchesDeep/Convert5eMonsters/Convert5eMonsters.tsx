import React, { useState, useEffect } from "react"

import { Container, Row } from "react-bootstrap"
import MonsterCard from "../MonsterCard/MonsterCard"
import NoMonsterFound from "../MonsterCard/NoMonsterFound"
import { MonsterFTD } from "../types/ftdTypes"

import data from "./data/monsters"
import './Convert5eMonsters.scss'

import convertFifthMonsterToFTD from "./helpers/convertFifthMonsterToFTD"
import DriveThruLink from '../../DriveThruLink/DriveThruLink'

import SearchBar from '../../SearchBar/SearchBar'
import fuzzySearch from '../../SearchBar/fuzzySearch/fuzzySearch'

import logo from "../logo.jpg"

const Convert5eMonsters = () => {
  const [monsters, setMonsters] = useState<MonsterFTD[] | undefined>(undefined)
  const [filteredMonsters, setFilteredMonsters] = useState<any[] | null> (null)

  useEffect(() => {
    if(monsters) {
      onTermSubmit("Goblin")
    }
  }, [monsters])

  useEffect(() => {
    setAllMonsters()
  }, [])

  const setAllMonsters = async () => {
    const ftdMonsters = await data.map(monster => convertFifthMonsterToFTD(monster))
    setMonsters(ftdMonsters)
  }

  const renderedList = () => {
    if(filteredMonsters) {
      return filteredMonsters.map(monster => <MonsterCard key={monster.name} monster={monster} />)
    } else {
      return <NoMonsterFound />
    }
  }

  const onTermSubmit = (term:string):void => {
    const keys = ["name", "size", "type", "hd"]
    const results = fuzzySearch(monsters, term, keys)
    setFilteredMonsters(results)
  }

  return(
    <Container className='FTDFifthEditionMonsters content text-white'>
      <Row className='header-row text-center mb-3 justify-content-center w-100'>
        <img alt='five with a torch flame' src={logo}></img>
        <DriveThruLink id='264584' name='Five Torches Deep' />
        <h1 className='mb-0'>Fifth Edition Bestiary</h1>
        <img alt='five with a torch flame' src={logo}></img>
      </Row>
      <Row className='justify-content-center'>
        <SearchBar onTermSubmit={onTermSubmit} />
      </Row>
      <Row>
        {renderedList()}
      </Row>
    </Container>
  )
}

export default Convert5eMonsters
