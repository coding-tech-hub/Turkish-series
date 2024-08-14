import React from 'react'
import "./Series.css"
import SeriesData from './SeriesData'

const TurkishSeries = () => {
  return (
    <>
      {SeriesData.map((val, index) => {
        return (
          <>
          <div className="card">
            <h3 className="name">{val.title}</h3>
          <div className="img" key={index}>
            <img src={val.src} alt="" />
          </div>
          <div className="cardDetail">
          <h4 className="rating">IMBD rating :{val.rating}</h4>
          <h5 className="discription">discription : {val.discription}</h5>
          <div className="cast">cast :{val.cast}</div>
          <div className="genre">genre :{val.genre}</div>
          <a href={val.link} target='_main' className='link'>
            <button>Watch now with urdu subtitle</button>
          </a>
          </div>
          </div>
          </>
        )
      })}
    </>
  )
}

export default TurkishSeries