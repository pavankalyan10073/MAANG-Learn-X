// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  cloudflare: false,
  plugins: [nitro({ preset: "vercel" })],
  vite: {
    ssr: {
      noExternal: true,
      resolve: {
        conditions: ["module", "import", "default"],
      },
    },
    optimizeDeps: {
      include: [
        "lucide-react",
        "@radix-ui/react-dialog",
        "@radix-ui/react-slot",
        "@radix-ui/react-tooltip",
        "@radix-ui/react-separator",
        "@radix-ui/react-collapsible",
        "@radix-ui/react-accordion",
        "@radix-ui/react-checkbox",
        "@radix-ui/react-tabs",
        "@radix-ui/react-label",
        "@radix-ui/react-avatar",
        "@radix-ui/react-dropdown-menu",
        "@radix-ui/react-menubar",
        "@radix-ui/react-navigation-menu",
        "@radix-ui/react-select",
        "@radix-ui/react-toast",
        "sonner",
        "class-variance-authority",
      ],
      esbuildOptions: {
        target: "esnext",
      },
    },
  },
});
