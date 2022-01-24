import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export function getBaseUrl(){
  return 'https://hsp.krishnasmartsystem.com/api_project/public/api';
}
export function getFileUrl(){
  return 'https://hsp.krishnasmartsystem.com/api_project/public';
}
const providers = [
  {provide: 'baseUrl', useFactory: getBaseUrl, deps:[]},
  {provide: 'fileUrl', useFactory: getFileUrl, deps:[]}

]

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
