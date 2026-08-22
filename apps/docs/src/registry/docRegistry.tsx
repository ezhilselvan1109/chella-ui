import React from "react";

// Guides
import { OverviewDoc } from "../pages/guide/OverviewDoc";
import { ThemingDoc } from "../pages/guide/ThemingDoc";

// Form Controls
import { ButtonDoc } from "../pages/components/ButtonDoc";
import { InputDoc } from "../pages/components/InputDoc";
import { TextareaDoc } from "../pages/components/TextareaDoc";
import { CheckboxDoc } from "../pages/components/CheckboxDoc";
import { SwitchDoc } from "../pages/components/SwitchDoc";
import { RadioDoc } from "../pages/components/RadioDoc";
import { SelectDoc } from "../pages/components/SelectDoc";
import { RatingDoc } from "../pages/components/RatingDoc";
import { FormDoc } from "../pages/components/FormDoc";

// Data Display
import { BadgeDoc } from "../pages/components/BadgeDoc";
import { TagDoc } from "../pages/components/TagDoc";
import { AvatarDoc } from "../pages/components/AvatarDoc";
import { CardDoc } from "../pages/components/CardDoc";
import { TableDoc } from "../pages/components/TableDoc";
import { TimelineDoc } from "../pages/components/TimelineDoc";
import { StatCardDoc } from "../pages/components/StatCardDoc";
import { KbdDoc } from "../pages/components/KbdDoc";
import { EmptyStateDoc } from "../pages/components/EmptyStateDoc";
import { AccordionDoc } from "../pages/components/AccordionDoc";
import { TabsDoc } from "../pages/components/TabsDoc";

// Feedback & Overlay
import { AlertDoc } from "../pages/components/AlertDoc";
import { BannerDoc } from "../pages/components/BannerDoc";
import { ToastDoc } from "../pages/components/ToastDoc";
import { ModalDoc } from "../pages/components/ModalDoc";
import { DrawerDoc } from "../pages/components/DrawerDoc";
import { PopoverDoc } from "../pages/components/PopoverDoc";
import { TooltipDoc } from "../pages/components/TooltipDoc";
import { SpinnerDoc } from "../pages/components/SpinnerDoc";
import { SkeletonDoc } from "../pages/components/SkeletonDoc";
import { ProgressDoc } from "../pages/components/ProgressDoc";

// Navigation & Layout
import { BreadcrumbDoc } from "../pages/components/BreadcrumbDoc";
import { PaginationDoc } from "../pages/components/PaginationDoc";
import { DropdownDoc } from "../pages/components/DropdownDoc";
import { CommandDoc } from "../pages/components/CommandDoc";
import { DividerDoc } from "../pages/components/DividerDoc";

export const DOC_REGISTRY: Record<string, React.ComponentType> = {
  // Guides
  "getting-started": OverviewDoc,
  theming: ThemingDoc,

  // Forms
  button: ButtonDoc,
  input: InputDoc,
  textarea: TextareaDoc,
  checkbox: CheckboxDoc,
  switch: SwitchDoc,
  radio: RadioDoc,
  select: SelectDoc,
  rating: RatingDoc,
  form: FormDoc,

  // Data Display
  badge: BadgeDoc,
  tag: TagDoc,
  avatar: AvatarDoc,
  card: CardDoc,
  table: TableDoc,
  timeline: TimelineDoc,
  statcard: StatCardDoc,
  kbd: KbdDoc,
  emptystate: EmptyStateDoc,
  accordion: AccordionDoc,
  tabs: TabsDoc,

  // Feedback & Overlay
  alert: AlertDoc,
  banner: BannerDoc,
  toast: ToastDoc,
  modal: ModalDoc,
  drawer: DrawerDoc,
  popover: PopoverDoc,
  tooltip: TooltipDoc,
  spinner: SpinnerDoc,
  skeleton: SkeletonDoc,
  progress: ProgressDoc,

  // Navigation & Layout
  breadcrumb: BreadcrumbDoc,
  pagination: PaginationDoc,
  dropdown: DropdownDoc,
  command: CommandDoc,
  divider: DividerDoc,
};

export function renderDocSection(sectionId: string): React.ReactNode {
  const Component = DOC_REGISTRY[sectionId] || OverviewDoc;
  return <Component />;
}
