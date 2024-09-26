import React, { useState } from 'react'

function Admin() {

    const [txt , setTxt] = useState('')
    const [img, setImg] = useState()

    const handleUpload = (e) => {
        //setImg(e.target.files[0])
        console.log(e.target.files[0])
    }

  return (
    <div className='p-4'>
        <input type="text" className='border-2 border-black' />
        <input type="file" name="" id="" onChange={ (e) => handleUpload(e)} />
    </div>
  )
}

export default Admin