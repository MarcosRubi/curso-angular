import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gif-search-box',
  template: ` <header
    class="search-gif py-3 bg-dark text-white d-flex justify-content-center"
  >
    <div class="col-10 col-lg-8 col-xl-4">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Nombre del gif"
          #txtSearch
          (keyup.enter)="searchTag()"
        />
      </div>
    </div>
  </header>`,
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  @ViewChild('txtSearch')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private giftService: GifsService) {}

  searchTag(): void {
    const newTag = this.tagInput.nativeElement;

    if (newTag.value === '') return;

    this.giftService.setSearchTag(newTag.value);

    newTag.value = '';
  }
}
