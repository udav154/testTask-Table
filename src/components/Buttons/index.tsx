import React from "react"
import { Button as SpecButtom } from "@adobe/react-spectrum"
import classNames from 'classnames'
import Icon from "../Icons"
import { IButtonProps } from './interfaces'
import style from './styles/index.module.scss'

const Button: React.FC<IButtonProps> = ({ variantIcon = '', variantClass = '', iconClass = '', children, ...props }) => {

  const buttonClasses = classNames({
    [style[variantClass]]: true
  })

  return (
    <>
      <SpecButtom variant="primary" UNSAFE_className={buttonClasses} {...props}>
        {variantIcon ?
          <Icon variantIcon={variantIcon} variantClass={iconClass} />
          : null}
        {children}
      </SpecButtom>
    </>
  )
}

export default Button