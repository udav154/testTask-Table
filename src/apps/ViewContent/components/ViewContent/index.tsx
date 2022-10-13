import React, { useState, useEffect } from 'react'
import { useStoreon } from 'storeon/react'
import Table from '../Table'
import { editRow, saveRow, addRowBuType } from '../../../../utils'
import { NewRowData, RowData } from '../../../../interfaces'
import { MOCK_TABLE_DATA_TEST, STRING_FIELD } from '../../../../settings'
import style from '../../styles/content.module.scss'

const ViewContent: React.FC<{}> = ({ }) => {
  const { dispatch, tableData } = useStoreon<{ tableData: RowData[] }>('tableData')
  const [editingRow, setEditingRow] = useState<null | RowData>(tableData[0])
  const [addedRow, setAddedRow] = useState<null | NewRowData>(null)
  const [isErrorFied, setIsErrorField] = useState<{ [key: string]: boolean }>({})

  const checkRowByEmptyField = (row: any) => {
    const newIsErroeField: { [key: string]: boolean } = {}
    if (row.type === 'level') {
      if (row.title.trim() === '') newIsErroeField.title = true
    } else {
      if (row.title.trim() === '') newIsErroeField.title = true
      if (row.unit.trim() === '') newIsErroeField.unit = true
    }
    setIsErrorField(newIsErroeField)
    if (Object.values(newIsErroeField).includes(true)) return true
    return false
  }

  const setEditMode = (id: number): void => {
    const eventRow = tableData.find(el => el.id === id)
    if (eventRow) {
      setEditingRow(eventRow)
      setAddedRow(null)
    }
  }

  const checkChildren = (parentID: number): boolean => {
    const children = tableData.filter(el => el.parent === parentID)
    if (children.length) return true
    return false
  }

  const handleEditingRow = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldtype: string | null = e.target.ariaLabel
    let value: string | number = e.target.value
    if (fieldtype) {
      if (!STRING_FIELD.includes(fieldtype)) {
        value = parseFloat(value) ? parseFloat(value) : 0
      }
      // @ts-ignore
      const newData: RowData = {
        ...editingRow,
        [fieldtype]: value,
      }
      const newprice = Number((newData.quantity * newData.unitPrice).toFixed(2))
      setEditingRow({
        ...newData,
        price: newprice
      })
    }
  }

  const handleEditAddedRow = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldtype: string | null = e.target.ariaLabel
    let value: string | number = e.target.value

    if (fieldtype) {
      if (!STRING_FIELD.includes(fieldtype)) {
        value = parseFloat(value) ? parseFloat(value) : 0
      }
      // @ts-ignore
      const newData: RowData = {
        ...addedRow,
        [fieldtype]: value,
      }
      const newprice = newData.quantity * newData.unitPrice
      setAddedRow({
        ...newData,
        price: newprice
      })
    }
  }

  const handeleAddRow = ({ id, type }: { id: number, type: string }): void => {
    setEditingRow(null)
    const newRow = addRowBuType(id, type, tableData)
    setAddedRow(newRow)
  }

  const handleKeyEvent = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      if (editingRow) {
        const isError = checkRowByEmptyField(editingRow)
        if (isError) return
        const { current, changed } = editRow(editingRow, tableData)
        // @ts-ignore
        const newTableData: RowData[] = tableData.reduce((a, b) => {
          const isChanged = changed.find(el => el.id === b.id)
          const addedRowData = b.id === current.id ? current : b.id === isChanged?.id ? isChanged : b
          return [...a, addedRowData]
        }, [])
        dispatch('tableData/set', newTableData)
        setEditingRow(null)
      }
      if (addedRow) {
        const isError = checkRowByEmptyField(addedRow)
        if (isError) return
        const { current, changed } = saveRow(addedRow, tableData)
        // @ts-ignore
        const newTableData: RowData[] = tableData.reduce((a, b) => {
          const isChanged = changed.find(el => el.id === b.id)
          const addedRowData = b.id === isChanged?.id ? isChanged : b
          return [...a, addedRowData]
        }, [])
        dispatch('tableData/set', [...newTableData, current])
        setAddedRow(null)
      }
    } else if (e.keyCode === 27) {
      setEditingRow(null)
      setAddedRow(null)
    }
  }

  useEffect(() => {
    console.log('addedRow', addedRow)
  }, [addedRow])

  useEffect(() => {

    if (editingRow || addedRow) {
      window.addEventListener('keydown', handleKeyEvent)
    } else {
      window.removeEventListener('keydown', handleKeyEvent)
    }
    return () => {
      window.removeEventListener('keydown', handleKeyEvent)
    }
  }, [editingRow, addedRow])

  return (
    <div className={style.content_wrap}>
      <Table
        data={tableData}
        editingRow={editingRow}
        addedRow={addedRow}
        isErrorFied={isErrorFied}
        setEditMode={setEditMode}
        handleEditingRow={handleEditingRow}
        handeleAddRow={handeleAddRow}
        checkChildren={checkChildren}
        handleEditAddedRow={handleEditAddedRow}
      />
    </div>
  )
}

export default ViewContent