export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUserRespoonse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: ISupport;
}

export interface ISupport {
  url: string;
  text: string;
}

export class User {
  /**
   *
   */
  constructor(
    id: number,
    name: string,
    year: number,
    color: string,
    pantone_value: string
  ) {}
}
