import { Bell, Calendar, Clock, Icon, List } from "components/Icons";

export type DropdownListItem = {
  label: string;
  href: string;
  Icon?: Icon;
};

export type NavItemWithDropdown = {
  type: "dropdown";
  label: string;
  dropdown: DropdownListItem[];
};

export type NavItemAnchor = {
  type: "anchor";
  label: string;
  href: string;
};

export type NavigationMap = (NavItemAnchor | NavItemWithDropdown)[];

const navigation: NavigationMap = [
  {
    type: "dropdown",
    label: "Features",
    dropdown: [
      {
        label: "Todo List",
        href: "/todo",
        Icon: List,
      },
      {
        label: "Calendar",
        href: "/calendar",
        Icon: Calendar,
      },
      {
        label: "Reminders",
        href: "/reminders",
        Icon: Bell,
      },
      {
        label: "Planning",
        href: "/planning",
        Icon: Clock,
      },
    ],
  },
  {
    type: "dropdown",
    label: "Company",
    dropdown: [
      {
        label: "History",
        href: "/history",
      },
      {
        label: "Our Team",
        href: "/team",
      },
      {
        label: "Blog",
        href: "/blog",
      },
    ],
  },
  {
    type: "anchor",
    label: "Careers",
    href: "/carrers",
  },
  {
    type: "anchor",
    label: "About",
    href: "/about",
  },
];

export default navigation;
