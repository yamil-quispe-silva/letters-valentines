export interface LetterData {
  title: string;
  body: string;
  images: ImageData[];
}

export interface ImageData {
  src: string;
  alt: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    rotation: number;
  };
}

export const letterData: LetterData = {
  title: "My Dearest Sarah,",

  body: "Happy Valentine's Day, my love.\n\n" +
    "A year ago today I knew right then that I was in trouble.\n\n" +
    "Here's to every Valentine's Day still ahead of us.\n\nForever yours,\nJohn",

  images: [
    {
      src: "/images/photo1.jpeg",
      alt: "Memory 1",
      position: { top: "10%", left: "8%", rotation: -5 }
    },
    {
      src: "/images/photo2.jpeg",
      alt: "Memory 2",
      position: { top: "15%", right: "8%", rotation: 6 }
    },
    {
      src: "/images/photo3.jpeg",
      alt: "Memory 3",
      position: { bottom: "15%", left: "10%", rotation: -4 }
    },
    {
      src: "/images/photo4.jpeg",
      alt: "Memory 4",
      position: { bottom: "20%", right: "8%", rotation: 7 }
    }
  ]
};
