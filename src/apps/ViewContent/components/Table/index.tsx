import React from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'
import { TABLE_HEADERS } from '../../../../settings'
import { ITable } from '../../interfaces'
import style from '../../styles/table.module.scss'

const Table: React.FC<ITable> = ({ data, ...props }) => {

  return (
    <table className={style.table_main}>
      <TableHead headers={TABLE_HEADERS} />
      <TableBody data={data} headers={TABLE_HEADERS} {...props} />
    </table>
  )
}

export default Table