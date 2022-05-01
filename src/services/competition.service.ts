import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable()
export class CompetitionService {

    constructor(private apiService: ApiService) {
    }

    getCompetition(id: number) {
        this.apiService.get('Competition/Get/' + id, {}).subscribe(data => {
            console.log(data);
        });
    }

    getCompetitions() {
        this.apiService.get('Competition/Get', {}).subscribe(data => {
            console.log(data);
        });
    }

    addCoordinator(competitionId: number, coordinatorId: number) {
        this.apiService.post('Competition/AddCoordinator', {}, { competitionId: competitionId, coordinatorId: coordinatorId }).subscribe(data => {
            console.log(data);
        });
    }

    addJudge(competitionId: number, judgeId: number) {
        this.apiService.post('Competition/AddJudge', {}, { competitionId: competitionId, judgeId: judgeId }).subscribe(data => {
            console.log(data);
        });
    }

    scorePhoto(competitionId: number, photoId: number, score: number) {
        this.apiService.post('Competition/ScorePhoto', {}, { competitionId: competitionId, photoId: photoId, score: score }).subscribe(data => {
            console.log(data);
        });
    }
}