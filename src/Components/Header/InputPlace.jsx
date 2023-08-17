import React from 'react'
import { Input } from 'rsuite'

function InputPlace() {
    return (
        <div style={{ width: 160 }}>
            <label className="label-txt" style={{ fontSize: "10px" }}>Lugar</label>
            <Input placeholder="¿A dónde vas?" />
        </div>
    )
}

export default InputPlace