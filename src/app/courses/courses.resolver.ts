import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "app/reducers";
import { Observable } from "rxjs";
import { finalize, first, tap } from "rxjs/operators";
import { CourseActions } from "./action-types";


@Injectable()
export class CoursesResolver implements Resolve<any>{
    loading = false;
    constructor(private store: Store<AppState>) { }
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
        return this.store
            .pipe(
                tap(() => {
                    if (!this.loading) {
                        this.loading = true;
                        this.store.dispatch(CourseActions.loadAllCourses())
                    }
                }),
                first(),
                finalize(() => this.loading = false)
            )
    }
}