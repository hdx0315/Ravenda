

import React, { useState } from 'react'
import { imgStorage, dataStorage, ref } from '../../../../backend/firebase/firebase-config'



import React, {  } from 'react';

    const handleUpload = (e) => {
        //setImg(e.target.files[0])
        console.log(e.target.files[0])


        const images = ref(imgStorage, 'images/test/')

        uploadbytes(images, e.target.files[0]).then(data=> {
          console.log('Uploaded a blob:', data.ref.name, data)
        })

    }

function Admin() {
    return(
        <>
        Admin Home
        </>
    )
}

export default Admin;


