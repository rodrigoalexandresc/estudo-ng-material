
export interface RaceResult {
  title: string;
  qualyfing: string;
  result: string;
}

export interface SeasonResult {
    season: number;
    wins: number;
    races: Array<RaceResult>;
  }
  
export interface DriverResults {
    driver: string;
    results: Array<SeasonResult>;
  }