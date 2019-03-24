import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  public services = [
    {
      title: "Insurance",
      sublist: [
        {
          subtitle: "Medical insurance for tourists traveling abroad",
          info: `When traveling abroad, on vacation or business trip, the last
          what are you thinking about, who will pay for it medical expenses in 
          case of illness or injury abroad.
          Medical insurance traveling abroad provides coverage
          costs associated with the necessary treatment abroad. Draw
          Your attention is that medical insurance is paid by insurance companies
          expenses solely provided that the disease or injury
          originated during your trip. With exacerbation of chronic
          diseases during travel by insurance companies are paid
          only the removal of the acute period of the disease`
        },
        {
          subtitle: "Accident Insurance",
          info: `The subject of this type of insurance is the fact of occurrence 
          of the insured event specified in the insurance contract.
          The above types of insurance are required upon receipt
          visas in consulates and embassies of most countries`
        },
        {
          subtitle: "Medical insurance for tourists traveling in Ukraine",
          info: `The need to purchase an insurance policy covering the cost 
          of treatment abroad, the majority of travelers have become 
          accustomed. But a person rarely thinks about the need to 
          insure medical expenses while going hiking, skiing, or simply 
          traveling around his native country. Medical insurance for 
          traveling in Ukraine provides insurance coverage for medical 
          expenses incurred during the period of travel`
        },
        {
          subtitle: "Financial risk insurance",
          info: `Tourists traveling abroad may make additional insurance 
          of the following risks: from loss or damage to baggage, 
          from refusing to travel or changing the duration of their 
          stay abroad; third party liability insurance. In the travel 
          agency "Hppy Rest" you can make any other types of insurance`
        }
      ]
    }, 
    {
      title: "Flights",
      sublist: [
        {
          subtitle: "+38 099 00 00 00",
          info: `Viber/WhatsApp/Telegram,  
          UAE, Turkey, Hungary, Egypt`
        }, 
        {
          subtitle: "+38 099 000 00 01",
          info: `Viber/WhatsApp/Telegram
          Egypt, Montenegro, Greece, Italy`
        },
        {
          subtitle: "+38 099 000 00 02",
          info: `Viber/WhatsApp/Telegram
          Spain, UAE, Egypt, Italy, Thailand`
        },
        {
          subtitle: "+38 099 000 00 03",
          info: `Viber / WhatsApp / Telegram
          Egypt, Cyprus, Bulgaria, Georgia`
        }
      ]
    },
    {
      title: "Calls from abroad",
      sublist: [
        {
          subtitle: "SIMFORTOUR and TravelSIM",
          info: `Tourist Sim cards are special cards for 
          roaming and chatting abroad. These are free incoming 
          calls in 150 countries, low rates for outgoing calls, 
          no subscription fees, a single number and high quality 
          of communication in 198 countries of the world.
          SIMFORTOUR and TravelSIM are the optimal solution when 
          the question of international calls arises. Tourist 
          Sim-card is indispensable for companies whose employees 
          regularly travel abroad, for avid travelers and even for 
          those who occasionally travel outside the country. As 
          practice shows, even one trip pays for the tourist Sim-card - 
          because you save on international communication!`
        }
      ]
    }
  ];
  public flag: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public change() {
    // this.flag = !this.flag;
  }

}
