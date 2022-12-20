import React from 'react'

import MainView from '../../components/TribeComponents/MainView'
import TribeSidebar from '../../components/TribeComponents/TribeSidebar'

import "../Dashboard/Dashboard.css"

const index = () => {
  return (
    <div className="dashboard__component">
        <TribeSidebar />
        <MainView />
    </div>
  )
}

export default index