import Keyframes from "./components/keyframes/Keyframes";

export const routePaths = ["/", "/keyframes", "/publishing1"] as const;

export type ROUTE_PATH = (typeof routePaths)[number];

type BaseRotue = {
  key: ROUTE_PATH;
  link: ROUTE_PATH;
  name: string;
};

export type ParentRoute = BaseRotue & {
  children: ROUTE_PATH[];
};

export type ChildRoute = BaseRotue & {
  children: ((props: unknown) => JSX.Element) | null;
};

export type ROUTE = ParentRoute | ChildRoute;

export const routes: Record<ROUTE_PATH, ROUTE> = {
  "/": {
    key: "/",
    link: "/",
    name: "메인 페이지",
    children: ["/publishing1"],
  },
  "/publishing1": {
    key: "/publishing1",
    link: "/keyframes",
    name: "퍼블리싱 연습1",
    children: ["/keyframes"],
  },
  "/keyframes": {
    key: "/keyframes",
    link: "/keyframes",
    name: "keyframes",
    children: Keyframes,
  },
};

export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children);

export const gnbRootList = (routes["/"] as ParentRoute).children.map(
  (r) => routes[r]
);
