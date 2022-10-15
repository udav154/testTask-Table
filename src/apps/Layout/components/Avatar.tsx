import React from 'react'
import { Menu, MenuTrigger,ActionButton, Item, Flex } from '@adobe/react-spectrum'
import Icon from '../../../components/Icons'
import { IAvatarProps } from '../interfaces'
import style from '../styles/dropdown.module.scss'

const Avatar: React.FC<IAvatarProps> = ({ user }) => {

  const { name, image } = user

  return (
      <MenuTrigger >
        <ActionButton UNSAFE_className={style.avatar_trigger}>
          <Flex UNSAFE_className={style.avatar_togle}>
            <div className={style.avatar_image}>
              <img alt='avatar' src={image} width={28} height={28}/>
            </div>
            <span className={style.avatar_name}>{name}</span>
            <Icon variantIcon={'arrowBottom'} />
          </Flex>
        </ActionButton>
        
        <Menu onAction={(key) => console.log(key)}>
          <Item key="profile">Profile</Item>
          <Item key="enter">Enter</Item>
        </Menu>
      </MenuTrigger>
  )
}

export default Avatar