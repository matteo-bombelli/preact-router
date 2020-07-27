import { subscribers, getCurrentUrl, route, Router, Route, Link, exec, HashLink } from './index';

Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.HashLink = HashLink;
Router.Link = Link;
Router.exec = exec;

export default Router;
