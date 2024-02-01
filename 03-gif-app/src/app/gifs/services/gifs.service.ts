import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagHistory: string[] = [];
  private API_BASE_URL: string = 'https://api.giphy.com/v1/gifs';
  private API_KEY: string = 'xmOj0qIZJXHZZ9vXuva3UtIK6wJZhBNX';
  public gifsList: Gif[] = [];

  constructor(private http: HttpClient) {
    this.getTagsLocalStorage();
  }

  get getTagsHistory(): string[] {
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('tags', JSON.stringify(this._tagHistory));
  }
  private getTagsLocalStorage(): void {
    if (!localStorage.getItem('tags')) return;

    this._tagHistory = JSON.parse(localStorage.getItem('tags')!);

    if (this._tagHistory.length !== 0) {
      this.setSearchTag(this._tagHistory[0]);
    }
  }

  public removeTagList(index: number): void {
    this._tagHistory.splice(index, 1);
    this.saveLocalStorage();

    if (this._tagHistory.length > 0) {
      this.setSearchTag(this._tagHistory[0]);
    }
  }

  public setSearchTag(tag: string): void {
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('limit', 10)
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.API_BASE_URL}/search`, { params })
      .subscribe((resp) => (this.gifsList = resp.data));
  }
}
