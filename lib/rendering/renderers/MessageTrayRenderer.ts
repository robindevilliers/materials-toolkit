import { Renderer } from '../Renderer';
import { Element, isElement } from '../../xml-parser';
import Properties from '../Properties';
import flexItemSupport from '../flex-item-support';
import generateId from '../../utilities/generate-id';
import Store from '../../store/Store';
import ClassManager from '../ClassManager';
import RenderingEngine from '../RenderingEngine';
import { RenderError } from '../RenderError';
import { StringBuffer } from "../../utilities/StringBuffer";

export default class MessageTrayRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'message-tray';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine): string {

        if (!element.attributes.v) {
            throw new RenderError("Version attribute 'v' not configured against element: " + element.name);
        }

        const children = element.children.filter(el => isElement(el)).map(el => el as Element);

        const header = children.find(el => el.name === "header");

        const values = Store.getMessages().map(m => {

                const buffer = new StringBuffer();
                for (let i = 0; i < children.length; i++) {
                    const child = children[i];

                    if (child.name != "header") {
                        buffer.append(renderingEngine.renderElement(child, element));
                    }
                }

                const [wizardName, wizardVersion] = m.getWizardId().split(":");
                const wizard = Store.getWizards().find(w => w.getName() === wizardName && w.getVersion() === wizardVersion);

                const [workflowGroup, workflowName, workflowVersion] = m.getWorkflowId().split(":");
                const workflow = Store.getWorkflows().find(w => w.getGroup() === workflowGroup && w.getName() === workflowName && w.getVersion() === workflowVersion);

                return {
                    action: "/workflow/continue-case/" + m.getWipId(),
                    wipId: m.getWipId(),
                    wizardId: m.getWizardId(),
                    wizardTitle: wizard?.getTitle(),
                    wizardDescription: wizard?.getDescription(),
                    workflowId: m.getWorkflowId(),
                    workflowTitle: workflow?.getTitle(),
                    workflowDescription: workflow?.getDescription(),
                    date: m.getDateTime().substring(0, 10),
                    dateTime: m.getDateTime(),
                    principal: m.getPrincipal(),
                    payload: '',
                    html: buffer.toString()
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
        data.action = "/operation/open-tray";
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

        return renderingEngine.render('message-tray.ftl', data);
    }
}