import React from 'react'
import { TABLE_COLUMS_WIDTH } from '../../../../settings'
import { ITableHeader } from '../../interfaces'
import style from '../../styles/table.module.scss'

const TableHead:React.FC<ITableHeader> = ({headers}) => {

  return (
    <thead className={style['table_head']}>
      <tr className={style['table_head__row']}>
        {headers.map((header) => (
          <th key={header.id} className={style['table_head__item']} style={{width: `${TABLE_COLUMS_WIDTH[header.type]}`}}>
            <span className={style['table_head__item--text']}>
              {header.title}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead