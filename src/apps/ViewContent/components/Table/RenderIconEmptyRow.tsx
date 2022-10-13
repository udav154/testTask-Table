import { Flex } from '@adobe/react-spectrum'
import React from 'react'
import Icon from '../../../../components/Icons'
import style from '../../styles/buttons.module.scss'

const RenderIconEmptyRow: React.FC<{
  type: string,
  margin: number,
  isDrawTree?: boolean,
}> = ({
  type = 'row',
  margin = 0,
  isDrawTree = false,
  ...props }) => {

    return (
      <>
        {type === 'level' ?
          <Flex UNSAFE_className={style.empty_folder} UNSAFE_style={{ marginLeft: margin + 24 }} data-tree={isDrawTree}>
            <Icon variantIcon='folder' />
          </Flex>
          :
          <Flex UNSAFE_className={style.empty_folder} UNSAFE_style={{ marginLeft: margin + 24 }} data-tree={isDrawTree}>
            <Icon variantIcon='file' />
          </Flex>
        }
      </>
    )
  }

export default RenderIconEmptyRow