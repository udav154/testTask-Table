import React, { useState } from 'react'
import { ActionButton } from '@adobe/react-spectrum'
import Icon from '../../../../components/Icons'
import { ILevelButton } from '../../interfaces'
import style from '../../styles/buttons.module.scss'

const LevelButton: React.FC<ILevelButton> = ({ margin = 0,
  typeTree = 0,
  id = 0,
  type = 'row',
  isEditing = false,
  secondLinkFolderTree = 0,
  handeleAddRow = () => { },
  setEditMode = () => { },
  ...props
}) => {
  const [isOpen, setisOpen] = useState(false)
  const customStyles = {
    "--height": `${secondLinkFolderTree * 61}px`,
    marginLeft: margin
  }

  const handleHover = () => {
    if (!isEditing) setisOpen(true)
  }

  const handleBlur = () => {
    if (!isEditing) setisOpen(false)
  }

  const handleClickFolder = () => {
    handeleAddRow({ id, type: 'level' })
  }


  const handleClickFile = () => {
    handeleAddRow({ id, type: 'row' })
  }

  return (
    <div
      className={style.btns_wrap}
      onMouseEnter={handleHover}
      onMouseLeave={handleBlur}
      data-show={isOpen}
      data-editing={isEditing}
      style={customStyles}
    >
      <ActionButton
        UNSAFE_className={style.btn_folder}
        aria-label={'addFolder'}
        data-tree={!!typeTree}
        data-after={!!secondLinkFolderTree}
        data-aaa={`${secondLinkFolderTree * 61}px`}
        onPress={handleClickFolder}
      >
        <Icon variantIcon='folder' />
      </ActionButton>
      <ActionButton
        UNSAFE_className={style.btn_folder_file}
        data-show={isOpen}
        aria-label={'addFolder'}
        onPress={handleClickFile}>
        <Icon variantIcon='file' />
      </ActionButton>
    </div>
  )
}

export default LevelButton