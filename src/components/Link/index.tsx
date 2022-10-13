import classNames from "classnames"
import React from "react"
import { NavLink } from "react-router-dom"
import Icon from "../Icons"
import { ILinkProps } from './interfaces'
import style from './styles/index.module.scss'

const Link: React.FC<ILinkProps> = ({ variantIcon = '', variantClass = '', iconClass = '', to = '/', children }) => {


  return (
    <>
      <NavLink end to={to} className={({ isActive }) =>
        classNames({
          [style[variantClass]]: true,
          [style.current]: isActive,
        })
      }>
        {variantIcon ?
          <Icon variantIcon={variantIcon} variantClass={iconClass} />
          : null}
        {children}
      </NavLink>
    </>
  )
}

export default Link