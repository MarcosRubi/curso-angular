import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tags(): string[] {
    return this.gifsService.getTagsHistory;
  }

  searchTag(tagName: string): void {
    this.gifsService.setSearchTag(tagName);
  }

  removeTagList(index: number): void {
    this.gifsService.removeTagList(index);
  }
}
