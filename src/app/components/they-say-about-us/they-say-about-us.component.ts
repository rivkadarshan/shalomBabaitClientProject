import { Component } from '@angular/core';


@Component({
  selector: 'app-they-say-about-us',
  templateUrl: './they-say-about-us.component.html',
  styleUrls: ['./they-say-about-us.component.css']
})
export class TheySayAboutUsComponent {
  cards = [
    { id: 1, title: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק.  תצטנפל בלינדו למרקל אס לכימפו, דול,  צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.  קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן",name:"ישראל ישראלי" },
    { id: 2, title: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק.  תצטנפל בלינדו למרקל אס לכימפו, דול,  צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.  קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן",name:"ישראל ישראלי" },
    { id: 3, title: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק.  תצטנפל בלינדו למרקל אס לכימפו, דול,  צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.  קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן",name:"ישראל ישראלי"},
    { id: 4, title: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק.  תצטנפל בלינדו למרקל אס לכימפו, דול,  צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.  קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן",name:"ישראל ישראלי" },
    { id: 5, title: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק.  תצטנפל בלינדו למרקל אס לכימפו, דול,  צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.  קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן",name:"ישראל ישראלי" },
  ];

  displayedCards: { id: number, title: string ,name:string}[] = [];

  ngOnInit() {
    this.showNextCards();
  }

  showNextCards() {
    const startIndex = this.displayedCards.length;
    this.displayedCards = this.cards.slice(startIndex, startIndex + 3);
  }

  showPrevCards() {
    const endIndex = this.displayedCards.length - 3;
    if (endIndex >= 0) {
      this.displayedCards = this.cards.slice(endIndex, endIndex + 3);
    }
  }

  prevCards() {
    this.showPrevCards();
  }

  nextCards() {
    this.showNextCards();
  }
}
