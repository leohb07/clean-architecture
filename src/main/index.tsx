import React from 'react'
import ReactDOM from 'react-dom/client'
import { PhotoUploadFactory } from './factories/pages/photo-upload'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PhotoUploadFactory />
  </React.StrictMode>,
)
