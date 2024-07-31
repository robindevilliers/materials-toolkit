import { Renderer } from '../Renderer';
import { Element } from '../../xml-parser';
import Properties from '../Properties';
import { Substitutions } from '../Substitutions';
import RenderingEngine from '../RenderingEngine';
import { StringBuffer } from '../../utilities/StringBuffer';
import { RenderError } from '../RenderError';

export default class LoopRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'loop';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine, substitutions: Substitutions): string {

        if (!element.attributes.v) {
            throw new RenderError("Version attribute 'v' not configured against element: " + element.name);
        }

        const output = new StringBuffer();

        if (element.attributes.reference in substitutions) {
            const val = substitutions[element.attributes.reference].value;
            if (!Array.isArray(val)) {
                throw new RenderError(`Expected array for substitution ${element.attributes.reference}`);
            }

            for (const v of val) {
                substitutions['.'] = { value: v };
                const data: Record<string, any> = {};
                data.content = renderingEngine.renderChildren(element);
                output.append(renderingEngine.render('loop.ftl', data));
            }
        } else {
            throw new RenderError(`No substitution found for plantain expression ${element.attributes.reference}`);
        }

        return output.toString();
    }
}