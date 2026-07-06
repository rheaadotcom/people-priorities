"use client";

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa';

interface ImageUploaderProps {
  images: File[];
  onImagesChange: (images: File[]) => void;
}

export default function ImageUploader({ images, onImagesChange }: ImageUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onImagesChange([...images, ...acceptedFiles]);
  }, [images, onImagesChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    }
  });

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    onImagesChange(newImages);
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
            : 'border-gray-300 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 bg-gray-50 dark:bg-gray-800'
        }`}
      >
        <input {...getInputProps()} />
        <FaCloudUploadAlt className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        {isDragActive ? (
          <p className="text-blue-600 dark:text-blue-400 font-medium">Drop the images here...</p>
        ) : (
          <div className="space-y-1">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Drag & drop images here, or click to select files
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Supports JPG, PNG, WEBP
            </p>
          </div>
        )}
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {images.map((file, index) => {
            const objectUrl = URL.createObjectURL(file);
            return (
              <div key={index} className="relative group rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={objectUrl}
                  alt={`Preview ${index}`}
                  className="w-full h-full object-cover"
                  onLoad={() => URL.revokeObjectURL(objectUrl)}
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
