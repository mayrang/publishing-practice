import Loading from "./components/Loading";

export const routePaths = ["/", "/loading", "/publishing1"] as const;

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
    link: "/loading",
    name: "퍼블리싱 연습1",
    children: ["/loading"],
  },
  "/loading": {
    key: "/loading",
    link: "/loading",
    name: "로딩 애니메이션",
    children: Loading,
  },
};

export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children);

export const gnbRootList = (routes["/"] as ParentRoute).children.map(
  (r) => routes[r]
);
