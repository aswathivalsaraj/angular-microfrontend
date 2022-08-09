import { optionConfig } from "./attribute-config"
export class FieldConfig {
    [x: string]: any;
    id?: string;   // html id attribute
    name!: string; // name of the formcontrol
    disabled?: boolean; // For disabled attribute visibility
    control!: string; // identify which html form control to be displayed. e.g checkbox, input etc
    clearControl?: boolean; //option to clear input with a close icon at the end 
    controlShow?: boolean; // control will be hidden if this flag is false
    label?: string; // html label attribute for displaying text near to control
    type?: string;
    pattern?:string;
    value?: (string | string[]);
    defaultVal?: string;
    isChecked?: boolean;
    options?: optionConfig[]
    placeholder?: string;
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    colLayout?: string;
    inlineLabel?: boolean;  
    format?: string;
    errorMsg!: any[];
    formsubmit?: boolean;
}                       