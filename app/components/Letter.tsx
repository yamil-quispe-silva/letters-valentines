import { LetterData } from '@/lib/letterData';

interface LetterProps {
  data: LetterData;
}

export default function Letter({ data }: LetterProps) {
  return (
    <div className="letter-scene">
      {/* Pink envelope behind */}
      <div className="envelope">
        <div className="envelope-flap-top" />
        <div className="envelope-flap-bottom" />
        <div className="envelope-flap-left" />
        <div className="envelope-flap-right" />
      </div>

      {/* Torn paper letter in front */}
      <article className="paper">
        <h1 className="paper-title">{data.title}</h1>
        <div className="paper-body">{data.body}</div>
      </article>
    </div>
  );
}
