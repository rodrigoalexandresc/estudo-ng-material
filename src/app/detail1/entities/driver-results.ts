
export interface SeasonResult {
    season: number;
    wins: number;
  }
  
export interface DriverResults {
    driver: string;
    results: Array<SeasonResult>;
  }