import React from 'react'
import { IRenderRow } from '../../interfaces'
import style from '../../styles/table.module.scss'

const RenderRow: React.FC<IRenderRow> = ({ rowData, headers, renderFieldRow, isEditing, setEditMode, ...props }) => {

  return (
    <tr className={style['table_body_row']}>
      {headers.map((header) => {
        return (
          <td
            key={header.id}
            data-type={header.title}
            className={style['table_data__item']}
          >
            {renderFieldRow[header.type]({ rowData, isEditing, setEditMode, ...props  })}
          </td>
        )
      })}
    </tr>
  )
}

export default RenderRow