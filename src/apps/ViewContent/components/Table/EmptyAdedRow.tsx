import React from 'react'
import RenderIconEmptyRow from './RenderIconEmptyRow'
import Input from '../../../../components/Input'
import { NewRowData } from '../../../../interfaces'
import { IEmptyAdedRow, IRenderField } from '../../interfaces'
import style from '../../styles/table.module.scss'



const EmptyAdedRow: React.FC<IEmptyAdedRow> = ({
  headers,
  addedRow,
  isErrorFied={},
  handleEditAddedRow,
  ...props }) => {
    
  const renderLevel: { [key: string]: any } = {
    type: ({ rowData, ...props }: IRenderField) => <RenderIconEmptyRow  {...rowData} {...props} />,
    title: ({ rowData, ...props }: IRenderField) => <Input variantClass='input_table_text' value={rowData.title} onInput={handleEditAddedRow} aria-label={'title'} error={isErrorFied?.title}/>,
    unit: () => null,
    quantity: () => null,
    unitPrice: () => null,
    price: () => 0,
  }

  const renderRow: { [key: string]: any } = {
    type: ({ rowData, ...props }: IRenderField) => <RenderIconEmptyRow {...rowData} {...props} />,
    title: ({ rowData, ...props }: IRenderField) => <Input variantClass='input_table_text' value={rowData.title} onInput={handleEditAddedRow} aria-label={'title'} error={isErrorFied?.title}/>,
    unit: ({ rowData, ...props }: IRenderField) => <Input variantClass='input_table_text' value={rowData.unit} onInput={handleEditAddedRow} aria-label={'unit'} error={isErrorFied?.unit}/>,
    quantity: ({ rowData, ...props }: IRenderField) => <Input variantClass='input_table_text' value={rowData.quantity} onInput={handleEditAddedRow} aria-label={'quantity'}/>,
    unitPrice: ({ rowData, ...props }: IRenderField) => <Input variantClass='input_table_text' value={rowData.unitPrice} onInput={handleEditAddedRow} aria-label={'unitPrice'}/>,
    price: () => 0,
  }

  const renderFieldByType = ({ typeRow, type, addedRow, ...props }: { typeRow: string | undefined, type: string, addedRow: NewRowData | null }) => {
    if (typeRow === 'level') return renderLevel[type]({ rowData: addedRow, ...props })
    return renderRow[type]({ rowData: addedRow, ...props })
  }

  return (
    <tr className={style['table_body_row']}>
      {headers.map((header) => {
        return (
          <td
            key={header.id}
            data-type={header.title}
            className={style['table_data__item']}
          >
            {renderFieldByType({ type: header.type, typeRow: addedRow?.type, addedRow, ...props })}
          </td>
        )
      })}
    </tr>
  )
}

export default EmptyAdedRow