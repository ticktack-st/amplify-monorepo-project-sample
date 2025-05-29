'use client'

import React, { useState } from 'react'

import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { Amplify } from 'aws-amplify'

import { configPoolA } from '../configure'

import { Button } from '@/components/ui/button'

Amplify.configure(configPoolA)

export default function Page() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16">
          <h1 className="mt-10 text-3xl font-bold">ファイルアップロード</h1>
        </div>
        <div className="m-10 flex flex-wrap justify-around">
          <div className="w-1/2 p-4">
            <div className="rounded-lg rounded-md border-2 border-gray-200 bg-green-800 px-4 py-6 hover:bg-green-600">
              <FileUploader />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const FileUploader = () => {
  const [file, setFile] = useState<File | null>()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] || undefined)
  }

  const handleUpload = async () => {
    if (!file) return

    const s3Client = new S3Client({
      region: 'ap-northeast-1',
      credentials: {
        accessKeyId: '<accessKeyId>',
        secretAccessKey: '<secretAccessKey>',
        sessionToken: '<sessionToken>',
      },
      requestChecksumCalculation: 'WHEN_REQUIRED',
    })

    try {
      const command = new PutObjectCommand({
        Bucket: 'amplify-file-upload-test-bucket-ticktack',
        Key: `${file.name}`,
        Body: file,
        ContentType: file.type,
      })

      const response = await s3Client.send(command)
      console.log('Upload succeeded:', response)
    } catch (error) {
      console.error('Upload failed:', error)
    }
  }

  return (
    <div>
      <input onChange={handleChange} type="file" />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  )
}
