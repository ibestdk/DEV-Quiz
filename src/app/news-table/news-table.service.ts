import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders, HttpParams,  } from '@angular/common/http';
import {NewsListModel, UpdateStatusNews } from '../news-table/list-news.model';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient) {

  }

  getUserList(): Observable<NewsListModel>{
    const url = `${environment.newsAPI}uapi/drt-ElectronicsDocument/ED-GetNews?EmployeeId=3`;
    return this.http.get<NewsListModel>(url);
  }

  updateNewsStatus(empId: number, newsId: number, newsstatus: number): Observable<UpdateStatusNews> {
    const apiPath = `${environment.newsAPI}uapi/drt-ElectronicsDocument/ED-UpdateStatusNews`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'});
    const params = new HttpParams().set('EmployeeId', empId)
                                   .set('NewsId', newsId)
                                   .set('Status', newsstatus);
    return this.http.post<UpdateStatusNews>(apiPath, params, { headers: headers });
  }
}
