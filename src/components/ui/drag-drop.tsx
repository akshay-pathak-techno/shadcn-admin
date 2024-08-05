import { Upload } from '@/assets'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { Accept, FileRejection, useDropzone } from 'react-dropzone'
import { Button } from './button'

interface DragDropProps {
  onDrop: (acceptedFiles: File[]) => void
  className?: string
  maxFiles?: number
  maxSize?: number
  accept?: Accept
}

const DragDrop: React.FC<DragDropProps> = ({
  onDrop,
  accept,
  className,
  maxFiles,
  maxSize,
}) => {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const handleOnDrop = (
    acceptedFiles: File[],
    fileRejections: FileRejection[]
  ) => {
    onDrop(acceptedFiles)
    if (fileRejections.length > 0) {
      setErrorMessage(fileRejections[0].errors[0].message)
    } else {
      setErrorMessage('')
    }
  }
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleOnDrop,
    useFsAccessApi: false,
    maxFiles,
    maxSize,
    accept,
  })

  return (
    <div {...getRootProps({})} className='outline-none focus:outline-none'>
      <div
        className={cn(
          'rounded-lg border border-dashed border-primary text-center ',
          className,
          errorMessage && 'border-destructive'
        )}
      >
        <input {...getInputProps()} />
        <div className='flex justify-center'>
          <img src={Upload} className='h-11 w-11' alt='upload' />
        </div>
        <p className='font-sm mt-4 text-center text-black'>
          Drag your file(s) to start uploading
        </p>
        <div className='!my-3 flex items-center px-4 md:px-20'>
          <div className='flex-grow border-t border-slate-400'></div>
          <span className='mx-2 text-sm text-slate-500'>OR</span>
          <div className='flex-grow border-t border-slate-400'></div>
        </div>
        <Button
          variant='outline'
          className='mt-4 rounded-lg border border-primary font-semibold text-primary ring-0'
        >
          Browse files
        </Button>
      </div>
      {errorMessage && (
        <p className='p-2 text-sm text-destructive'> {errorMessage}</p>
      )}
    </div>
  )
}

export default DragDrop
