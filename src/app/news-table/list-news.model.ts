export class NewsListModel {
  successful!: boolean;
  data!: Array<NewsModel>;
}

export class NewsModel {
  NewsId!: number;
  NameNews!: string;
  Detail!: string;
  Status!: number;
  UpdatedDate!: Date;
  ButtonView!: number;
  ButtonEdit!: number;
  ButtonDelete!: number;

}


export class UpdateStatusNews{
  EmployeeId!: number;
  NewsId!: number;
  Status!: number;
}
