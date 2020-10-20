import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/youtube.models';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: Video[] = []

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
    this.youtubeService.getVideos().subscribe(resp => {
      this.videos.push(...resp);
      console.log(this.videos);
      
    })
  }

}
