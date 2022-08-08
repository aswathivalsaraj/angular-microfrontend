import { Injectable } from '@angular/core';
export enum LogLevel {
  All = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Fatal = 5,
  Off = 6
}
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  level:LogLevel = LogLevel.All;
  constructor() { }
  
  debug(msg: string, ...optionalParams: any[]) {
    this.logMessage(msg, LogLevel.Debug, optionalParams)
  }
  Info(msg: string, ...optionalParams: any[]) {
    this.logMessage(msg, LogLevel.Info, optionalParams)
  }
  Warn(msg: string, ...optionalParams: any[]) {
    this.logMessage(msg, LogLevel.Warn, optionalParams)
  }
  Error(msg: string, ...optionalParams: any[]) {
    this.logMessage(msg, LogLevel.Error, optionalParams)
  }
  Fatal(msg: string, ...optionalParams: any[]) {
    this.logMessage(msg, LogLevel.Fatal, optionalParams)
  }
  log(msg: string, ...optionalParams: any[]) {
    this.logMessage(msg, LogLevel.All, optionalParams)
  }
  logMessage(msg: any, logLevel: number, params: any[] = []) {
    if (this.shouldLog(logLevel)) {
      console.log(new Date() + ": " + msg +": "+ JSON.stringify(params));
    }
  }
  shouldLog(level:number){
    let ret = false;

    if ((level >= this.level &&
      level !== LogLevel.Off) ||
      this.level === LogLevel.All) {
      ret = true;
    }

    return ret;
  }
}
