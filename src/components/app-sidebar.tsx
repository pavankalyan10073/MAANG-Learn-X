import { Link, useRouterState } from "@tanstack/react-router";
import { Rocket, Home, MessageSquare } from "lucide-react";
import { tracks } from "@/data/tracks";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

export function AppSidebar() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const isActive = (p: string) => pathname === p;

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2.5 px-2 py-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <Rocket className="h-4.5 w-4.5 text-primary-foreground" />
          </div>
          {mounted && (
            <div className="flex flex-col leading-tight min-w-0">
              <span className="text-sm font-bold tracking-tight">MAANG Learn X</span>
              <span className="text-[10px] text-muted-foreground truncate">Complete MAANG Interview Prep Hub</span>
            </div>
          )}
        </Link>
      </SidebarHeader>

      {mounted && (
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Overview</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/")}>
                    <Link to="/">
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/tutor")}>
                    <Link to="/tutor">
                      <MessageSquare className="h-4 w-4" />
                      <span>AI Tutor</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Tracks</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {tracks.map((t) => {
                  const Icon = t.icon;
                  const path = `/track/${t.slug}`;
                  return (
                    <SidebarMenuItem key={t.slug}>
                      <SidebarMenuButton asChild isActive={isActive(path)}>
                        <Link to="/track/$slug" params={{ slug: t.slug }}>
                          <Icon className="h-4 w-4" />
                          <span>{t.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      )}
    </Sidebar>
  );
}
