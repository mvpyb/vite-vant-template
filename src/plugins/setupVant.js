// import * as VantComponents from 'vant'
// import { isObject } from '@/utils/validate'
// import {
//   Button,
//   Cell,
//   Icon,
//   Image,
//   Col, Row,
//   Popup,
//   Space,
//   Toast,
//   Calendar,
//   Cascader,
//   Checkbox, CheckboxGroup,
//   DatePicker,
//   Field, CellGroup, Form,
//
//   NumberKeyboard,
//   PasswordInput,
//   Picker,
//   PickerGroup,
//   RadioGroup, Radio,
//   Rate,
//   Search,
//   Slider,
//   Stepper,
//   Switch,
//   TimePicker,
//   Uploader,
//   ActionSheet,
//   Dialog,
//   DropdownMenu, DropdownItem,
//   Loading,
//   Notify,
//   Overlay,
//   PullRefresh,
//   ShareSheet,
//   SwipeCell,
//   Badge,
//   Circle,
//   Collapse, CollapseItem,
//   CountDown,
//   Divider,
//   Empty,
//   ImagePreview,
//   Lazyload,
//   List,
//   NoticeBar,
//   Popover,
//   Progress,
//   Skeleton, SkeletonTitle, SkeletonImage, SkeletonAvatar, SkeletonParagraph,
//   Step, Steps,
//   Sticky,
//   Swipe, SwipeItem,
//   Tag,
//   ActionBar, ActionBarIcon, ActionBarButton,
//   Grid, GridItem,
//   IndexBar, IndexAnchor,
//   NavBar,
//   Pagination,
//   Sidebar, SidebarItem,
//   Tab, Tabs,
//   Tabbar, TabbarItem,
//   TreeSelect,
//   BackTop,
//   AddressEdit,
//   AddressList,
//   Area,
//   Card,
//   ContactCard,
//   ContactEdit,
//   ContactList,
//   Coupon, CouponCell, CouponList,
//   SubmitBar
// } from 'vant'
// import {
//   ConfigProvider
// } from 'vant'

import Vant from 'vant'
// const plugins = []
// const components = []

export function setupVant( app ) {
  // for ( const [key, component] of Object.entries( VantComponents ) ) {
  //   if ( isObject( component ) && component.name && component.install ) {
  //     // app.component( key, component )
  //     app.use(component);
  //   }
  // }
  app.use( Vant )
}
