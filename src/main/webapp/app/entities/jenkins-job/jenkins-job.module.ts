import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipdashSharedModule } from '../../shared';
import {
    JenkinsJobService,
    JenkinsJobPopupService,
    JenkinsJobComponent,
    JenkinsJobDetailComponent,
    JenkinsJobDialogComponent,
    JenkinsJobPopupComponent,
    JenkinsJobDeletePopupComponent,
    JenkinsJobDeleteDialogComponent,
    jenkinsJobRoute,
    jenkinsJobPopupRoute,
} from './';

const ENTITY_STATES = [
    ...jenkinsJobRoute,
    ...jenkinsJobPopupRoute,
];

@NgModule({
    imports: [
        JhipdashSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        JenkinsJobComponent,
        JenkinsJobDetailComponent,
        JenkinsJobDialogComponent,
        JenkinsJobDeleteDialogComponent,
        JenkinsJobPopupComponent,
        JenkinsJobDeletePopupComponent,
    ],
    entryComponents: [
        JenkinsJobComponent,
        JenkinsJobDialogComponent,
        JenkinsJobPopupComponent,
        JenkinsJobDeleteDialogComponent,
        JenkinsJobDeletePopupComponent,
    ],
    providers: [
        JenkinsJobService,
        JenkinsJobPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipdashJenkinsJobModule {}
