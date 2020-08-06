import React, { Fragment } from 'react'
import Header from './static/Components/Header/Header'
import "./App.css";
import CardListJobs from './static/Components/CardListJobs';
function App() {
  return (
    <Fragment>
      <Header />
      <div className="wrapper">
        <CardListJobs/>
      </div>
    </Fragment>
  )
}

export default App
