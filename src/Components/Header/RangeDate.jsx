import React from 'react'
import { DateRangePicker } from 'rsuite'

function RangeDate() {
    return (
        <div style={{ width: '250px' }}>
            <label className='label-txt' style={{ fontSize: "10px" }}>Fecha Alojamiento</label>
            <DateRangePicker style={{ width: "auto" }} />
        </div>

    )
}

export default RangeDate