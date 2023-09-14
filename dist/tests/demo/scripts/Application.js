"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cascade_1 = require("cascade");
const ArtistryCascade_1 = require("../../../scripts/modules/ArtistryCascade");
const ButtonView_1 = require("./views/button/ButtonView");
const RangeView_1 = require("./views/range/RangeView");
const ToggleView_1 = require("./views/toggle/ToggleView");
const CalendarView_1 = require("./views/calendar/CalendarView");
const ProgressBarView_1 = require("./views/progressBar/ProgressBarView");
const MenuBarView_1 = require("./views/menuBar/MenuBarView");
const ModalView_1 = require("./views/modal/ModalView");
const SectionView_1 = require("./views/section/SectionView");
const CarouselView_1 = require("./views/carousel/CarouselView");
const TabView_1 = require("./views/tab/TabView");
const TableView_1 = require("./views/table/TableView");
const PagerView_1 = require("./views/pager/PagerView");
const ListView_1 = require("./views/list/ListView");
const ScrollableView_1 = require("./views/scrollable/ScrollableView");
const FormView_1 = require("./views/form/FormView");
const FileUploadView_1 = require("./views/file-upload/FileUploadView");
const CodeView_1 = require("./views/code/CodeView");
const DrawerView_1 = require("./views/drawer/DrawerView");
const GridView_1 = require("./views/grid/GridView");
const ViewModel_1 = require("./ViewModel");
const User_1 = require("./models/User");
const UserListView_1 = require("./views/user/UserListView");
const CardView_1 = require("./views/card/CardView");
const NotificationView_1 = require("./views/notification/NotificationView");
class Application {
    static run() {
        var viewModel = new ViewModel_1.default();
        window.viewModel = viewModel;
        window.User = User_1.default;
        ArtistryCascade_1.Portal.addElement('layer-fixed', 'layer-fixed');
        ArtistryCascade_1.Portal.addElement('layer-overlay', 'layer-overlay');
        ArtistryCascade_1.Portal.addElement('layer-flyout', 'layer-flyout');
        ArtistryCascade_1.BodyScroll.init();
        ArtistryCascade_1.DepthStack.init();
        cascade_1.default.render(document.getElementById('layer-root'), cascade_1.default.createElement(ArtistryCascade_1.Container, { menuBarTop: true, screenSize: "all" },
            cascade_1.default.createElement(MenuBarView_1.default, null),
            cascade_1.default.createElement("h2", null, "Components"),
            cascade_1.default.createElement(ButtonView_1.default, null),
            cascade_1.default.createElement(RangeView_1.default, null),
            cascade_1.default.createElement(ToggleView_1.default, null),
            cascade_1.default.createElement(CalendarView_1.default, null),
            cascade_1.default.createElement(ProgressBarView_1.default, null),
            cascade_1.default.createElement(ModalView_1.default, null),
            cascade_1.default.createElement(DrawerView_1.default, null),
            cascade_1.default.createElement(SectionView_1.default, null),
            cascade_1.default.createElement(CarouselView_1.default, null),
            cascade_1.default.createElement(TabView_1.default, null),
            cascade_1.default.createElement(TableView_1.default, null),
            cascade_1.default.createElement(PagerView_1.default, null),
            cascade_1.default.createElement(ListView_1.default, null),
            cascade_1.default.createElement(ScrollableView_1.default, null),
            cascade_1.default.createElement(FormView_1.default, null),
            cascade_1.default.createElement(FileUploadView_1.default, null),
            cascade_1.default.createElement(CodeView_1.default, null),
            cascade_1.default.createElement(GridView_1.default, null),
            cascade_1.default.createElement(CardView_1.default, null),
            cascade_1.default.createElement(NotificationView_1.default, null),
            cascade_1.default.createElement("h2", null, "Examples"),
            cascade_1.default.createElement(UserListView_1.default, { viewModel: viewModel })));
        console.log('started');
        var user = new User_1.default('First', 'User');
        viewModel.users.push(user);
    }
}
exports.default = Application;
//# sourceMappingURL=Application.js.map