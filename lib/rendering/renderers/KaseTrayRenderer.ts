import { Renderer } from '../Renderer';
import { Element, isElement } from '../../xml-parser';
import Properties from '../Properties';
import flexItemSupport from '../flex-item-support';
import generateId from '../../utilities/generate-id';
import Store from '../../store/Store';
import ClassManager from '../ClassManager';
import RenderingEngine from '../RenderingEngine';
import { RenderError } from '../RenderError';

export default class KaseTrayRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'kase-tray';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine): string {

        if (!element.attributes.v) {
            throw new RenderError("Version attribute 'v' not configured against element: " + element.name);
        }

        const children = element.children.filter(el => isElement(el)).map(el => el as Element);

        const header = children.find(el => el.name === "header");

        const values = Store.getKases().map(m => {

                const [workflowGroup, workflowName, workflowVersion] = m.getWorkflowId().split(":");
                const workflow = Store.getWorkflows().find(w => w.getGroup() === workflowGroup && w.getName() === workflowName &&
                    w.getVersion() === workflowVersion);

                return {
                    id: generateId(),
                    action: "/operation/kase-tray-open-kase",
                    kaseId: m.getId(),
                    workflowId: m.getWorkflowId(),
                    workflowTitle: workflow?.getTitle(),
                    workflowDescription: workflow?.getDescription(),
                    date: m.getDateTime().substring(0, 10),
                    dateTime: m.getDateTime(),
                    principal: m.getPrincipal(),
                    payload: ''
                };
            }
        );

        const data: Record<string, any> = {};
        data.id = element.attributes.id;
        data._csrf = generateId();
        data.header = header ? renderingEngine.renderElement(header, element) : "";
        data.values = values;
        data.trayId = generateId();
        data.source = "";
        data.action = "/operation/kase-tray-open-kase";
        data.parameters = {};
        data.testMode = Store.isTestContext();

        data.customisePanel = element.attributes.customisePanel === 'true';
        data.collapseFooter = element.attributes.collapseFooter === 'true';

        data.pageSize = Number(element.attributes.pageSize || 20);
        data.currentPage = 2;
        data.previousPage = 1;
        data.nextPage = 3;
        data.offeredPages = [1, 2, 3 ];

        const classManager = new ClassManager(classMappings);
        flexItemSupport(data, classManager, element.attributes);
        data.classes = classManager.toString();
        data.testMode = Store.isTestContext();

        return renderingEngine.render('kase-tray.ftl', data);
    }
}