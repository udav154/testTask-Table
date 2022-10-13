import React from 'react'
import Input from '../../../../components/Input'
import { ITableInput } from '../../interfaces'
import style from '../../styles/table.module.scss'

const TableInput: React.FC<ITableInput> = ({ id = 0,
  value = '',
  isEditing = false,
  setEditMode = () => { },
  handleEditingRow = () => { },
  ariaLabel = 'input',
  step='',
  type='',
  isErrorFied = {},
  ...props }) => {
    
  const isError = ariaLabel in isErrorFied ? isErrorFied[ariaLabel] : false
  return (
    <>
      {!isEditing ?
        <span className={style.table_row_text} onDoubleClick={() => setEditMode(id)}>
          {value}
        </span>
        :
        <Input variantClass='input_table_text' value={value} onInput={handleEditingRow} aria-label={ariaLabel} error={isError} step={step} type={type}/>
      }
    </>
  )
}

export default TableInput