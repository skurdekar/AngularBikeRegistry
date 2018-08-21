import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-view-registration',
    templateUrl: './view-registration.component.html',
    styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

    constructor(private route: ActivatedRoute,
        private bikeService: BikeService) { }

    public bikeReg;

    ngOnInit() {
        console.log('!!!' + this.route.snapshot.params.id);
        this.getBikeReg(this.route.snapshot.params.id);
    }

    public getBikeReg(id: number) {
        this.bikeService.getBike(id).subscribe(
            data => this.bikeReg = data,
            err => console.log(err),
            () => console.log('bike loaded')
        );
    }
}
