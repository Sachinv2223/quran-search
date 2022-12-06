import { Match } from "./Match.interface";

export interface SearchResult {
    count: number;
    matches: Match[]
}