import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  public countries = [
    {
      name: "Austria",
      img: "austria",
      facts: [
        {
          title: "Capital of the State",
          info: "Vienna (1 540 000 people)"
        },
        {
          title: "Geography",
          info: "The country is located in Central Europe"
        },
        {
          title: "Official language",
          info: "German"
        },
        {
          title: "National currency",
          info: "Euro"
        },
        {
          title: "Climate",
          info: `temperate continental. In the coldest 
          month of the winter, the temperature drops to -2 C. 
          During the hottest July and August in the summer, 
          it rises to +20 C`
        }
      ]
    },
    {
      name: "Egypt",
      img: "egypt",
      facts: [
        {
          title: "Capital of the State",
          info: "Cairo (17 million people)"
        },
        {
          title: "Geography",
          info: `Egypt's neighbors: Libya, Sudan, Palestinian, 
          Israel, Saudi Arabia and Jordan`
        },
        {
          title: "Official language",
          info: "German"
        },
        {
          title: "National currency",
          info: "Egyptian pound"
        },
        {
          title: "Climate",
          info: ` tropical desert, with very hot summers 
          and cool winters (in January, daytime temperatures 
          reach + 20-25 C, at night + 7-12 C)`
        }
      ]
    },
    {
      name: "Cyprus",
      img: "cyprus",
      facts: [
        {
          title: "Capital of the State",
          info: "Nicosia (240 000 thousand)"
        },
        {
          title: "Geography",
          info: `The island is located in the eastern 
          part of the Mediterranean Sea near the 
          northeast coast of Africa`
        },
        {
          title: "Official language",
          info: "Greek, Turkish"
        },
        {
          title: "National currency",
          info: "Euro"
        },
        {
          title: "Climate",
          info: `subtropical Mediterranean, 
          hot dry summer (temperatures up to + 45 °,) 
          and warm winters (temperature + 12 °)`
        }
      ]
    },
    {
      name: "Indonesia",
      img: "indonesia",
      facts: [
        {
          title: "Capital of the State",
          info: "Jakarta (9600 thousand inhabitants)"
        },
        {
          title: "Geography",
          info: `The country is located in South-East Asia`
        },
        {
          title: "Official language",
          info: "Indonesian"
        },
        {
          title: "National currency",
          info: "Indonesian Rupee"
        },
        {
          title: "Climate",
          info: `equatorial monsoon. All the year round, 
          the average daily air temperature does not 
          fall below 26-30 degrees, the water temperature 
          is not lower than 26 degrees`
        }
      ]
    },
    {
      name: "Maldives",
      img: "maldives",
      facts: [
        {
          title: "Capital of the State",
          info: "Male (90 000 thousand people)"
        },
        {
          title: "Geography",
          info: `The Maldives is 1,192 coral 
          islands located 670 km south of Sri Lanka`
        },
        {
          title: "Official language",
          info: "Divehi (refers to Indo-Aryan languages)"
        },
        {
          title: "National currency",
          info: "Maldives Rupee / MVR"
        },
        {
          title: "Climate",
          info: `uniform and warm throughout the year. 
          The average daytime temperature is + 30 ° C, 
          at night - up to + 25 C`
        }
      ]
    },
    {
      name: "Georgia",
      img: "georgia",
      facts: [
        {
          title: "Capital of the State",
          info: "Tbilisi (1.8 million)"
        },
        {
          title: "Geography",
          info: `the country borders with Turkey, Armenia, Azerbaijan, Russia`
        },
        {
          title: "Official language",
          info: "Georgian (Cartulad)"
        },
        {
          title: "National currency",
          info: "Georgian lari (GEL)"
        },
        {
          title: "Climate",
          info: `Summer throughout the country is very hot and stuffy, 
          in Tbilisi the temperature can rise to 35-40 ° C. 
          The average January temperature is from + 3-9 C, mountainous 
          areas can reach -16-20 C`
        }
      ]
    },
    {
      name: "Hungary",
      img: "hungary",
      facts: [
        {
          title: "Capital of the State",
          info: "Budapest (10.4 million people)"
        },
        {
          title: "Geography",
          info: `Neighboring countries: Serbia and Montenegro, 
          Croatia, Slovenia, Austria, Slovakia, Ukraine and Romania`
        },
        {
          title: "Official language",
          info: "Hungarian"
        },
        {
          title: "National currency",
          info: "forint (HUF)"
        },
        {
          title: "Climate",
          info: `temperate continental. Winters are cold, 
          but not long, spring and autumn are warm and long, 
          summer is hot. Average temperatures: in 
          January from 0 to −4 ° С, in July - from +20 to + 22.5 ° С`
        }
      ]
    },
    {
      name: "Spain",
      img: "spain",
      facts: [
        {
          title: "Capital of the State",
          info: "Madrid (2.900 million people)"
        },
        {
          title: "Geography",
          info: `Neighboring countries: France, Portugal, Andorra and the English colony of Gibraltar`
        },
        {
          title: "Official language",
          info: "Spanish"
        },
        {
          title: "National currency",
          info: "Euro (EUR)"
        },
        {
          title: "Climate",
          info: `temperate continental. Winters are cold, 
          but not long, spring and autumn are warm and long, 
          summer is hot. Average temperatures: in January 
          from 0 to −4 ° С, in July - from +20 to + 22.5 ° С`
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
