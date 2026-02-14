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
  title: "Mi amor, Emi ❤️",

  body: "Happy Valentine's Day, mi amor.\n\n" +
    "lo que comenzo como una coincidencia se convirtio en una de las cosas mas importantes en mi vida, y no tengo palabras para decirte lo mucho que te amo!\n\n" +
    "soy la persona mas afortunada por tenerte en mi vida\n\n" +
    "here is to many more valentines, trips, languages, books and kisses :)\n\n" +
    "te amo siempre,\nYamil",

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
