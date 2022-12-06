import { Surah } from "./Surah.interface";

export interface Match {
    numberInSurah: number;
    surah: Surah;
    text: string;
}