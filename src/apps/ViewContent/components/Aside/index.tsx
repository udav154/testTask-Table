import React from 'react'
import AsideElement from './AsideElement'
import { IAside } from '../../interfaces'
import style from '../../styles/index.module.scss'

const Aside: React.FC<IAside> = ({ currentCategory, menu, handleChangeCategory }) => {

  return (
    <ul className={style.aside_menu}>
      {menu.map(el => {
        const isCurrent = el.id === currentCategory.id
        return <AsideElement key={el.id} category={el} isCurrent={isCurrent} onClick={ handleChangeCategory}/>
        
      })}
    </ul>
  )
}

export default Aside