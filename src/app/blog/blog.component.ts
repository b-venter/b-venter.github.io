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
  

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute, //Needed to retrieve :id
    ) 
    { 

    this.article = []; /**Due to Strict Typing, required to initialise.**/
  
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
      article => {this.article = article}
    );
  }

  /* Test whether it is /blog or /blog/:id */
  showList(){
    if (isNaN(this.id) == false) {
      return false;
    }else{
      return true;
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
