import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../datainterface';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {
  article: Article[];
  private subdata: any;

  /* Linked to getting /:id */
  id!: number;
  private sub: any;

  //Show list or article individual
  slist: boolean;
  

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute, //Needed to retrieve :id
    ) 
    { 

    this.article = []; /**Due to Strict Typing, required to initialise.**/
    this.slist = true; //By default, show list of blogs.
  
  }

  ngOnInit() {

    /* To get id in blog/:id */
    this.sub = this.route.params.subscribe(
      params => {this.id = +params['id']}
    );

    this.getBlogArticle();
  }

  getBlogArticle(){
    this.subdata = this.dataService.getArticle().subscribe( 
      article => this.article = article,
      () => console.log("Error getting article."),
      () => this.showList()
    );
  }

  /* Test whether it is /blog or /blog/:id. And then whether id.
   * True results in a list of blogs showing. False results in viewing the selected blog */
  showList(){
    //Test if /:id is present
    if (isNaN(this.id) == false) {
      //Test if id has data in database. Return true if no data.
      if (this.article[this.id].id == undefined) {
        this.slist = true;
      } else {
        this.slist = false;
      }
    }else{
      this.slist = true;
    }
  }

  delHTML(x: string) {
    x = x.replace(/\<.*?>/g, '');
    return x;
  }

  /* Since we are pulling the article images in by [innerHTML], we need to manually set width. Doesn't happen with ccs */
  imgStyle(){
    var images = document.body.getElementsByTagName("img");
    for (let i = 1; i < images.length; i++){
      if (images[i].className != 'aticle-theme-pic') {
        images[i].style.width = '50%';
      }
    }
  }

  
  ngOnDestroy() {
    this.sub.unsubscribe(); /* Actually not needed for Router, but not a bad practice.*/
    this.subdata.unsubscribe();
  }

}
