import { Renderer } from '../Renderer';
import { Element } from '../../xml-parser';
import { textStyleSupport } from '../text-style-support';
import Properties from '../Properties';
import ClassManager from '../ClassManager';
import RenderingEngine from '../RenderingEngine';

export default class ColumnRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'column';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine): string {

        const data: Record<string, any> = {};
        data.id = element.attributes.id;
        data.content = renderingEngine.renderChildren(element);

        const classManager = new ClassManager(classMappings);
        textStyleSupport(data, classManager, element.attributes, classMappings);
        data.classes = classManager.toString();

        return renderingEngine.render('column.ftl', data);
    }
}