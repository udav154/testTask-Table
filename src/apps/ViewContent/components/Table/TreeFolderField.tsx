import React from 'react'
import { Flex } from '@adobe/react-spectrum'
import LevelButton from './LevelButton'
import Icon from '../../../../components/Icons'
import { ITreeFolderField } from '../../interfaces'
import style from '../../styles/buttons.module.scss'

const TreeFolderField: React.FC<ITreeFolderField> = ({ type = 'row', margin = 0, typeTree = 0, id = 0,  ...props }) => {
  return (
    <>
      {type === 'level' ?
        <LevelButton type={type} margin={margin} typeTree={typeTree} id={id} {...props} />
        :
        <Flex UNSAFE_className={style.btn_file} UNSAFE_style={{ marginLeft: margin }} data-tree={!!typeTree}>
          <Icon variantIcon='file' />
        </Flex>
      }
    </>
  )
}

export default TreeFolderField