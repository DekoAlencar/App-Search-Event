import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class Serivce {
    constructor(private http: HttpClient){}

    autoComplet(key:any){
        return this.http.get(environment.url+"/"+key);
    }

    timeline(){
        return this.http.get(environment.url);
    }
}