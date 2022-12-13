import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../app//services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  misVideos:any[]=[];
  videoId:any;

  constructor(private _youtube:YoutubeService) { 
    
    this._youtube.obtenerVideos().subscribe((resp:any)=> {
      this.misVideos = resp.items;
      console.log(this.misVideos);
  
    });
  }

  ngOnInit(): void {
  }

  detalleVideo(a:string){
    console.log(a);
    
   this.videoId=a;
   $('#exampleModal').modal();
    
  }

  cerrarModal(){
    this.videoId=null;
    $('#exampleModal').modal('hide');
  }

}
