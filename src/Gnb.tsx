"use client";
import { useParams } from "next/navigation";
import {
  ChildRoute,
  ParentRoute,
  ROUTE,
  ROUTE_PATH,
  gnbRootList,
  isParentRoute,
  routes,
} from "./routes";
import Link from "next/link";
import cls from "classnames";
function ParentRouteItem({
  route,
  currentPath,
}: {
  route: ParentRoute;
  currentPath: ROUTE_PATH;
}) {
  return (
    <div className="parentContainer">
      <div>
        <Link href={route.link} className="parentLink">
          {route.name}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_360)">
              <path
                d="M17 9L12 14L7 9"
                stroke="#333333"
                strokeOpacity="0.9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_360">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
      {route.children?.map((r) => (
        <GnbItem route={routes[r]} currentPath={currentPath} />
      ))}
    </div>
  );
}

function ChildrenRouteItem({
  route,
  currentPath,
}: {
  route: ChildRoute;
  currentPath: ROUTE_PATH;
}) {
  return (
    <Link
      href={route.link}
      className={cls("childrenLink", { current: currentPath === route.link })}
    >
      {route.name}
    </Link>
  );
}

function GnbItem({
  route,
  currentPath,
}: {
  route: ROUTE;
  currentPath: ROUTE_PATH;
}) {
  if (isParentRoute(route))
    return <ParentRouteItem route={route} currentPath={currentPath} />;
  return <ChildrenRouteItem route={route} currentPath={currentPath} />;
}

export default function Gnb() {
  const { item = [] } = useParams();
  const currentPath = ["", ...item].join("/") as ROUTE_PATH;
  return (
    <div className="gnbContainer">
      <Link href="/" className="logo">
        퍼블리싱 연습
      </Link>
      <ul className="mainRoutes">
        {gnbRootList.map((r) => (
          <GnbItem route={r} key={r.key} currentPath={currentPath} />
        ))}
      </ul>
    </div>
  );
}
