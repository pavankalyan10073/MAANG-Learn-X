import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/use-auth";
import { getFirebaseAuth } from "@/integrations/firebase/client";
import { LogOutIcon } from "@/components/icons";

export function TopBar() {
  const { user } = useAuth();
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <span className="text-sm text-muted-foreground hidden sm:inline">
          Complete MAANG Interview Prep Hub
        </span>
      </div>
      <div className="flex items-center gap-2">
        {user ? (
          <>
            <span className="text-xs text-muted-foreground hidden sm:inline">{user.email}</span>
            <Button variant="ghost" size="sm" onClick={() => getFirebaseAuth().signOut()}>
              <LogOutIcon className="h-4 w-4" />
            </Button>
          </>
        ) : (
          <Button asChild size="sm" variant="default">
            <Link to="/auth">Sign in</Link>
          </Button>
        )}
      </div>
    </header>
  );
}
