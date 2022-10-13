import React from 'react'
import { IRenderLevel } from '../../interfaces'
import style from '../../styles/table.module.scss'
import EmptyAdedRow from './EmptyAdedRow'

const RenderLevel: React.FC<IRenderLevel> = ({
  rowData,
  headers,
  renderFieldLevel,
  isEditing,
  addedRow,
  setEditMode,
  checkChildren,
  handleEditAddedRow= () =>{},
  ...props }) => {

  return (
    <>
      <tr className={style['table_body_row']}>
        {headers.map((header) => {
          return (
            <td
              key={header.id}
              data-type={header.title}
              className={style['table_data__item']}
            >
              {renderFieldLevel[header.type]({ rowData, isEditing, setEditMode, ...props })}
            </td>
          )
        })}
      </tr>
      {addedRow?.parent === rowData.id ?
        <EmptyAdedRow headers={headers} addedRow={addedRow} isDrawTree={checkChildren(addedRow.parent)} handleEditAddedRow={handleEditAddedRow} {...props} />
        : null
      }
    </>
  )
}

export default RenderLevel