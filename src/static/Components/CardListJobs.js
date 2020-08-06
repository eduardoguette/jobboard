import React, { useState, useEffect, Fragment } from 'react'
import CardJob from './CardJob'
import Search from './Search';
import data from "../../data.json"
function CardListJobs() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([])

  useEffect(() => {
    setJobs(data)
  }, [])

  const filterFunct = ({ role, level, tools, languages }) => {

    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];
    if (tools) {
      tags.push(...tools)
    }
    if (languages) {
      tags.push(...languages)
    }
    return filters.every(filter => tags.includes(filter));
  }

  // Evento Click Tag 
  const hadleClickTag = e => {
    let tag = e.target.textContent
    // Si el tag ya existe no retornará nada
    if (filters.includes(tag)) return;
    // Solo si es span el tag lo pasara a la sección de search
    if (e.target.tagName === "SPAN")
      setFilters([...filters, tag])
  }
  // Elimina cuando le pulsamos a X 
  const hadleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter))
  }
  //Evento cuando hacemos click en el btn "Clear"
  const hadleClickClear = () => {
    setFilters([])
  }

  const filteredJobs = jobs.filter(filterFunct)

  return (
    <Fragment>
      {
        filters.length > 0 && <Search handleFilterRemove={hadleFilterClick} hadleClear={hadleClickClear} tags={filters} />

      }
      {
        jobs.length === 0 ? <p>No jobs</p> : filteredJobs.map((job) => <CardJob event={hadleClickTag} job={job} key={job.id} />)
      }
    </Fragment>
  )
}

export default CardListJobs
