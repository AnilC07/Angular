export class LoggingService {
  logStatusChange(account:string){
    console.log('A server status changed, new status: ' + account);
  }
}
