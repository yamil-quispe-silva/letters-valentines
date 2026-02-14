'use client';

import { useState, useRef } from 'react';

type CellPos = [number, number];

interface HiddenWord {
  word: string;
  cells: CellPos[];
}

interface WordSearchProps {
  onComplete: () => void;
}

// Exact grid from reference image (6 rows × 5 cols)
const GRID: string[][] = [
  ['I','B','X','L','S'],
  ['J','L','E','Q','R'],
  ['A','W','O','D','Z'],
  ['C','P','F','V','H'],
  ['K','T','N','C','E'],
  ['M','Y','O','U','G'],
];

const ROWS = GRID.length;    // 6
const COLS = GRID[0].length; // 5
const VC = 100; // virtual coordinate unit for SVG

// Words: I · LOVE · YOU → "I LOVE YOU"
const HIDDEN_WORDS: HiddenWord[] = [
  { word: 'I',    cells: [[0,0]] },
  { word: 'LOVE', cells: [[1,1],[2,2],[3,3],[4,4]] }, // diagonal
  { word: 'YOU',  cells: [[5,1],[5,2],[5,3]] },        // horizontal
];

function cellCenter(r: number, c: number) {
  return { x: (c + 0.5) * VC, y: (r + 0.5) * VC };
}

function getLineCells(start: CellPos, end: CellPos): CellPos[] {
  const [r1, c1] = start;
  const [r2, c2] = end;
  const dr = r2 - r1;
  const dc = c2 - c1;
  if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return [start];
  const len = Math.max(Math.abs(dr), Math.abs(dc));
  if (len === 0) return [start];
  const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
  const stepC = dc === 0 ? 0 : dc / Math.abs(dc);
  const cells: CellPos[] = [];
  for (let i = 0; i <= len; i++) {
    cells.push([r1 + i * stepR, c1 + i * stepC]);
  }
  return cells;
}

export default function WordSearch({ onComplete }: WordSearchProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [startCell, setStartCell] = useState<CellPos | null>(null);
  const [currentCell, setCurrentCell] = useState<CellPos | null>(null);
  const [foundWords, setFoundWords] = useState<Set<string>>(new Set());
  const [solved, setSolved] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (r: number, c: number, e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartCell([r, c]);
    setCurrentCell([r, c]);
  };

  const handleMouseEnter = (r: number, c: number) => {
    if (isDragging) setCurrentCell([r, c]);
  };

  const commitSelection = () => {
    if (isDragging && startCell && currentCell) {
      const cells = getLineCells(startCell, currentCell);
      const word = cells.map(([r, c]) => GRID[r][c]).join('');
      const revWord = [...word].reverse().join('');
      const match = HIDDEN_WORDS.find(hw => hw.word === word || hw.word === revWord);
      if (match && !foundWords.has(match.word)) {
        const newFound = new Set([...foundWords, match.word]);
        setFoundWords(newFound);
        if (newFound.size === HIDDEN_WORDS.length) {
          setSolved(true);
          setTimeout(onComplete, 1800);
        }
      }
    }
    setIsDragging(false);
    setStartCell(null);
    setCurrentCell(null);
  };

  const getCellFromPoint = (x: number, y: number): CellPos | null => {
    if (!gridRef.current) return null;
    const rect = gridRef.current.getBoundingClientRect();
    const c = Math.floor((x - rect.left) / (rect.width / COLS));
    const r = Math.floor((y - rect.top) / (rect.height / ROWS));
    if (r >= 0 && r < ROWS && c >= 0 && c < COLS) return [r, c];
    return null;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const pos = getCellFromPoint(e.touches[0].clientX, e.touches[0].clientY);
    if (!pos) return;
    setIsDragging(true);
    setStartCell(pos);
    setCurrentCell(pos);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    const pos = getCellFromPoint(e.touches[0].clientX, e.touches[0].clientY);
    if (pos && isDragging) setCurrentCell(pos);
  };

  // SVG line for active drag selection
  const selLine = isDragging && startCell && currentCell ? (() => {
    const s = cellCenter(startCell[0], startCell[1]);
    const e = cellCenter(currentCell[0], currentCell[1]);
    return { x1: s.x, y1: s.y, x2: e.x, y2: e.y };
  })() : null;

  return (
    <div className="ws-container">
      <div className="ws-card">
        <h1 className="ws-title">
          Find the 3 secret words<br />to unlock your surprise
        </h1>

        <div
          ref={gridRef}
          className="ws-grid"
          onMouseUp={commitSelection}
          onMouseLeave={commitSelection}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={commitSelection}
          style={{ touchAction: 'none' }}
        >
          <svg
            className="ws-svg"
            viewBox={`0 0 ${COLS * VC} ${ROWS * VC}`}
            preserveAspectRatio="xMidYMid meet"
          >
            {HIDDEN_WORDS.filter(hw => foundWords.has(hw.word)).map(hw => {
              const s = cellCenter(hw.cells[0][0], hw.cells[0][1]);
              const e = cellCenter(hw.cells[hw.cells.length - 1][0], hw.cells[hw.cells.length - 1][1]);
              return (
                <line
                  key={hw.word}
                  x1={s.x} y1={s.y} x2={e.x} y2={e.y}
                  stroke="#8B2252"
                  strokeWidth={VC * 0.78}
                  strokeLinecap="round"
                  opacity="0.88"
                />
              );
            })}
            {selLine && (
              <line
                x1={selLine.x1} y1={selLine.y1}
                x2={selLine.x2} y2={selLine.y2}
                stroke="#9B3A5A"
                strokeWidth={VC * 0.78}
                strokeLinecap="round"
                opacity="0.55"
              />
            )}
          </svg>

          {GRID.map((row, r) =>
            row.map((letter, c) => (
              <div
                key={`${r}-${c}`}
                className="ws-cell"
                onMouseDown={(e) => handleMouseDown(r, c, e)}
                onMouseEnter={() => handleMouseEnter(r, c)}
              >
                {letter}
              </div>
            ))
          )}
        </div>

        <div className="ws-chips">
          {HIDDEN_WORDS.map(hw => (
            <span
              key={hw.word}
              className={`ws-chip${foundWords.has(hw.word) ? ' ws-chip-found' : ''}`}
            >
              {foundWords.has(hw.word) ? hw.word : '?'.repeat(hw.word.length)}
            </span>
          ))}
        </div>

        {solved && (
          <p className="ws-solved">💝 All words found! Opening your surprise...</p>
        )}
      </div>
    </div>
  );
}
