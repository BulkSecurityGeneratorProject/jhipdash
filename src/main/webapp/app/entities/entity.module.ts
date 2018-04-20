import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipdashApplicationModule } from './application/application.module';
import { JhipdashMavenModuleModule } from './maven-module/maven-module.module';
import { JhipdashSonarComponentModule } from './sonar-component/sonar-component.module';
import { JhipdashJenkinsFolderModule } from './jenkins-folder/jenkins-folder.module';
import { JhipdashJenkinsJobModule } from './jenkins-job/jenkins-job.module';
import { JhipdashJenkinsJobBuildModule } from './jenkins-job-build/jenkins-job-build.module';
import { JhipdashGitRepoModule } from './git-repo/git-repo.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipdashApplicationModule,
        JhipdashMavenModuleModule,
        JhipdashSonarComponentModule,
        JhipdashJenkinsFolderModule,
        JhipdashJenkinsJobModule,
        JhipdashJenkinsJobBuildModule,
        JhipdashGitRepoModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipdashEntityModule {}
