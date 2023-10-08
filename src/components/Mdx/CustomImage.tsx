import Image, { ImageProps } from 'next/image'

type Props = ImageProps & { base64?: string }

export function CustomImage({
  src,
  height,
  width,
  base64,
  alt,
  title,
  ...otherProps
}: Props) {
  if (!src) return null
  if (typeof src === 'string' && (!height || !width))
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <figure>
        <img
          src={src}
          height={height}
          width={width}
          alt={alt}
          className='rounded-sm mb-2'
          {...otherProps}
        />
        {title && (
          <figcaption className='text-sm text-secondary'>{title}</figcaption>
        )}
      </figure>
    )

  return (
    <Image
      layout='responsive'
      src={src}
      alt={alt}
      height={height}
      width={width}
      sizes='(min-width: 40em) 40em, 100vw'
      placeholder={base64 ? 'blur' : 'empty'}
      blurDataURL={base64}
      className='mb-2 rounded-sm'
      {...otherProps}
    />
  )
}
