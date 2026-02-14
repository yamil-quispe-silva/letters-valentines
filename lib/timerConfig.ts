export interface TimerConfig {
  targetDate: string;
  message: string;
  enabled: boolean;
}

export interface SurpriseBoxConfig {
  targetDate: string;
  waitingMessage: string;
  unlockedMessage: string;
  buttonText: string;
  youtubeUrl: string;
  enabled: boolean;
}

// Helper: returns an ISO date string X seconds from now
export const getTimeInSeconds = (seconds: number): string => {
  const date = new Date();
  date.setSeconds(date.getSeconds() + seconds);
  return date.toISOString();
};

// Helper: returns an ISO date string X minutes from now
export const getTimeInMinutes = (minutes: number): string => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + minutes);
  return date.toISOString();
};

export const timerConfig: TimerConfig = {
  targetDate: getTimeInSeconds(5),  // Letter reveals in 5 seconds
  message: "Something special is waiting for you...",
  enabled: true
};

export const surpriseBoxConfig: SurpriseBoxConfig = {
  targetDate: getTimeInMinutes(2),  // Surprise unlocks in 2 minutes
  waitingMessage: "A song that reminds me of us...",
  unlockedMessage: "A song that reminds me of us...",
  buttonText: "Open",
  youtubeUrl: "https://www.youtube.com/watch?v=QCZZwZQ4qNs&list=RDQCZZwZQ4qNs&start_radio=1&pp=ygUZa2Fyb2wgZyBodWJpZXJhcyBjb25vY2lkb6AHAQ%3D%3D",
  enabled: true
};
