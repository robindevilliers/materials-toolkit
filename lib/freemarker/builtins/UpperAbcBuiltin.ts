import { Literal, Value } from '../expression/Value';
import { NoArgBuiltin } from './NoArgBuiltin';

export class UpperAbcBuiltin extends NoArgBuiltin {

    accept(subject: any, name: string): boolean {
        return typeof subject === "number" && name === "upper_abc";
    }

    evaluate(subject: any, data: Record<string, any>): Value {
        const result: string[] = [];
        let val = subject;

        while (val > 0) {
            let units = (val - 1) % 26;
            result.unshift(String.fromCharCode(units + 65));
            val = (val - (units + 1)) / 26;
        }

        return Literal.of(result.join(""));
    }
}