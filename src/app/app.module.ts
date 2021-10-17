import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanModule } from './lan/lan.module';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from './core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

export function HttpLoaderFactory(httpClient: HttpClient) {
	return new TranslateHttpLoader(httpClient);
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		CoreModule,
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		LanModule,
		HomeModule,
		AdminModule,
		NgbPaginationModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
		FontAwesomeModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
			registrationStrategy: 'registerWhenStable:30000',
		}),
		NgbModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
