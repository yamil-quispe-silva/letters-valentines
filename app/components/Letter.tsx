import { LetterData } from '@/lib/letterData';

interface LetterProps {
  data: LetterData;
}

export default function Letter({ data }: LetterProps) {
  return (
    <article className="letter">
      <h1 className="letter-title">{data.title}</h1>
      <div className="letter-body">{data.body}</div>
    </article>
  );
}
