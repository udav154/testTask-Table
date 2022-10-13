import React from 'react'
import { Flex } from '@adobe/react-spectrum'
import Link from '../../../components/Link'
import { NAVBAR_MENU } from '../../../settings'
import { INavBarProps } from '../interfaces'
import style from '../styles/navbar.module.scss'

const Navbar: React.FC<INavBarProps> = ({ }) => {

  return (
    <>
      <Flex UNSAFE_className={style.nav_links}>
        {NAVBAR_MENU.map(({ to, title, id }) => {
          return (
            <Link key={id} variantClass='nav_link' to={to} >
              {title}
            </Link>
          )
        })}
      </Flex>
    </>
  )
}

export default Navbar