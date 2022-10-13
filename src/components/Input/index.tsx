import React from "react"
import { IInputProps } from "./interfaces"
import style from './styles/index.module.scss'

const Input: React.FC<IInputProps> = ({
  variantClass = '',
  type = 'text',
  value = '',
  error = false,
  ...props }) => {

  return (
    <>
      <input type={type} className={style[variantClass]} value={value} data-error={error} {...props} />
    </>
  )
}

export default Input