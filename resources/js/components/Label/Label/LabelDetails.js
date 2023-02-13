import React from 'react'
import { Link, useParams } from 'react-router-dom'
import HomePage from '../../../pages/HomePage';

const LabelDetails = () => {
    const params = useParams();
    const labelId = params.labelId;
  return (
    <div>
        <Link to='/labels'><button className='btn btn-secondary mt-4'>Back to Label list</button></Link>
            <HomePage/>
    </div>
  )
}

export default LabelDetails