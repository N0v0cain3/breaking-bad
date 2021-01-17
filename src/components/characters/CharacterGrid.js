import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../UI/Spinner'
const CharacterGrid = ({ items, isLoading }) => {
  console.log(items)
  return isLoading ? <Spinner /> : (
    <section className="cards">
      {
        items.map((item) => {
          return <section><CharacterItem key={item.char_id} item={item}></CharacterItem></section>
        }
        )
      }
    </section>
  )
}

export default CharacterGrid