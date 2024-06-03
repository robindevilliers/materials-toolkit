import { Renderer } from '../Renderer';
import { Element } from '../../xml-parser';
import Properties from '../Properties';
import flexItemSupport from '../flex-item-support';
import ClassManager from '../ClassManager';
import RenderingEngine from '../RenderingEngine';
import generateId from '../../utilities/generate-id';
import Store from '../../store/Store';

export default class WizardIntroPanelRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'wizard-intro-panel';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine): string {

        const data: Record<string, any> = {};
        data.id = element.attributes.id;
        data._csrf = generateId();

        const classManager = new ClassManager(classMappings);
        flexItemSupport(data, classManager, element.attributes);
        data.classes = classManager.toString();
        data.action = "/wizard/intro/123";
        data.testMode = Store.isTestContext();

        return renderingEngine.render('wizard-intro-panel.ftl', data);
    }
}