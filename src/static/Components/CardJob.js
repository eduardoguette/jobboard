import React from 'react'
import "./CardJob.css"



function CardJob({ event, job }) {

  /// Cuando es featured le colocamos un border 
  setTimeout(() => {
    document.querySelectorAll('.cardjob').forEach(elem => {
      if (elem.querySelector('.btn.btn-featured')) {
        elem.classList.add('is-featured')
      }
    })
  }, 100)



  return (
    <div className="grid-cardjob container">
      <div className="cardjob">
        <img src={job.logo} className="logo" alt={job.company} />
        <div className="header-card">
          <div className="container-sec-first">
            <strong>{job.company}</strong>
            {job.isNew === true ? <span className="btn btn-new">NEW!</span> : void (0)}
            {job.featured === true ? <span className="btn btn-featured">FEATURED</span> : void (0)}
          </div>
          <p className="title">{job.position}</p>
          <div className="container-about">
            <span>{job.postedAt}</span>
            <span className="type">{job.contract}</span>
            <span>{job.location}</span>
            <p className="border-bottom"></p>
          </div>
        </div>
        <div className="container-tags" onClick={event}>
          <span>{job.role}</span>
          <span>{job.level}</span>
          {
            job.languages.map((language, key) => <span key={key}>{language}</span>)
          }
          {
            job.tools.map((tools, key) => <span key={key}>{tools}</span>)
          }
        </div>
      </div>


    </div >
  )
}

export default CardJob
