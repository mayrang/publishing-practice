import { ROUTE_PATH, isParentRoute, routes } from "@/routes";

export default function PageItem({
  params: { item },
}: {
  params: { item: string | string[] };
}) {
  const path = ["", ...item].join("/") as ROUTE_PATH;
  const route = routes[path];
  if (!!isParentRoute(route) || !route?.children) {
    return null;
  }
  const { children: Component } = route;
  return <Component />;
}
