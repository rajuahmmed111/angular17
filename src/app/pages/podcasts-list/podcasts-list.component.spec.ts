import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastsListComponent } from './podcasts-list.component';

describe('PodcastsListComponent', () => {
  let component: PodcastsListComponent;
  let fixture: ComponentFixture<PodcastsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodcastsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PodcastsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
