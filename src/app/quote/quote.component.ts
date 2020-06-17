import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'First Quote', 'njoki', 'Author 1'),
    new Quote(2, 'Second Quote', 'ryan', 'Author 2'),
    new Quote(3, 'Third Quote', 'makumba', 'Author 3'),
    new Quote(4, 'Fourth Quote', 'maureen', 'Author 4'),
    
  ];


  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote);
  }


  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`You are about to delete this quote!! ${this.quotes[index].quote} ?`)

      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  toggleDetails(index){
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
