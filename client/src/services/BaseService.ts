import axios, { AxiosInstance } from "axios"

export default class BaseService {
  public connection: AxiosInstance;
  public endpoint?: string

  constructor(url = 'http://localhost:8000/api') {
    this.connection = axios.create({baseURL: url});
  }
}
