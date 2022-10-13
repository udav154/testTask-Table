import React from 'react'
import Icon from '../../../../components/Icons'
import { IContetnHead } from '../../interfaces'
import style from '../../styles/index.module.scss'

const ContentHead: React.FC<IContetnHead> = ({currentCategory }) => {

  return (
    <div className={style.content_head}>
      <div className={style.aside_trigger} >
        <div className={style.aside_trigger_text_block}>
          <span className={style.aside_trigger_text}>Название проекта</span>
          <span className={style.aside_trigger_description}>Аббревиатура</span>
        </div>
        <Icon variantIcon={'arrowBottom'} />
      </div>
      <span className={style.content_title}>{currentCategory.title}</span>
    </div>
  )
}

export default ContentHead