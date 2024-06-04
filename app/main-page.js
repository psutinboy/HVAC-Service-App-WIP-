import { createViewModel } from './main-view-model';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

function toggleMenu(args) {
  const sideMenu = args.object.page.getViewById("sideMenu");
  if (sideMenu.visibility === "collapsed") {
      sideMenu.visibility = "visible";
  } else {
      sideMenu.visibility = "collapsed";
  }
}

exports.toggleMenu = toggleMenu;
