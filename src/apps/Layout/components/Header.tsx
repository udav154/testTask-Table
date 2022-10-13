import React from 'react'
import { useStoreon } from 'storeon/react'
import { Flex } from '@adobe/react-spectrum'
import Button from '../../../components/Buttons'
import Navbar from './Navbar'
import Avatar from './Avatar'
import { headerProps } from '../interfaces'
import { IUser } from '../../../interfaces';
import style from '../styles/header.module.scss'

const Header: React.FC<headerProps> = ({ }) => {
  const { currentUser } = useStoreon<{ currentUser: IUser }>(
    'currentUser'
  )

  React.useEffect(() => {
    console.log('currentUser', currentUser)
  }, [currentUser])

  return (
    <header className={style.header}>
      <Flex justifyContent={'space-between'}  alignItems="center" UNSAFE_className={style.header_wrap}>
        <Flex UNSAFE_className={style.hader_left}>
          <Button variantIcon='menu' variantClass='btnIcon' aria-label="menu" isQuiet />
          <Button variantIcon='customArray' variantClass='btnIcon' aria-label="share" isQuiet />
          <Navbar />
        </Flex>
        <Avatar user={currentUser}/>
      </Flex>
    </header>
  )
}

export default Header