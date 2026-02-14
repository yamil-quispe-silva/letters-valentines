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
  title: "{{LETTER_GREETING}}",
  // Example: "Dear Sarah,", "My Dearest Love,", "Querida María,"

  body: "{{LETTER_BODY}}",
  /*
   * Write your personal letter here. This is the heart of your message!
   *
   * Tips:
   * - Express what you love about them
   * - Share favorite memories
   * - Include inside jokes that are meaningful to you both
   * - Be authentic and speak from the heart
   * - Use \n\n for paragraph breaks
   *
   * Example structure:
   * "Dear [Name],\n\n" +
   * "First paragraph about how you feel...\n\n" +
   * "Second paragraph with memories...\n\n" +
   * "Closing thoughts...\n\n" +
   * "With all my love,\n[Your Name]"
   */

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
