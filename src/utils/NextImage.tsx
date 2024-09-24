'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { StaticImageData, ImageProps } from 'next/image'


interface NextImageProps extends Partial<ImageProps> {
  src: string | StaticImageData
  width?: number
  height?: number
  alt?: string
  priority?: boolean
  testid?: string
  fallbackSrc?: string
  fill?: boolean
  decoding?: 'async' | 'auto'
  className?: string
}

const NextImage = ({
  src = '/assets/images/placeholderImage.webp',
  width = 20,
  height = 20,
  alt = '',
  priority = false,
  testid = '',
  fallbackSrc = '/assets/images/placeholderImage.webp',
  fill = false,
  decoding = 'async',
  className = '',
  ...props
}: NextImageProps) => {
  const [imageSrc, setImageSrc] = useState(src)
  const [fallbackLoaded, setFallbackLoaded] = useState(false)

  const handleImageError = () => {
    if (!fallbackLoaded) {
      setImageSrc(fallbackSrc)
      setFallbackLoaded(true)
    }
  }

  if (fill) {
    return (
      <Image
        src={imageSrc}
        alt={alt}
        data-testid={testid}
        onError={handleImageError}
        fill
        sizes="100vw"
        decoding={decoding}
        fetchPriority={priority ? 'high' : 'low'}
        loading={priority ? 'eager' : 'lazy'} // {lazy} | {eager}
        className={` ${className}`}
        {...props}
      />
    )
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      data-testid={testid}
      onError={handleImageError}
      sizes="100vw"
      decoding={decoding}
      fetchPriority={priority ? 'high' : 'low'}
      loading={priority ? 'eager' : 'lazy'} // {lazy}| {eager}
      className={` ${className}`}
      {...props}
    />
  )
}

export { NextImage }
