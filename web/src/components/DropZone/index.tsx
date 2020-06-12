import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Container, Contente, Icon } from './styles'

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('')
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);
    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: "image/*" })

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} accept={"image/*"} />
      {
        selectedFileUrl ? <img src={selectedFileUrl} alt="Imagem do Ponto" /> : <Contente>
          {
            isDragActive ?
              <p>Solte a imagem aqui ...</p> :
              <div><Icon />
                <p>Imagem do estabelecimento</p>
              </div>
          }
        </Contente>
      }


    </Container>
  )
}
export default Dropzone;