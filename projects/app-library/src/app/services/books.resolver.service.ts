import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Books } from "../models/books.model";
import { BooksService } from "./books.service";

@Injectable({ providedIn: 'root' })
export class BooksResolver implements Resolve<Books[]> {
  apiUrl: string;
  constructor(private service: BooksService, private http: HttpClient) {
    console.log("Inside resolver constructor")
  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Books[]> {
    return this.http.get<Books[]>(this.service.apiUrl+"/books")
 }
}