import { Renderer } from '../Renderer';
import { Element } from '../../xml-parser';
import Properties from '../Properties';
import RenderingEngine from '../RenderingEngine';
import User from '../../store/User';
import Store from '../../store/Store';

export default class FakeUserRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'fake-user';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine): string {

        Store.addUser(new User(
            element.attributes.username,
            element.attributes.title,
            element.attributes.firstName,
            element.attributes.lastName,
            element.attributes.email,
            element.attributes.contactNumber,
            element.attributes.dateOfBirth,
            element.attributes.timezone,
            element.attributes.groups.split(":").filter(grp => grp.trim().length),
            element.attributes.userData,
        ));

        return renderingEngine.renderChildren(element);
    }
}
