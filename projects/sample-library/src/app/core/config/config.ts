import { InjectionToken } from "@angular/core";
export interface config {
    title: string;
}
export const configToken = new InjectionToken<config>("Default");
export const defaultConfig: config = { title: 'dfault Title'};