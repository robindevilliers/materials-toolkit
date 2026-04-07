import TitleRenderer from './TitleRenderer';
import TextRenderer from './TextRenderer';
import DivRenderer from './DivRenderer';
import LoginPanelRenderer from './LoginPanelRenderer';
import PageRenderer from './PageRenderer';
import WellRenderer from './WellRenderer';
import UserExplorerRenderer from './UserExplorerRenderer';
import ImageRenderer from './ImageRenderer';
import LinkRenderer from './LinkRenderer';
import BackLinkRenderer from './BackLinkRenderer';
import RegisterPanelRenderer from './RegisterPanelRenderer';
import ResetPasswordRequestPanelRenderer from './ResetPasswordRequestPanelRenderer';
import ResetPasswordPanelRenderer from './ResetPasswordPanelRenderer';
import AccordionItemHeaderRenderer from './AccordionItemHeaderRenderer';
import InsetTextRenderer from './InsetTextRenderer';
import AccordionItemRenderer from './AccordionItemRenderer';
import WarningRenderer from './WarningRenderer';
import ColumnRenderer from './ColumnRenderer';
import RowRenderer from './RowRenderer';
import CellRenderer from './CellRenderer';
import TableRenderer from './TableRenderer';
import BadgeRenderer from './BadgeRenderer';
import AccordionRenderer from './AccordionRenderer';
import CardHeaderRenderer from './CardHeaderRenderer';
import CardBodyRenderer from './CardBodyRenderer';
import CardFooterRenderer from './CardFooterRenderer';
import CardRenderer from './CardRenderer';
import IconRenderer from './IconRenderer';
import ToolTipRenderer from './ToolTipRenderer';
import ListItemRenderer from './ListItemRenderer';
import ListRenderer from './ListRenderer';
import CookieConsentRenderer from './CookieConsentRenderer';
import FakeStoreRenderer from './FakeStoreRenderer';
import ErrorSummaryRenderer from './ErrorSummaryRenderer';
import InputRenderer from './InputRenderer';
import EnumerationInputRenderer from './EnumerationInputRenderer';
import ValueRenderer from './ValueRenderer';
import ScaleRenderer from './ScaleRenderer';
import JumbotronRenderer from './JumbotronRenderer';
import CarouselRenderer from './CarouselRenderer';
import CarouselPanelRenderer from './CarouselPanelRenderer';
import ProgressBarRenderer from './ProgressBarRenderer';
import FormRenderer from './FormRenderer';
import WizardTestResultsRenderer from './WizardTestResultsRenderer';
import FakeUserRenderer from './FakeUserRenderer';
import FakeMessageRenderer from './FakeMessageRenderer';
import FakeWizardRenderer from './FakeWizardRenderer';
import FakeWorkflowRenderer from './FakeWorkflowRenderer';
import MileStoneRenderer from './MileStoneRenderer';
import FakePageRenderer from './FakePageRenderer';
import HorizontalRuleRenderer from './HorizontalRuleRenderer';
import MenuRenderer from './MenuRenderer';
import MenuBrandRenderer from './MenuBrandRenderer';
import MenuItemRenderer from './MenuItemRenderer';
import SubMenuRenderer from './SubMenuRenderer';
import SubMenuLabelRenderer from './SubMenuLabelRenderer';
import MessageTrayRenderer from './MessageTrayRenderer';
import HeaderRenderer from './HeaderRenderer';
import FakeQueueRenderer from './FakeQueueRenderer';
import MessageExplorerRenderer from './MessageExplorerRenderer';
import NotificationBannerRenderer from './NotificationBannerRenderer';
import EmailRenderer from './EmailRenderer';
import EmailConfirmationLinkRenderer from './EmailConfirmationLinkRenderer';
import PasswordResetLinkRenderer from './PasswordResetLinkRenderer';
import ConfirmationPanelRenderer from './ConfirmationPanelRenderer';
import BrRenderer from './BrRenderer';
import SpanRenderer from './SpanRenderer';
import UuidRenderer from './UuidRenderer';
import ScriptRenderer from './ScriptRenderer';
import LoopRenderer from './LoopRenderer';
import SwitchRenderer from './SwitchRenderer';
import FakeGroupRenderer from './FakeGroupRenderer';
import TextualRenderer from './TextualRenderer';
import PaginationRenderer from "./PaginationRenderer";
import FolderRenderer from "./FolderRenderer";
import TimezoneSelectRenderer from "./TimezoneSelect";
import ButtonRenderer from "./ButtonRenderer";
import ColorPickerRenderer from "./ColorPickerRenderer";
import SelectPanelRenderer from "./SelectPanelRenderer";
import SelectPanelItemRenderer from "./SelectPanelItemRenderer";
import FontPickerRenderer from "./FontPickerRenderer";
import FakeKaseRenderer from "./FakeKaseRenderer";
import KaseExplorerRenderer from "./KaseExplorerRenderer";
import KaseTrayRenderer from "./KaseTrayRenderer";

const registry = [
    new TitleRenderer(),
    new TextRenderer(),
    new DivRenderer(),
    new LoginPanelRenderer(),
    new WellRenderer(),
    new UserExplorerRenderer(),
    new ImageRenderer(),
    new LinkRenderer(),
    new BackLinkRenderer(),
    new RegisterPanelRenderer(),
    new PageRenderer(),
    new ResetPasswordRequestPanelRenderer(),
    new ResetPasswordPanelRenderer(),
    new AccordionItemHeaderRenderer(),
    new InsetTextRenderer(),
    new AccordionItemRenderer(),
    new WarningRenderer(),
    new ColumnRenderer(),
    new RowRenderer(),
    new CellRenderer(),
    new TableRenderer(),
    new BadgeRenderer(),
    new AccordionRenderer(),
    new CardHeaderRenderer(),
    new CardBodyRenderer(),
    new CardFooterRenderer(),
    new CardRenderer(),
    new IconRenderer(),
    new ToolTipRenderer(),
    new ListItemRenderer(),
    new ListRenderer(),
    new CookieConsentRenderer(),
    new FakeStoreRenderer(),
    new ErrorSummaryRenderer(),
    new InputRenderer(),
    new EnumerationInputRenderer(),
    new ValueRenderer(),
    new ScaleRenderer(),
    new ButtonRenderer(),
    new JumbotronRenderer(),
    new CarouselRenderer(),
    new CarouselPanelRenderer(),
    new ProgressBarRenderer(),
    new FormRenderer(),
    new WizardTestResultsRenderer(),
    new FakeUserRenderer(),
    new FakeMessageRenderer(),
    new FakeWizardRenderer(),
    new FakeWorkflowRenderer(),
    new FakePageRenderer(),
    new FakeQueueRenderer(),
    new FakeGroupRenderer(),
    new MileStoneRenderer(),
    new HorizontalRuleRenderer(),
    new MenuRenderer(),
    new MenuBrandRenderer(),
    new MenuItemRenderer(),
    new SubMenuRenderer(),
    new SubMenuLabelRenderer(),
    new MessageTrayRenderer(),
    new HeaderRenderer(),
    new MessageExplorerRenderer(),
    new NotificationBannerRenderer(),
    new EmailRenderer(),
    new EmailConfirmationLinkRenderer(),
    new PasswordResetLinkRenderer(),
    new ConfirmationPanelRenderer(),
    new BrRenderer(),
    new SpanRenderer(),
    new UuidRenderer(),
    new ScriptRenderer(),
    new LoopRenderer(),
    new PaginationRenderer(),
    new SwitchRenderer(),
    new TextualRenderer(),
    new FolderRenderer(),
    new TimezoneSelectRenderer(),
    new ColorPickerRenderer(),
    new SelectPanelRenderer(),
    new SelectPanelItemRenderer(),
    new FontPickerRenderer(),
    new FakeKaseRenderer(),
    new KaseExplorerRenderer(),
    new KaseTrayRenderer()
];

export function findRenderer(name: string) {
    return registry.find(builtin => builtin.accept(name));
}