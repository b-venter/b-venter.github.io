import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Article } from '../datainterface';
import { DataService } from '../data.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit, AfterViewInit, OnDestroy {
  article!: Article;
  articleList: Article[];
  private subdata: any;

  /* Linked to getting /:id */
  id!: number;
  private sub: any;

  //Show list or article individual
  slist: boolean;
  

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute, //Needed to retrieve :id
    private location: Location, //Needed for new url if :id is invalid
    ) 
    { 
    this.slist = true; //By default, show list of blogs.
    this.articleList = [];
  
  }

  ngOnInit() {

    /* To get id in blog/:id */
    this.getID();

    this.getBlogs();
  }

  ngAfterViewInit() {
  }

  getID(){
    this.sub = this.route.params.subscribe(
      params => this.id = +params['id'],
      );
  }

  getBlogs(){
    if (isNaN(this.id) == false) {
      this.slist = false;
      this.getBlogArticle(this.id);
    } else {
      this.getBlogList();        
    }
  }

  getBlogArticle(x: number){
    this.subdata = this.dataService.getArticle(x).subscribe( 
      article => this.article = article,
    );

    if (this.article == undefined) {
      this.slist = true;
      this.getBlogList();
      this.location.go("./blog");
    }
  }

  getBlogList(){
    this.subdata = this.dataService.getArticles().subscribe( 
      article => this.articleList = article,
      () => console.log("Error getting article list."),
      () => this.slist = true,
    );
  }

  delHTML(x: string) {
    x = x.replace(/\<.*?>/g, '');
    return x;
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe(); /* Actually not needed for Router, but not a bad practice.*/
    this.subdata.unsubscribe();
  }

}
