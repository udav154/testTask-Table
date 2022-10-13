import React from 'react'
import RenderLevel from './RenderLevel'
import RenderRow from './RenderRow'
import TreeFolderField from './TreeFolderField'
import TableInput from './TableInput'
import { getMargin, getSecondLinkFolderTree, getTypeTree } from '../../../../utils'
import { ITableBody, IRenderField } from '../../interfaces'

const renderRowByType = {
  'level': ({ rowData, ...props }: any) => <RenderLevel key={rowData.id} rowData={rowData} {...props} />,
  'row': ({ rowData, ...props }: any) => <RenderRow key={rowData.id} rowData={rowData} {...props} />
}


const TableBody: React.FC<ITableBody> = ({ data, editingRow, addedRow, ...props }) => {

  const renderFieldLevel = {
    type: ({ rowData, ...props }: IRenderField) => <TreeFolderField  {...rowData} {...props} />,
    title: ({ rowData, ...props }: IRenderField) => <TableInput value={rowData.title} ariaLabel={'title'} {...rowData} {...props} />,
    unit: () => null,
    quantity: () => null,
    unitPrice: () => null,
    price: ({ rowData }: IRenderField) => rowData.price,
  }

  const renderFieldRow = {
    type: ({ rowData, ...props }: IRenderField) => <TreeFolderField {...rowData} {...props} />,
    title: ({ rowData, ...props }: IRenderField) => <TableInput value={rowData.title} ariaLabel={'title'} {...rowData} {...props} />,
    unit: ({ rowData, ...props }: IRenderField) => <TableInput value={rowData.unit} ariaLabel={'unit'} {...rowData} {...props} />,
    quantity: ({ rowData, ...props }: IRenderField) => <TableInput value={rowData.quantity} ariaLabel={'quantity'} {...rowData} {...props}  />,
    unitPrice: ({ rowData, ...props }: IRenderField) => <TableInput value={rowData.unitPrice} ariaLabel={'unitPrice'} {...rowData} {...props} />,
    price: ({ rowData }: IRenderField) => rowData.price,
  }

  return (
    <tbody>
      {data.map((el) => {
        const isEditing = el.id === editingRow?.id
        const row = isEditing ? editingRow : el
        const margin = getMargin(el, data) * 20
        // надо ли рисовать графическую линию между от строчки к строчке под ней 
        const typeTree = getTypeTree(el, data)
        // надо ли рисовать графическую линию если между сестринскими элементами таблицы несколько строк (посчитает сколько строк)
        const secondLinkFolderTree = getSecondLinkFolderTree(row.id, data, addedRow)

        return renderRowByType[el.type]({
          rowData: row,
          renderFieldLevel,
          renderFieldRow,
          isEditing,
          margin,
          typeTree,
          secondLinkFolderTree,
          addedRow,
          ...props
        })
      })}
    </tbody>
  )
}

export default TableBody