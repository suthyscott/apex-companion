import React from "react"

const ClassSectionDisplay = ({nameOfClass, legends, legendClassId}) => {
    return (
        <div>
            <h2 className="text-2xl">{nameOfClass}</h2>
            {legends
                .filter(leg => leg.LegendClassId === legendClassId)
                .map(leg => {
                    return (
                        <div className="flex">
                            <input type="checkbox"/>
                            <h3>{leg.legendName}</h3>
                        </div>
                    )
                })}
        </div>
    )
}

export default ClassSectionDisplay
