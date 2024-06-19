import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { DropZoneProps} from '@/pages'

const DropZone: React.FC<DropZoneProps> = ({ onFilesAccepted }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFilesAccepted(acceptedFiles)
  }, [onFilesAccepted])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className='text-center border-2 m-auto border-dashed border-gray-400 rounded-lg w-80 h-32 text-gray-600 cursor-pointer text-xl'
      {...getRootProps()} 
    >
      <div className='flex flex-col items-center justify-center h-full w-full'>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className=''>Suelta los archivos aquí ...</p>
      ) : (
        <p className=''>Arrastra y suelta aquí, o haz clic</p>
      )}
      </div>
    </div>
  )
}

export default DropZone;
