import { Renderer } from '../Renderer';
import { Element, isElement } from '../../xml-parser';
import { textStyleSupport } from '../text-style-support';
import Properties from '../Properties';
import ClassManager from '../ClassManager';
import { Substitutions } from '../Substitutions';
import RenderingEngine from '../RenderingEngine';

export default class AccordionItemHeaderRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'accordion-item-header';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine, substitutions: Substitutions, parent: Element | undefined): string {

        const data: Record<string, any> = {};
        data.id = parent!.attributes.id;
        data.active = parent?.attributes.active === "true";
        data.size = element.attributes.size;
        const classManager = new ClassManager(classMappings);
        textStyleSupport(data, element, classMappings);
        data.classes = classManager.toString();
        data.content = renderingEngine.renderChildren(element.children.find(el => isElement(el) && (el as Element).name === 'textual')! as Element);

        return renderingEngine.render('accordion-item-header.ftl', data);
    }
}
