import { Renderer } from "../Renderer";
import { Element, isElement } from "../../xml-parser";
import Properties from "../Properties";
import RenderingEngine from "../RenderingEngine";
import { RenderError } from "../RenderError";
import Store from "../../store/Store";
import { StringBuffer } from "../../utilities/StringBuffer";
import generateId from "../../utilities/generate-id";
import ClassManager from "../ClassManager";
import flexItemSupport from "../flex-item-support";

export default class UserTrayRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'user-tray';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine): string {

        if (!element.attributes.v) {
            throw new RenderError("Version attribute 'v' not configured against element: " + element.name);
        }

        const children = element.children.filter(el => isElement(el)).map(el => el as Element);

        const header = children.find(el => el.name === "header");

        const values = Store.getUsers().map(user => {

                const buffer = new StringBuffer();
                for (let i = 0; i < children.length; i++) {
                    const child = children[i];

                    if (child.name != "header") {
                        buffer.append(renderingEngine.renderElement(child, element));
                    }
                }

                return {
                    action: "/operation/user-tray-open-user-page",
                    username: user.getUsername(),
                    title: user.getTitle(),
                    firstName: user.getFirstName(),
                    lastName: user.getLastName(),
                    email: user.getEmail(),
                    contactNumber: user.getContactNumber(),
                    timezone: user.getTimezone(),
                    dateOfBirth: user.getDateOfBirth(),
                    lastLoggedIn: '2026-01-01 15:33:45',
                    locked: false,
                    emailConfirmed: true,
                    retry: 0,
                    groups: user.getGroups(),
                    userData: null,
                    payload: '',
                    html: buffer.toString()
                };
            }
        );

        const data: Record<string, any> = {};
        data.id = element.attributes.id;
        data.header = header ? renderingEngine.renderElement(header, element) : "";
        data.values = values;
        data.trayId = generateId();
        data.source = "";
        data.action = "#" + generateId();
        data.testMode = Store.isTestContext();

        data.customisePanel = element.attributes.customisePanel === 'true';
        data.collapseFooter = element.attributes.collapseFooter === 'true';

        data.pageSize = Number(element.attributes.pageSize || 20);
        data.currentPage = 2;
        data.previousPage = 1;
        data.nextPage = 3;
        data.offeredPages = [1, 2, 3];

        const classManager = new ClassManager(classMappings);
        flexItemSupport(data, classManager, element.attributes);
        data.classes = classManager.toString();
        data.testMode = Store.isTestContext();

        return renderingEngine.render('user-tray.ftl', data);
    }
}