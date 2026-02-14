import Image from 'next/image';
import { ImageData } from '@/lib/letterData';

interface PhotoGalleryProps {
  images: ImageData[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  return (
    <div className="photo-gallery">
      {images.map((image, index) => (
        <div
          key={index}
          className="photo"
          style={{
            top: image.position.top,
            left: image.position.left,
            right: image.position.right,
            bottom: image.position.bottom,
            '--rotation': `${image.position.rotation}deg`
          } as React.CSSProperties}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={150}
            height={200}
            quality={85}
            priority={index < 2}
          />
        </div>
      ))}
    </div>
  );
}
