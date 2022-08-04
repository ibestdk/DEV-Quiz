import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NewsListModel, NewsModel } from './list-news.model';
import { NewsService } from './news-table.service';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.scss']
})
export class NewsTableComponent implements OnInit {
  modalRef?: BsModalRef;
  newsListData: Array<NewsModel> = [];
  newsStatus!: number;
  newsId!:number;
  selectedEventIds: any;
  employeeID = 3;

  onNewsStatusModal!: number;
  onNewsIdModal!:number;
  onNewsDetailModal! : string;
  onNewsNameModal! : string;

  newsStatusModal!: number;
  newsIdModal!:number;
  newsDetailModal! : string;
  newsNameModal! : string;

  constructor(private modalService: BsModalService, private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNewsList()
  }

  openModal(template: TemplateRef<any>, newsId: number , newsName: string , newsDetail: string , newsStatus: number) {
    this.newsIdModal = newsId;
    this.newsNameModal = newsName;
    this.newsDetailModal = newsDetail;
    this.newsStatusModal = newsStatus;
    this.modalRef = this.modalService.show(template, { class:  'modal-dialog-centered' });
  }


  getNewsList(){
    this.newsService.getUserList().subscribe((response) =>{
      if(response){
      this.newsListData = response.data
      // console.log(this.newsListData);
      }
    })
  }
  updateNewsStatus(){
    this.newsService.updateNewsStatus(this.employeeID ,this.newsId,this.newsStatus).subscribe((response) =>{
      if(response){
      // console.log(response);
      this.getNewsList();
      }
    })
  }

  public onChangedStatus(value:number , newId : number){
    if(value == 0){
      this.newsStatus = 1;
      this.newsStatusModal = 1
    }
    if(value == 1){
      this.newsStatus = 0;
      this.newsStatusModal = 0;
    }
    this.newsId = newId;
    this.updateNewsStatus();
    // console.log('value' + this.newsStatus)
    // console.log('newid' + this.newsId)
  }

}
