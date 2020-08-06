import React, { Fragment } from 'react'

function Search({ tags, handleFilterRemove, hadleClear }) {
  return (
    <>
      <div className="container-filters">

        <div className="search">
          {

            tags.map((tag) => (<Fragment key={tag}>

              <div className="container-btn clear" >
                <span className="tag-select"  >{tag}
                  
                </span>
                <svg onClick={() => handleFilterRemove(tag)} xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z" /></svg>
              </div>
            </Fragment>))
          }
        </div>
        <a href="#" onClick={hadleClear}>Clear</a>
      </div>

    </>
  )
}

export default Search
