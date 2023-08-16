import React from 'react'
import { Container } from 'rsuite'

function BarTitles({titleBar, ...props}) {
  return (
    <Container 
    className='container-b d-flex justify-content-center'>
       <h4>{titleBar}</h4>
    </Container>
  )
}

export default BarTitles