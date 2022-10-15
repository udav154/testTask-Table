import React, { useState, useEffect, useRef } from 'react'
import { useStoreon } from 'storeon/react'
import Table from '../Table'
import { editRow, saveRow, addRowBuType, createRowWhithNewValue } from '../../../../utils'
import { NewRowData, RowData } from '../../../../interfaces'
import style from '../../styles/content.module.scss'
import { KEY_CODE } from '../../../../settings'

const ViewContent: React.FC<{}> = ({ }) => {
  const { dispatch, tableData } = useStoreon<{ tableData: RowData[] }>('tableData')
  const [editingRow, setEditingRow] = useState<null | RowData>(tableData[0])
  const [addedRow, setAddedRow] = useState<null | NewRowData>(null)
  const [isErrorFied, setIsErrorField] = useState<{ [key: string]: boolean }>({})
  const editingRowRef = useRef<null | RowData>(null)
  const addedRowRef = useRef<null | NewRowData>(null)

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
      if (!addedRowRef.current && !editingRowRef.current) {
        window.addEventListener('keydown', handleKeyEvent)
      }
    }
  }

  const checkChildren = (parentID: number): boolean => {
    const children = tableData.filter(el => el.parent === parentID)
    if (children.length) return true
    return false
  }

  const handleEditingRow = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = createRowWhithNewValue(e, editingRowRef.current)
    setEditingRow(newData as RowData)
  }

  const handleEditAddedRow = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = createRowWhithNewValue(e, addedRowRef.current)
    setAddedRow(newData as NewRowData)
  }

  const handeleAddRow = ({ id, type }: { id: number, type: string }): void => {
    const newRow = addRowBuType(id, type, tableData)
    setEditingRow(null)
    setAddedRow(newRow)
    if (!addedRowRef.current && !editingRowRef.current) {
      window.addEventListener('keydown', handleKeyEvent)
    }
  }

  const handleEsc = () => {
    setEditingRow(null)
    setAddedRow(null)
    window.removeEventListener('keydown', handleKeyEvent)
  }

  const handleEnter = () => {
    if (editingRowRef.current) {
      const isError = checkRowByEmptyField(editingRowRef.current)
      if (isError) return
      const { current, changed } = editRow(editingRowRef.current, tableData)
      // @ts-ignore
      const newTableData: RowData[] = tableData.reduce((a, b) => {
        const isChanged = changed.find(el => el.id === b.id)
        const addedRowData = b.id === current.id ? current : b.id === isChanged?.id ? isChanged : b
        return [...a, addedRowData]
      }, [])
      dispatch('tableData/set', newTableData)
      setEditingRow(null)
    }
    if (addedRowRef.current) {
      const isError = checkRowByEmptyField(addedRowRef.current)
      if (isError) return
      const { current, changed } = saveRow(addedRowRef.current, tableData)
      // @ts-ignore
      const newTableData: RowData[] = tableData.reduce((a, b) => {
        const isChanged = changed.find(el => el.id === b.id)
        const addedRowData = b.id === isChanged?.id ? isChanged : b
        return [...a, addedRowData]
      }, [])
      dispatch('tableData/set', [...newTableData, current])
      setAddedRow(null)
    }
    window.removeEventListener('keydown', handleKeyEvent)
  }


  const handleKeyEvent = (e: KeyboardEvent) => {
    if (e.key === KEY_CODE.ENTER) {
      handleEnter()
    } else if (e.key === KEY_CODE.ESCAPE) {
      handleEsc()
    }
  }

  useEffect(() => {
    addedRowRef.current = addedRow
  }, [addedRow])

  useEffect(() => {
    editingRowRef.current = editingRow
  }, [editingRow])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyEvent)
    return () => {
      window.removeEventListener('keydown', handleKeyEvent)
    }
  }, [])

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