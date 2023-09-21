import React from 'react'

const LegendDisplay = ({displayLegend, getRandomLegend}) => {

  return (
    <div className='border-solid border border-black w-1/2 h-3/4'>
        {displayLegend.legendName ? (
            <>
                {displayLegend.legendName}
                <button onClick={getRandomLegend}>Generate New random legend</button>
            </>
        ) : (
            <>
                <button onClick={getRandomLegend}>Generate Random Legend</button>
            </>
        )}
    </div>
  )
}

export default LegendDisplay