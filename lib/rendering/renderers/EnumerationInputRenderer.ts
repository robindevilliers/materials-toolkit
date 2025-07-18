import { Renderer } from '../Renderer';
import Properties from '../Properties';
import flexItemSupport from '../flex-item-support';
import ClassManager from '../ClassManager';
import { Substitutions } from '../Substitutions';
import RenderingEngine from '../RenderingEngine';
import { Element, isElement } from '../../xml-parser';
import { RenderError } from '../RenderError';
import { textStyleSupport } from '../text-style-support';


export default class EnumerationInputRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'enumeration-input';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine, substitutions: Substitutions, parent: Element | undefined): string {

        if (!element.attributes.v) {
            throw new RenderError("Version attribute 'v' not configured against element: " + element.name);
        }

        const data: Record<string, any> = {};
        data.id = element.attributes.id;
        data.value = "";
        data.disabled = null;
        data.type = element.attributes.type;
        data.name = element.attributes.reference;
        data.size = element.attributes.size;
        data.style = element.attributes.style;
        data.cardinality = element.attributes.cardinality;
        data.content = renderingEngine.renderChildren(element.children.find(el => isElement(el) && (el as Element).name === 'textual')! as Element);

        const values = element.children
            .filter(n => isElement(n))
            .map(n => (n as Element))
            .filter(n => n.name === 'value');

        if (element.attributes.cardinality === 'MULTIPLE_SELECT') {
            data.value = values
                .filter(n => n.attributes.default === 'true')
                .map(n => n.attributes.key);
        } else {
            data.value = values
                .filter(n => n.attributes.default === 'true')
                .map(n => n.attributes.key)
                .find(n => true) || null;
        }

        data.panels = values.find(n => n.attributes.panel === 'true');

        data.values = values.map(value => ({
            key: value.attributes.key,
            label: value.attributes.label,
            panel: renderingEngine.renderElement(value, element)
        }));

        data.error = element.attributes.error;

        const classManager = new ClassManager(classMappings);
        textStyleSupport(data, element, classMappings);
        flexItemSupport(data, classManager, element.attributes);
        data.classes = classManager.toString();

        return renderingEngine.render('enumeration.ftl', data);
    }
}