import React from 'react'
import { useStoreon } from 'storeon/react'
import Layout from '../apps/Layout/components'
import MainContent from '../apps/ViewContent/components'
import { IUser } from '../interfaces'
import { CURRENT_USER } from '../settings'

const MainPage: React.FC = () => {
  const { dispatch } = useStoreon()

  const setUser = (user: IUser): void => {
    dispatch('currentUser/set', user)
  }

  React.useEffect(() => {
    setUser(CURRENT_USER)
  }, [])

  return (
    <Layout>
      <MainContent />
    </Layout>
  )
}

export default MainPage