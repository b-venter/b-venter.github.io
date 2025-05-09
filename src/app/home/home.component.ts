import { Component, OnInit, OnDestroy } from '@angular/core';

import { Article } from '../datainterface';
import { DataService } from '../data.service';

import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog'; //Modal

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  article: Article[];
  private subdata: any;
  latest!: Article[];

  numCards = 3;

  menuClass :string = 'menu';
  headerClass :string = 'header';
  mottoClass :string = 'motto';
  spacerClass :string = 'spacer';

  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
  ) {
    this.article = []; /**Due to Strict Typing, required to initialise. Can use ! to ignore**/
   }

  ngOnInit(): void {
    this.getBlogArticle();
  }

  getBlogArticle(){
    this.subdata = this.dataService.getArticles().subscribe( 
      article => {this.article = article}
    );
    if (this.article.length > 3) {
      this.latest = this.article.slice(Math.max(this.article.length - this.numCards, 1));
    } else {
      this.latest = this.article;
    }
  }

  delHTML(x: string) {
    x = x.replace(/\<.*?>/g, '');
    return x;
  }

  ngOnDestroy() {
    this.subdata.unsubscribe();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'search-dialog',
  templateUrl: 'search-dialog.html',
})
export class DialogContentExampleDialog {}