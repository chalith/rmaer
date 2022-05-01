import { Injectable } from "@angular/core";
import { PhotoDto } from "../dtos/photo-dto";
import { ApiService } from "./api.service";

@Injectable()
export class PhotoService {

    constructor(private apiService: ApiService) {
    }

    add(photoDto: PhotoDto) {
        this.apiService.post('Photo/Add', {}, photoDto).subscribe(data => {
            console.log(data);
        });
    }

    get(id: number) {
        this.apiService.get('Photo/Get/' + id, {}).subscribe(data => {
            console.log(data);
        });
    }

    getAll(competitionId: number) {
        this.apiService.get('Photo/GetAll/' + competitionId, {}).subscribe(data => {
            console.log(data);
        });
    }

    addToCompetition(photoId: number, competitionId: number) {
        this.apiService.post('Photo/AddToCompetition', {}, { photoId: photoId, competitionId: competitionId }).subscribe(data => {
            console.log(data);
        });
    }
}