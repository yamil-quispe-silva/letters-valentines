export interface TimerConfig {
  targetDate: string; // ISO 8601 format: "2026-02-14T00:00:00-05:00" (ET timezone)
  message: string;
  enabled: boolean;
}

export const timerConfig: TimerConfig = {
  targetDate: "{{TARGET_DATE}}",
  // Example: "2026-02-14T00:00:00-05:00" for Feb 14, 2026 midnight ET
  // Format: YYYY-MM-DDTHH:mm:ss±HH:mm
  // Common US timezones: EST (-05:00), CST (-06:00), MST (-07:00), PST (-08:00)

  message: "{{COUNTDOWN_MESSAGE}}",
  // Example: "Something special is waiting for you...", "Your surprise will be revealed soon..."

  enabled: true  // Set to false to skip countdown and show letter immediately
};

// For testing, you can change targetDate to a few minutes from now:
// targetDate: "2026-02-13T23:00:00-05:00"
// Or use this helper to set a time X minutes from now:
export const getTimeInMinutes = (minutes: number): string => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + minutes);
  return date.toISOString();
};

export interface SurpriseBoxConfig {
  targetDate: string;        // ISO 8601 format: "2026-02-14T12:00:00-05:00" (Feb 14, 12pm ET)
  waitingMessage: string;    // Message shown while locked
  unlockedMessage: string;   // Message shown when unlocked
  buttonText: string;        // Text displayed on the button
  youtubeUrl: string;        // YouTube video link
  enabled: boolean;          // Toggle feature on/off
}

export const surpriseBoxConfig: SurpriseBoxConfig = {
  targetDate: "{{SURPRISE_TARGET_DATE}}",
  // Example: "2026-02-14T12:00:00-05:00" for Feb 14, 2026 noon ET

  waitingMessage: "{{SURPRISE_WAITING_MESSAGE}}",
  // Example: "A special surprise is waiting...", "Your gift will unlock soon..."

  unlockedMessage: "{{SURPRISE_UNLOCKED_MESSAGE}}",
  // Example: "Your gift is ready!", "Open your surprise!"

  buttonText: "{{SURPRISE_BUTTON_TEXT}}",
  // Example: "Open Gift", "Watch Video", "Abrir Regalo"

  youtubeUrl: "{{YOUTUBE_URL}}",
  // Add your YouTube video URL here (or any link)
  // Example: "https://www.youtube.com/watch?v=VIDEO_ID"

  enabled: true  // Set to false to disable the surprise box feature
};
