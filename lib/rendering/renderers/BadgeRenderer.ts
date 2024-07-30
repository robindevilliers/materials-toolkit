import { Renderer } from '../Renderer';
import { Element, isElement } from '../../xml-parser';
import { textStyleSupport } from '../text-style-support';
import Properties from '../Properties';
import flexItemSupport from '../flex-item-support';
import ClassManager from '../ClassManager';
import RenderingEngine from '../RenderingEngine';
import { RenderError } from '../RenderError';

export default class BadgeRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'badge';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine): string {

        if (!element.attributes.v) {
            throw new RenderError("Version attribute 'v' not configured against element: " + element.name);
        }

        const data: Record<string, any> = {};
        data.id = element.attributes.id;
        data.size = element.attributes.size;

        const classManager = new ClassManager(classMappings);
        classManager.append(element.attributes.flavour, 'badge-', 'badge-default');
        textStyleSupport(data, element, classMappings);
        flexItemSupport(data, classManager, element.attributes);
        data.classes = classManager.toString();
        data.content = renderingEngine.renderChildren(element.children.find(el => isElement(el) && (el as Element).name === 'textual')! as Element);

        return renderingEngine.render('badge.ftl', data);
    }
}