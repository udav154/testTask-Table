import React from 'react'
import Icon from '../../../../components/Icons'
import { IAsideElement } from '../../interfaces'
import style from '../../styles/index.module.scss'

const AsideElement: React.FC<IAsideElement> = ({ category, isCurrent, onClick }) => {
  const { id, title } = category

  return (
    <li className={style.aside_element}>
      <button className={style.aside_element_btn} data-active={isCurrent} onClick={()=>{onClick(id)}} >
        <Icon variantIcon='listElement' />
        <span className={style.item_text}>
          {title}
        </span>
      </button>
    </li>
  )
}

export default AsideElement