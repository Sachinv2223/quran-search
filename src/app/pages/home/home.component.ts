import { SearchResult } from './../../core/interfaces/SearchResult.interface';
import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result!: SearchResult;
  isLoading: boolean = false;

  constructor(private searchService: SearchService) {
    // this.result = {
    //   count: 1,
    //   matches: [
    //     {
    //       text: "The month of Ramadan in which was sent down the Qur’an – the guidance for mankind, the direction and the clear criteria (to judge between right and wrong); so whoever among you witnesses this month, must fast for the (whole) month; and whoever is sick or on a journey, may fast the same number in other days; Allah desires ease for you and does not desire hardship for you – so that you complete the count (of fasts), and glorify Allah’s greatness for having guided you, and so that you may be grateful.",
    //       surah: {
    //         number: 2,
    //         englishName: "Al-Baqara",
    //         englishNameTranslation: "The Cow",
    //       },
    //       numberInSurah: 185
    //     }
    //   ]
    // }
  }

  ngOnInit(): void {
  }



  onSearchBtnClick(inpKey: string) {
    this.isLoading = true;
    console.log(inpKey);
    this.searchService.search(inpKey.toLowerCase()).subscribe({
      next: (res) => {
        console.log(res);
        this.result = res;
        this.isLoading = false;
      }
    })
  }

}
