import React from 'react'
import { InputNumber } from 'rsuite'

function PersonCounter() {
  return (
    <div style={{ width: 160 }}>
      <label className="label-txt" style={{ fontSize: "10px" }}>Numero de Personas</label>
      <InputNumber defaultValue={0} max={100} min={0} />
    </div>
  )
}

export default PersonCounter