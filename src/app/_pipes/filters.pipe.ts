import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "filter",
    pure: false
})
export class FilterPipe implements PipeTransform {

    transform(values: any, args?: any[]): any[] {
        return values = values.filter(a => {
            if (args.length) {
                if (this.isRelatedProperty(args, 'Topic')) {
                    return args.map(function (e) { return e.value }).indexOf(a._source.Topic) != -1;
                } else if (this.isRelatedProperty(args, 'Unit')) {
                    return args.map(function (e) { return e.value }).indexOf(a._source.Unit) != -1;
                } else if (this.isRelatedProperty(args, 'Grade')) {
                    return args.map(function (e) { return e.value }).indexOf(a._source.Grade) != -1;
                }
            } else {
                return values;
            }
        })
    }

    isRelatedProperty(args: any[], property): boolean {
        return args.map(function (e) { return e.property }).indexOf(property) != -1
    }
}