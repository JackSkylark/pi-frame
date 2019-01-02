export class AppConfig 
{
    static readonly APP_NAME = 'pi-frame';
    static readonly PORT = 3000;
  
    static readonly API_VERSION = 1;
    static readonly API_URL = `/api/v${ AppConfig.API_VERSION }`;
  
    static readonly CLIENT_PORT = 8080;
}