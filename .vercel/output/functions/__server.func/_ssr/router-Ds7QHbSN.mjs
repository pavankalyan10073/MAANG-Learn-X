import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { G as notFound } from "../_libs/tanstack__router-core.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root } from "../_libs/radix-ui__react-separator.mjs";
import { O as Overlay, P as Portal, C as Content, a as Close, T as Title, D as Description, R as Root$1 } from "../_libs/radix-ui__react-dialog.mjs";
import { P as Portal$1, C as Content2, a as Provider, R as Root3, T as Trigger } from "../_libs/radix-ui__react-tooltip.mjs";
import "../_libs/firebase.mjs";
import { g as getAuth, G as GoogleAuthProvider } from "../_libs/firebase__auth.mjs";
import { i as initializeApp } from "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { C as CodeXml, L as Layers, B as Brain, a as Cpu, b as Calculator, S as Sigma, W as Workflow, G as GitBranch, c as ChartColumn, d as Cloud, e as Briefcase, X, P as PanelLeft, R as Rocket, H as House, M as MessageSquare, f as LogOut } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/firebase__util.mjs";
import "../_libs/firebase__component.mjs";
import "../_libs/idb.mjs";
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = reactExports.useState(void 0);
  reactExports.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Separator = reactExports.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    decorative,
    orientation,
    className: cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    ),
    ...props
  }
));
Separator.displayName = Root.displayName;
const Sheet = Root$1;
const SheetPortal = Portal;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = Content.displayName;
const SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
SheetHeader.displayName = "SheetHeader";
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = Title.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = Description.displayName;
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("animate-pulse rounded-md bg-primary/10", className), ...props });
}
const TooltipProvider = Provider;
const Tooltip = Root3;
const TooltipTrigger = Trigger;
const TooltipContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = Content2.displayName;
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = reactExports.createContext(null);
function useSidebar() {
  const context = reactExports.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
const SidebarProvider = reactExports.forwardRef(
  ({
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    style,
    children,
    ...props
  }, ref) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = reactExports.useState(false);
    const [_open, _setOpen] = reactExports.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = reactExports.useCallback(
      (value) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open]
    );
    const toggleSidebar = reactExports.useCallback(() => {
      return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
    }, [isMobile, setOpen, setOpenMobile]);
    reactExports.useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);
    const state = open ? "expanded" : "collapsed";
    const contextValue = reactExports.useMemo(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
          ...style
        },
        className: cn(
          "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
          className
        ),
        ref,
        ...props,
        children
      }
    ) }) });
  }
);
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = reactExports.forwardRef(
  ({
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    className,
    children,
    ...props
  }, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
            className
          ),
          ref,
          ...props,
          children
        }
      );
    }
    if (isMobile) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        SheetContent,
        {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: {
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE
          },
          side,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "sr-only", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { children: "Sidebar" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetDescription, { children: "Displays the mobile sidebar." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full flex-col", children })
          ]
        }
      ) });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: "group peer hidden text-sidebar-foreground md:block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
                side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
                className
              ),
              ...props,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "data-sidebar": "sidebar",
                  className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                  children
                }
              )
            }
          )
        ]
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
const SidebarTrigger = reactExports.forwardRef(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      ref,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      className: cn("h-7 w-7", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeft, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        ref,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className
        ),
        ...props
      }
    );
  }
);
SidebarRail.displayName = "SidebarRail";
const SidebarInset = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "main",
      {
        ref,
        className: cn(
          "relative flex w-full flex-1 flex-col bg-background",
          "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          className
        ),
        ...props
      }
    );
  }
);
SidebarInset.displayName = "SidebarInset";
const SidebarInput = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      ref,
      "data-sidebar": "input",
      className: cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      ),
      ...props
    }
  );
});
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        "data-sidebar": "header",
        className: cn("flex flex-col gap-2 p-2", className),
        ...props
      }
    );
  }
);
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        "data-sidebar": "footer",
        className: cn("flex flex-col gap-2 p-2", className),
        ...props
      }
    );
  }
);
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Separator,
    {
      ref,
      "data-sidebar": "separator",
      className: cn("mx-2 w-auto bg-sidebar-border", className),
      ...props
    }
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        "data-sidebar": "content",
        className: cn(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          className
        ),
        ...props
      }
    );
  }
);
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        "data-sidebar": "group",
        className: cn("relative flex w-full min-w-0 flex-col p-2", className),
        ...props
      }
    );
  }
);
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = reactExports.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-label",
      className: cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = reactExports.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-action",
      className: cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      "data-sidebar": "group-content",
      className: cn("w-full text-sm", className),
      ...props
    }
  )
);
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ul",
    {
      ref,
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className),
      ...props
    }
  )
);
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "li",
    {
      ref,
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    }
  )
);
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const SidebarMenuButton = reactExports.forwardRef(
  ({
    asChild = false,
    isActive = false,
    variant = "default",
    size = "default",
    tooltip,
    className,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();
    const button = /* @__PURE__ */ jsxRuntimeExports.jsx(
      Comp,
      {
        ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: cn(sidebarMenuButtonVariants({ variant, size }), className),
        ...props
      }
    );
    if (!tooltip) {
      return button;
    }
    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip
      };
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: button }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TooltipContent,
        {
          side: "right",
          align: "center",
          hidden: state !== "collapsed" || isMobile,
          ...tooltip
        }
      )
    ] });
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = reactExports.forwardRef(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-action",
      className: cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      "data-sidebar": "menu-badge",
      className: cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  )
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = reactExports.forwardRef(({ className, showIcon = false, ...props }, ref) => {
  const width = reactExports.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Skeleton,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    }
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ul",
    {
      ref,
      "data-sidebar": "menu-sub",
      className: cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  )
);
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = reactExports.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ref, ...props })
);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = reactExports.forwardRef(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
const r = (id, title, url, type, source) => ({ id, title, url, type, source });
const tracks = [
  {
    slug: "dsa",
    title: "DSA (300+ Problems)",
    tagline: "Topic-wise patterns, must-do problems & video solutions for MAANG.",
    icon: CodeXml,
    color: "255",
    topics: [
      {
        id: "dsa-arrays",
        title: "Arrays & Strings",
        summary: "Two pointers, sliding window, prefix sum, Kadane's.",
        resources: [
          r("d-arr-1", "Striver A2Z DSA Sheet", "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2", "course", "takeuforward"),
          r("d-arr-2", "NeetCode 150 — Arrays & Hashing", "https://neetcode.io/practice", "practice", "NeetCode"),
          r("d-arr-3", "Sliding Window Playlist", "https://www.youtube.com/playlist?list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj", "video", "Aditya Verma"),
          r("d-arr-4", "Two Pointers — LeetCode patterns", "https://leetcode.com/explore/learn/card/array-and-string/", "article", "LeetCode")
        ],
        questions: [
          { q: "Two Sum", url: "https://leetcode.com/problems/two-sum/" },
          { q: "Maximum Subarray (Kadane)", url: "https://leetcode.com/problems/maximum-subarray/" },
          { q: "Longest Substring Without Repeating", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
          { q: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/" },
          { q: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/" }
        ]
      },
      {
        id: "dsa-ll",
        title: "Linked List",
        summary: "Reverse, fast/slow pointers, merge, cycle detection.",
        resources: [
          r("d-ll-1", "Striver LinkedList Playlist", "https://www.youtube.com/playlist?list=PLgUwDviBIf0rAuz8tVcM0AymmhTRsfaLU", "video", "Striver"),
          r("d-ll-2", "NeetCode — Linked List", "https://neetcode.io/practice", "practice", "NeetCode")
        ],
        questions: [
          { q: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/" },
          { q: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
          { q: "Linked List Cycle II", url: "https://leetcode.com/problems/linked-list-cycle-ii/" },
          { q: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/" }
        ]
      },
      {
        id: "dsa-stacks",
        title: "Stacks & Queues",
        summary: "Monotonic stack, NGE, min stack, queue with stacks.",
        resources: [
          r("d-st-1", "Aditya Verma — Stack Playlist", "https://www.youtube.com/playlist?list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd", "video", "Aditya Verma")
        ],
        questions: [
          { q: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/" },
          { q: "Next Greater Element II", url: "https://leetcode.com/problems/next-greater-element-ii/" },
          { q: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" }
        ]
      },
      {
        id: "dsa-trees",
        title: "Trees & BST",
        summary: "Traversals, LCA, diameter, serialize/deserialize.",
        resources: [
          r("d-tr-1", "Striver Tree Series", "https://www.youtube.com/playlist?list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk", "video", "Striver")
        ],
        questions: [
          { q: "Binary Tree Level Order", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
          { q: "Lowest Common Ancestor", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
          { q: "Serialize and Deserialize Binary Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" }
        ]
      },
      {
        id: "dsa-graphs",
        title: "Graphs",
        summary: "BFS/DFS, topo sort, Union-Find, Dijkstra, MST.",
        resources: [
          r("d-gr-1", "Striver Graph Playlist", "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn", "video", "Striver"),
          r("d-gr-2", "Graph Patterns — LeetCode", "https://leetcode.com/discuss/general-discussion/655708/", "article", "LeetCode")
        ],
        questions: [
          { q: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/" },
          { q: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/" },
          { q: "Network Delay Time (Dijkstra)", url: "https://leetcode.com/problems/network-delay-time/" },
          { q: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/" }
        ]
      },
      {
        id: "dsa-dp",
        title: "Dynamic Programming",
        summary: "1D/2D DP, knapsack, LIS, MCM, DP on trees & bitmask.",
        resources: [
          r("d-dp-1", "Striver DP Series (50+)", "https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY", "video", "Striver"),
          r("d-dp-2", "Aditya Verma DP", "https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go", "video", "Aditya Verma")
        ],
        questions: [
          { q: "House Robber", url: "https://leetcode.com/problems/house-robber/" },
          { q: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
          { q: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/" },
          { q: "Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/" }
        ]
      },
      {
        id: "dsa-greedy",
        title: "Greedy & Backtracking",
        summary: "Interval scheduling, N-Queens, subsets, permutations.",
        resources: [
          r("d-gb-1", "Backtracking Playlist", "https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9", "video", "Striver")
        ],
        questions: [
          { q: "Subsets", url: "https://leetcode.com/problems/subsets/" },
          { q: "N-Queens", url: "https://leetcode.com/problems/n-queens/" },
          { q: "Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/" }
        ]
      }
    ]
  },
  {
    slug: "system-design",
    title: "System Design",
    tagline: "HLD + LLD case studies, scaling, distributed systems.",
    icon: Layers,
    color: "210",
    topics: [
      {
        id: "sd-fund",
        title: "Fundamentals",
        summary: "Latency, throughput, CAP, consistency models, SLA/SLO.",
        resources: [
          r("sd-1", "System Design Primer (GitHub)", "https://github.com/donnemartin/system-design-primer", "docs", "Donne Martin"),
          r("sd-2", "ByteByteGo — System Design 101", "https://github.com/ByteByteGoHq/system-design-101", "docs", "ByteByteGo"),
          r("sd-3", "Gaurav Sen — System Design Playlist", "https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX", "video", "Gaurav Sen")
        ]
      },
      {
        id: "sd-scaling",
        title: "Scaling, Caching, Load Balancing",
        summary: "CDN, Redis, consistent hashing, rate limiting.",
        resources: [
          r("sd-4", "High Scalability Architectures", "http://highscalability.com/", "article", "HighScalability"),
          r("sd-5", "ByteByteGo — Scaling Videos", "https://www.youtube.com/@ByteByteGo", "video", "ByteByteGo")
        ]
      },
      {
        id: "sd-cases",
        title: "MAANG-level Case Studies",
        summary: "Design Twitter, WhatsApp, YouTube, Uber, Netflix, Dropbox.",
        resources: [
          r("sd-6", "Design Twitter — Educative", "https://www.educative.io/courses/grokking-the-system-design-interview", "course", "Educative"),
          r("sd-7", "System Design Interview — Alex Xu (Vol 1+2)", "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF", "book", "Alex Xu"),
          r("sd-8", "Tushar Roy — Case Studies", "https://www.youtube.com/@tusharroy2525", "video", "Tushar Roy")
        ]
      },
      {
        id: "sd-lld",
        title: "LLD / OOD",
        summary: "Parking lot, Splitwise, BookMyShow, design patterns.",
        resources: [
          r("sd-9", "Low Level Design Primer", "https://github.com/prasadgujar/low-level-design-primer", "docs", "GitHub"),
          r("sd-10", "Refactoring Guru — Patterns", "https://refactoring.guru/design-patterns", "article", "Refactoring Guru")
        ]
      }
    ]
  },
  {
    slug: "ai-ml",
    title: "AI & ML (LLM, RAG, Agents)",
    tagline: "ML, DL, NLP, LLMs, RAG, LangChain, multi-agent systems.",
    icon: Brain,
    color: "300",
    topics: [
      {
        id: "ml-found",
        title: "ML Foundations",
        summary: "Regression, classification, trees, SVMs, ensembles.",
        resources: [
          r("ai-1", "Andrew Ng — ML Specialization", "https://www.coursera.org/specializations/machine-learning-introduction", "course", "Coursera"),
          r("ai-2", "StatQuest", "https://www.youtube.com/@statquest", "video", "StatQuest"),
          r("ai-3", "Hands-On ML (Aurélien Géron)", "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/", "book", "O'Reilly")
        ]
      },
      {
        id: "ml-dl",
        title: "Deep Learning & NLP",
        summary: "NN, CNN, RNN, Transformers, attention.",
        resources: [
          r("ai-4", "DeepLearning.AI Specialization", "https://www.coursera.org/specializations/deep-learning", "course", "Coursera"),
          r("ai-5", "Karpathy — Neural Networks Zero to Hero", "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ", "video", "Andrej Karpathy"),
          r("ai-6", "The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "article", "Jay Alammar")
        ]
      },
      {
        id: "ml-llm",
        title: "LLMs, RAG & Prompt Engineering",
        summary: "GPT, embeddings, vector DBs, RAG pipelines, prompts.",
        resources: [
          r("ai-7", "LangChain Docs", "https://python.langchain.com/docs/introduction/", "docs", "LangChain"),
          r("ai-8", "OpenAI Cookbook", "https://cookbook.openai.com/", "docs", "OpenAI"),
          r("ai-9", "Prompt Engineering Guide", "https://www.promptingguide.ai/", "article", "DAIR.AI"),
          r("ai-10", "RAG from Scratch (LangChain)", "https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x", "video", "LangChain")
        ]
      },
      {
        id: "ml-agents",
        title: "Agentic AI & Multi-Agent",
        summary: "ReAct, tool use, AutoGen, CrewAI, LangGraph.",
        resources: [
          r("ai-11", "LangGraph Docs", "https://langchain-ai.github.io/langgraph/", "docs", "LangChain"),
          r("ai-12", "Microsoft AutoGen", "https://microsoft.github.io/autogen/", "docs", "Microsoft"),
          r("ai-13", "CrewAI", "https://docs.crewai.com/", "docs", "CrewAI")
        ]
      },
      {
        id: "ml-libs",
        title: "Python Libraries (NumPy, Pandas, scikit-learn)",
        summary: "Data wrangling, modeling, evaluation.",
        resources: [
          r("ai-14", "scikit-learn User Guide", "https://scikit-learn.org/stable/user_guide.html", "docs", "scikit-learn"),
          r("ai-15", "Pandas Docs", "https://pandas.pydata.org/docs/user_guide/index.html", "docs", "Pandas")
        ]
      }
    ]
  },
  {
    slug: "core-cs",
    title: "Core CS (DBMS, OS, CN, OOPs)",
    tagline: "Theory MAANG interviewers test in round 2.",
    icon: Cpu,
    color: "180",
    topics: [
      {
        id: "cs-os",
        title: "Operating Systems",
        summary: "Processes, threads, scheduling, deadlock, memory.",
        resources: [
          r("os-1", "OSTEP (Free book)", "https://pages.cs.wisc.edu/~remzi/OSTEP/", "book", "Remzi"),
          r("os-2", "Neso Academy OS", "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O", "video", "Neso Academy"),
          r("os-3", "Love Babbar OS Notes", "https://www.geeksforgeeks.org/operating-systems/", "article", "GfG")
        ]
      },
      {
        id: "cs-dbms",
        title: "DBMS & SQL",
        summary: "Normalization, indexing, transactions, ACID, joins.",
        resources: [
          r("db-1", "GfG DBMS", "https://www.geeksforgeeks.org/dbms/", "article", "GfG"),
          r("db-2", "SQLZoo", "https://sqlzoo.net/", "practice", "SQLZoo"),
          r("db-3", "Use The Index, Luke!", "https://use-the-index-luke.com/", "article", "Markus Winand")
        ]
      },
      {
        id: "cs-cn",
        title: "Computer Networks",
        summary: "OSI, TCP/IP, HTTP, DNS, TLS.",
        resources: [
          r("cn-1", "Kurose & Ross — Top Down", "https://gaia.cs.umass.edu/kurose_ross/index.html", "book", "Kurose"),
          r("cn-2", "GfG Computer Networks", "https://www.geeksforgeeks.org/computer-network-tutorials/", "article", "GfG")
        ]
      },
      {
        id: "cs-oops",
        title: "OOPs",
        summary: "Inheritance, polymorphism, SOLID, design principles.",
        resources: [
          r("oop-1", "OOPs Concepts", "https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/", "article", "GfG"),
          r("oop-2", "SOLID Principles", "https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/", "article", "freeCodeCamp")
        ]
      }
    ]
  },
  {
    slug: "aptitude",
    title: "Aptitude",
    tagline: "Quant, logical & verbal — for OAs and screening rounds.",
    icon: Calculator,
    color: "75",
    topics: [
      {
        id: "apt-quant",
        title: "Quantitative Aptitude",
        summary: "Numbers, percentages, time-speed-distance, P&C.",
        resources: [
          r("apt-1", "GrindGram", "https://grindgram.in/", "practice", "GrindGram"),
          r("apt-2", "IndiaBix Aptitude", "https://www.indiabix.com/aptitude/questions-and-answers/", "practice", "IndiaBix"),
          r("apt-3", "RS Agarwal — Quant Aptitude", "https://www.amazon.in/Quantitative-Aptitude-Competitive-Examinations-Agarwal/dp/9352534026", "book", "RS Agarwal")
        ]
      },
      {
        id: "apt-logical",
        title: "Logical Reasoning",
        summary: "Series, syllogism, blood relations, puzzles.",
        resources: [
          r("apt-4", "IndiaBix LR", "https://www.indiabix.com/logical-reasoning/questions-and-answers/", "practice", "IndiaBix")
        ]
      },
      {
        id: "apt-verbal",
        title: "Verbal Ability",
        summary: "RC, sentence correction, vocabulary.",
        resources: [
          r("apt-5", "IndiaBix Verbal", "https://www.indiabix.com/verbal-ability/questions-and-answers/", "practice", "IndiaBix")
        ]
      }
    ]
  },
  {
    slug: "python",
    title: "Python (DSA + ML)",
    tagline: "Master Python for both interviews and ML.",
    icon: CodeXml,
    color: "45",
    topics: [
      {
        id: "py-core",
        title: "Core Python",
        summary: "Data types, comprehensions, generators, decorators, OOP.",
        resources: [
          r("py-1", "Python Official Tutorial", "https://docs.python.org/3/tutorial/", "docs", "Python.org"),
          r("py-2", "Corey Schafer Python Playlist", "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU", "video", "Corey Schafer"),
          r("py-3", "Real Python", "https://realpython.com/", "article", "Real Python")
        ]
      },
      {
        id: "py-dsa",
        title: "DSA in Python",
        summary: "Built-ins, collections, heapq, bisect for interviews.",
        resources: [
          r("py-4", "NeetCode Python Solutions", "https://github.com/neetcode-gh/leetcode", "docs", "NeetCode"),
          r("py-5", "LeetCode in Python", "https://leetcode.com/", "practice", "LeetCode")
        ]
      },
      {
        id: "py-advanced",
        title: "Advanced & Async",
        summary: "asyncio, typing, dataclasses, performance.",
        resources: [
          r("py-6", "Fluent Python (Ramalho)", "https://www.fluentpython.com/", "book", "O'Reilly"),
          r("py-7", "asyncio docs", "https://docs.python.org/3/library/asyncio.html", "docs", "Python.org")
        ]
      }
    ]
  },
  {
    slug: "math",
    title: "Maths for Engineering",
    tagline: "Stats, probability, linear algebra, calculus for ML+CS.",
    icon: Sigma,
    color: "320",
    topics: [
      {
        id: "m-stats",
        title: "Statistics & Probability",
        summary: "Distributions, hypothesis testing, Bayes.",
        resources: [
          r("m-1", "StatQuest", "https://www.youtube.com/@statquest", "video", "StatQuest"),
          r("m-2", "Khan Academy — Statistics", "https://www.khanacademy.org/math/statistics-probability", "course", "Khan Academy"),
          r("m-3", "Think Stats (free)", "https://greenteapress.com/wp/think-stats-2e/", "book", "Allen Downey")
        ]
      },
      {
        id: "m-linalg",
        title: "Linear Algebra",
        summary: "Vectors, matrices, eigenvalues, SVD.",
        resources: [
          r("m-4", "3Blue1Brown — Essence of Linear Algebra", "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", "video", "3Blue1Brown"),
          r("m-5", "MIT 18.06 — Gilbert Strang", "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", "course", "MIT OCW")
        ]
      },
      {
        id: "m-calc",
        title: "Calculus & Optimization",
        summary: "Derivatives, gradients, gradient descent.",
        resources: [
          r("m-6", "3Blue1Brown — Essence of Calculus", "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr", "video", "3Blue1Brown")
        ]
      },
      {
        id: "m-discrete",
        title: "Discrete Math",
        summary: "Logic, combinatorics, graph theory.",
        resources: [
          r("m-7", "Discrete Math — TrevTutor", "https://www.youtube.com/playlist?list=PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz", "video", "TrevTutor")
        ]
      }
    ]
  },
  {
    slug: "fullstack",
    title: "Full Stack (MERN)",
    tagline: "HTML/CSS/JS → React → Node → MongoDB → APIs.",
    icon: Workflow,
    color: "150",
    topics: [
      {
        id: "fs-frontend",
        title: "Frontend (HTML, CSS, JS, React)",
        summary: "Modern web fundamentals + React.",
        resources: [
          r("fs-1", "MDN Web Docs", "https://developer.mozilla.org/en-US/docs/Learn", "docs", "MDN"),
          r("fs-2", "JavaScript.info", "https://javascript.info/", "docs", "javascript.info"),
          r("fs-3", "React Docs", "https://react.dev/learn", "docs", "React"),
          r("fs-4", "Tailwind CSS", "https://tailwindcss.com/docs/installation", "docs", "Tailwind")
        ]
      },
      {
        id: "fs-backend",
        title: "Backend (Node, Express, REST)",
        summary: "Build REST APIs, auth, deploy.",
        resources: [
          r("fs-5", "Node.js Docs", "https://nodejs.org/en/docs", "docs", "Node.js"),
          r("fs-6", "Express Guide", "https://expressjs.com/en/guide/routing.html", "docs", "Express"),
          r("fs-7", "REST API Tutorial", "https://restfulapi.net/", "article", "RESTful API")
        ]
      },
      {
        id: "fs-db",
        title: "Databases (MongoDB, MySQL, Firebase)",
        summary: "Schema design, queries, transactions.",
        resources: [
          r("fs-8", "MongoDB University", "https://learn.mongodb.com/", "course", "MongoDB"),
          r("fs-9", "MySQL Tutorial", "https://www.mysqltutorial.org/", "article", "MySQL"),
          r("fs-10", "Firebase Docs", "https://firebase.google.com/docs", "docs", "Firebase")
        ]
      }
    ]
  },
  {
    slug: "git-linux",
    title: "Git, GitHub & Linux",
    tagline: "Version control + shell mastery.",
    icon: GitBranch,
    color: "30",
    topics: [
      {
        id: "git-1t",
        title: "Git & GitHub",
        summary: "Branching, rebase, PRs, conflict resolution.",
        resources: [
          r("git-1", "Pro Git Book (free)", "https://git-scm.com/book/en/v2", "book", "Scott Chacon"),
          r("git-2", "Learn Git Branching (interactive)", "https://learngitbranching.js.org/", "practice", "LGB"),
          r("git-3", "GitHub Docs", "https://docs.github.com/", "docs", "GitHub")
        ]
      },
      {
        id: "linux-1t",
        title: "Linux & Shell",
        summary: "File system, permissions, processes, bash.",
        resources: [
          r("lin-1", "Linux Journey", "https://linuxjourney.com/", "course", "Linux Journey"),
          r("lin-2", "MIT Missing Semester", "https://missing.csail.mit.edu/", "course", "MIT"),
          r("lin-3", "Bash Cheatsheet", "https://devhints.io/bash", "article", "devhints")
        ]
      }
    ]
  },
  {
    slug: "data-science",
    title: "Data Science & Analytics",
    tagline: "EDA, visualization, SQL, BI tools.",
    icon: ChartColumn,
    color: "200",
    topics: [
      {
        id: "ds-eda",
        title: "EDA & Visualization",
        summary: "Pandas, Matplotlib, Seaborn, Plotly.",
        resources: [
          r("ds-1", "Kaggle Learn", "https://www.kaggle.com/learn", "course", "Kaggle"),
          r("ds-2", "Seaborn Tutorial", "https://seaborn.pydata.org/tutorial.html", "docs", "Seaborn")
        ]
      },
      {
        id: "ds-sql",
        title: "SQL for Analytics",
        summary: "Window functions, CTEs, performance.",
        resources: [
          r("ds-3", "Mode SQL Tutorial", "https://mode.com/sql-tutorial/", "course", "Mode"),
          r("ds-4", "LeetCode SQL 50", "https://leetcode.com/studyplan/top-sql-50/", "practice", "LeetCode")
        ]
      },
      {
        id: "ds-bi",
        title: "BI Tools (Power BI, Tableau)",
        summary: "Dashboards & storytelling.",
        resources: [
          r("ds-5", "Microsoft Power BI Learn", "https://learn.microsoft.com/en-us/power-bi/", "docs", "Microsoft"),
          r("ds-6", "Tableau Free Training", "https://www.tableau.com/learn/training", "course", "Tableau")
        ]
      }
    ]
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps (AWS, Vercel)",
    tagline: "Deploy, scale, automate.",
    icon: Cloud,
    color: "260",
    topics: [
      {
        id: "cd-aws",
        title: "AWS Essentials",
        summary: "EC2, S3, Lambda, IAM, RDS.",
        resources: [
          r("cd-1", "AWS Skill Builder (Cloud Practitioner)", "https://skillbuilder.aws/", "course", "AWS"),
          r("cd-2", "FreeCodeCamp AWS Course", "https://www.youtube.com/watch?v=SOTamWNgDKc", "video", "freeCodeCamp")
        ]
      },
      {
        id: "cd-deploy",
        title: "Deployment (Vercel, Streamlit, n8n)",
        summary: "Ship apps fast.",
        resources: [
          r("cd-3", "Vercel Docs", "https://vercel.com/docs", "docs", "Vercel"),
          r("cd-4", "Streamlit Docs", "https://docs.streamlit.io/", "docs", "Streamlit"),
          r("cd-5", "n8n Docs", "https://docs.n8n.io/", "docs", "n8n")
        ]
      }
    ]
  },
  {
    slug: "behavioral",
    title: "Behavioral & SWE Practices",
    tagline: "STAR stories, leadership principles, software engineering.",
    icon: Briefcase,
    color: "10",
    topics: [
      {
        id: "be-1",
        title: "Behavioral Interviews",
        summary: "STAR, Amazon LP, conflict & ownership stories.",
        resources: [
          r("be-1", "Amazon Leadership Principles", "https://www.amazon.jobs/content/en/our-workplace/leadership-principles", "article", "Amazon"),
          r("be-2", "Cracking the Behavioral Interview (Jackson Gabbard)", "https://www.youtube.com/watch?v=PJKYqLP6MRE", "video", "YouTube")
        ]
      },
      {
        id: "be-2t",
        title: "Software Engineering Practices",
        summary: "Clean code, testing, code review, agile.",
        resources: [
          r("be-3", "Google Eng Practices", "https://google.github.io/eng-practices/", "docs", "Google"),
          r("be-4", "Clean Code Summary", "https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29", "article", "Gist")
        ]
      }
    ]
  }
];
const trackBySlug = (slug) => tracks.find((t) => t.slug === slug);
function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (r2) => r2.location.pathname });
  const isActive = (p) => pathname === p;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Sidebar, { collapsible: "icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarHeader, { className: "border-b border-sidebar-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 px-2 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4 text-primary-foreground" }) }),
      !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold", children: "MAANG Learn X" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Resource Hub" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarGroup, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarGroupLabel, { children: "Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenuButton, { asChild: true, isActive: isActive("/"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Home" })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenuButton, { asChild: true, isActive: isActive("/tutor"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/tutor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI Tutor" })
          ] }) }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarGroup, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarGroupLabel, { children: "Tracks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenu, { children: tracks.map((t) => {
          const Icon = t.icon;
          const path = `/track/${t.slug}`;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenuButton, { asChild: true, isActive: isActive(path), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/track/$slug", params: { slug: t.slug }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.title })
          ] }) }) }, t.slug);
        }) }) })
      ] })
    ] })
  ] });
}
const firebaseConfig = {
  apiKey: "AIzaSyAl6DeYBAiKvtwjPObWGRSEeE0lIzj4kCo",
  authDomain: "faang-crack-system.firebaseapp.com",
  projectId: "faang-crack-system",
  storageBucket: "faang-crack-system.firebasestorage.app",
  messagingSenderId: "391664127916",
  appId: "1:391664127916:web:41dffb64f868e10e74f409",
  measurementId: "G-H1TTEWQQ6Z"
};
let app;
let auth;
let googleProvider;
function getApp() {
  if (!app) {
    app = initializeApp(firebaseConfig);
  }
  return app;
}
function getFirebaseAuth() {
  if (!auth) {
    auth = getAuth(getApp());
  }
  return auth;
}
function getGoogleProvider() {
  if (!googleProvider) {
    googleProvider = new GoogleAuthProvider();
  }
  return googleProvider;
}
function useAuth() {
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const auth2 = getFirebaseAuth();
    const unsub = auth2.onAuthStateChanged((u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);
  return { user, loading };
}
function TopBar() {
  const { user } = useAuth();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground hidden sm:inline", children: "MAANG prep, organized." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground hidden sm:inline", children: user.email }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => getFirebaseAuth().signOut(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "default", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", children: "Sign in" }) }) })
  ] });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const appCss = "/assets/styles-BvpGkVwT.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-gradient", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Stick to the prep grind — let's get you back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$4 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MAANG Learn X — Complete MAANG Interview Prep Hub" },
      { name: "description", content: "Curated DSA, System Design, AI/ML, Aptitude, Core CS and more — everything you need to crack MAANG interviews." },
      { property: "og:title", content: "MAANG Learn X — Complete MAANG Interview Prep Hub" },
      { property: "og:description", content: "Curated DSA, System Design, AI/ML, Aptitude, Core CS and more — everything you need to crack MAANG interviews." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MAANG Learn X — Complete MAANG Interview Prep Hub" },
      { name: "twitter:description", content: "Curated DSA, System Design, AI/ML, Aptitude, Core CS and more — everything you need to crack MAANG interviews." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/95feb508-bc0a-4fed-9708-ca06fa72fe84/id-preview-87c68457--d7e15c70-7218-4f8f-b6aa-d94d6c3f34ac.lovable.app-1777448517939.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/95feb508-bc0a-4fed-9708-ca06fa72fe84/id-preview-87c68457--d7e15c70-7218-4f8f-b6aa-d94d6c3f34ac.lovable.app-1777448517939.png" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] });
}
const $$splitComponentImporter$3 = () => import("./tutor-CZyXJ1I3.mjs");
const search = objectType({
  topic: stringType().optional()
});
const Route$3 = createFileRoute("/tutor")({
  validateSearch: search,
  head: () => ({
    meta: [{
      title: "AI Tutor — MAANG Learn X"
    }, {
      name: "description",
      content: "Ask an AI MAANG interview coach anything about DSA, System Design, ML or core CS."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./auth-BwIX0gqP.mjs");
const Route$2 = createFileRoute("/auth")({
  head: () => ({
    meta: [{
      title: "Sign in — MAANG Learn X"
    }, {
      name: "description",
      content: "Sign in to track your MAANG prep progress."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-DHgl738T.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "MAANG Learn X — Complete MAANG Interview Prep Hub"
    }, {
      name: "description",
      content: "Master DSA, System Design, AI/ML, Aptitude and Core CS with curated topic-wise resources, video solutions and an AI tutor."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitNotFoundComponentImporter = () => import("./track._slug-C7xqXMwe.mjs");
const $$splitComponentImporter = () => import("./track._slug-B6uereMW.mjs");
const Route = createFileRoute("/track/$slug")({
  loader: ({
    params
  }) => {
    const t = trackBySlug(params.slug);
    if (!t) throw notFound();
    return {
      track: t
    };
  },
  head: ({
    loaderData
  }) => {
    const t = loaderData?.track;
    if (!t) return {
      meta: [{
        title: "Track"
      }]
    };
    return {
      meta: [{
        title: `${t.title} — MAANG Learn X`
      }, {
        name: "description",
        content: t.tagline
      }, {
        property: "og:title",
        content: `${t.title} — MAANG Learn X`
      }, {
        property: "og:description",
        content: t.tagline
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const TutorRoute = Route$3.update({
  id: "/tutor",
  path: "/tutor",
  getParentRoute: () => Route$4
});
const AuthRoute = Route$2.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$4
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const TrackSlugRoute = Route.update({
  id: "/track/$slug",
  path: "/track/$slug",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  AuthRoute,
  TutorRoute,
  TrackSlugRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Input as I,
  Route$3 as R,
  getGoogleProvider as a,
  Route as b,
  cn as c,
  getFirebaseAuth as g,
  router as r,
  tracks as t,
  useAuth as u
};
