import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tourists-questions',
  templateUrl: './tourists-questions.component.html',
  styleUrls: ['./tourists-questions.component.scss']
})
export class TouristsQuestionsComponent implements OnInit {

  public questionsAnswers = [
    {
      title: "Confirmation from the hotel",
      sublist: [
        {
          subtitle: "Why don't they confirm the tour for a long time?",
          info: `The normal booking confirmation period is from several 
          hours to five days. There are exceptions for peak dates 
          (May holidays, children's holidays, New Year), and delays 
          in response from hotels may be more`
        }  
      ]
    }, 
    {
      title: "Documents for the trip",
      sublist: [
        {
          subtitle: `The entire package of travel documents is issued 
          after full payment 3-14 days prior to departure, 
          depending on the tour operator and the conditions 
          of the airlines`,
          info: `Travel agent issues you documents in 
          the office or sends them to your email, since all 
          documents are in electronic form.You need to print 
          them completely and take them on the road.Also, documents can
           be obtained directly on the day of departure
          at the airport, 2-3 hours before departure, from company 
          representatives who will be waiting for you at the airport 
          of departure`
        }
      ]
    },
    {
      title: "Time arriving at the airport",
      sublist: [
        {
          subtitle: `Time of arriving depend on tour operator and 
          airline`,
          info: ` Usually documents are issued 1–3 days 
          before departure, in our office or sent to you 
          by mail or our courier brings them (as you are 
          more comfortable with).
          Also, documents can be obtained directly on the 
          day of departure at the airport, 2-3 hours before 
          departure, from company representatives who will 
          be waiting for you at the airport`
        }
      ]
    },
    {
      title: "Documents for children",
      sublist: [
        {
          subtitle: "Original birth certificate",
          info: `It is necessary to take with you: the original birth 
          certificate of a child, regardless of whether the child is 
          traveling with one of the parents or with both (such a 
          requirement is not stated anywhere in the legislation, 
          but at the border they are most often asked to show it)
          `
        }, 
        {
          subtitle: "Notarized consent to leave",
          info: `Also, if the child leaves accompanied by one of the parents, 
          a notarized consent to leave the second parent is required. 
          If the child leaves accompanied by third parties (grandmother, 
          grandfather, brother, sister, aunt, uncle), it is necessary 
          to make a notarized consent to leave from both parents`
        }
      ]
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
