import React, { useState } from 'react'
import { imgStorage, dataStorage, ref } from '../../../../backend/firebase/firebase-config'

function Admin() {

    const [txt , setTxt] = useState('')
    const [img, setImg] = useState()

    const handleUpload = (e) => {
        //setImg(e.target.files[0])
        console.log(e.target.files[0])

        const images = ref(imgStorage, 'images/test/')

        uploadbytes(images, e.target.files[0]).then(data=> {
          console.log('Uploaded a blob:', data.ref.name, data)
        })
    }

  return (
    <div className='p-4'>
        <input type="text" className='border-2 border-black' />
        <input type="file" name="" id="" onChange={ (e) => handleUpload(e)} />
    </div>
  )
}

export default Admin