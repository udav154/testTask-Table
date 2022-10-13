import React from "react"
import { ReactComponent as MenuIcon } from '../../assets/icons/menuIcon.svg'
import { ReactComponent as ArrowBottomIcon } from '../../assets/icons/arrowBottomIcon.svg'
import { ReactComponent as CustomArrowIcon } from '../../assets/icons/customArrowIcon.svg'
import { ReactComponent as ListElementIcon } from '../../assets/icons/listElementIcon.svg'
import { ReactComponent as FileIcon } from '../../assets/icons/fileIcon.svg'
import { ReactComponent as FolderIcon } from '../../assets/icons/folderIcon.svg'
import { IconProp, IvariantsIcons } from "./interfaces"
import style from './styles/index.module.scss'


const variantsIcons: IvariantsIcons = {
  'menu': <MenuIcon />,
  'file': <FileIcon />,
  'folder': <FolderIcon />,
  'arrowBottom': <ArrowBottomIcon />,
  'customArray': <CustomArrowIcon />,
  'listElement': <ListElementIcon />
}

const Icon: React.FC<IconProp> = ({ variantIcon = 'menu', variantClass = 'default' }) => {

  return (
    <div className={style[variantClass]}>
      {variantsIcons[variantIcon]}
    </div>
  )
}

export default Icon