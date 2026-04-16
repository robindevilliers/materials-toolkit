import { Renderer } from '../Renderer';
import { Element } from '../../xml-parser';
import Properties from '../Properties';
import flexItemSupport from '../flex-item-support';
import Store from '../../store/Store';
import ClassManager from '../ClassManager';
import RenderingEngine from '../RenderingEngine';
import generateId from '../../utilities/generate-id';
import { RenderError } from '../RenderError';

export default class WipExplorerRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'wip-explorer';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine): string {

        if (!element.attributes.v) {
            throw new RenderError("Version attribute 'v' not configured against element: " + element.name);
        }

        const values = Store.getMessages().map(m => {

                const [wizardName, wizardVersion] = m.getWizardId().split(":");
                const wizard = Store.getWizards().find(w => w.getName() === wizardName && w.getVersion() === wizardVersion);

                const [workflowGroup, workflowName, workflowVersion] = m.getWorkflowId().split(":");
                const workflow = Store.getWorkflows()
                    .find(w =>
                        w.getGroup() === workflowGroup &&
                        w.getName() === workflowName &&
                        w.getVersion() === workflowVersion
                    );

                return {
                    id: generateId(),
                    wipId: m.getWipId(),
                    kaseId: m.getKaseId(),
                    wizardId: m.getWizardId(),
                    wizardTitle: wizard?.getTitle(),
                    wizardDescription: wizard?.getDescription(),
                    workflowId: m.getWorkflowId(),
                    workflowTitle: workflow?.getTitle(),
                    workflowDescription: workflow?.getDescription(),
                    date: m.getDateTime().substring(0, 10),
                    dateTime: m.getDateTime(),
                    principal: m.getPrincipal(),
                    group: m.getGroup(),
                    queue: m.getQueue(),
                    action: '/' + m.getWipId(),
                    payload: ''
                };
            }
        );

        const data: Record<string, any> = {};
        data.id = element.attributes.id;
        data.values = values;
        data.wizard = "";
        data.queue = "";
        data.workflow = "";
        data.principal = "";
        data.startDate = "";
        data.endDate = "";
        data.action = "#" + generateId();
        data.parameters = {};
        data.workflows = Store.getWorkflows().map(w => {
            return {
                id: w.getGroup() + ":" + w.getName() + ":" + w.getVersion(),
                title: w.getTitle()
            };
        });
        data.wizards = Store.getWizards().map(w => {
            return {
                id: w.getName() + ":" + w.getVersion(),
                title: w.getTitle()
            };
        });
        data.queues = Store.getQueues();
        const classManager = new ClassManager(classMappings);
        flexItemSupport(data, classManager, element.attributes);
        data.classes = classManager.toString();
        data.testMode = Store.isTestContext();
        data.disablePrevious = false;
        data.disableNext = false;

        return renderingEngine.render('wip-explorer.ftl', data);
    }
}
