import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import { FileText, Settings, Terminal } from "lucide-react";
export const CommandDoc = () => {
    return (_jsx(ComponentDoc, { title: "Command Palette", description: "Fast, accessible command palette and search launcher with live filtering and shortcut key indicators.", category: "Navigation", badge: "New", children: _jsx(ComponentPreview, { title: "Interactive Command Palette", code: `<Command className="rounded-chellaa-lg border border-border shadow-md max-w-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem icon={<FileText className="h-4 w-4" />}>
        Documentation
      </CommandItem>
      <CommandItem icon={<Terminal className="h-4 w-4" />} shortcut="⌘T">
        Terminal Console
      </CommandItem>
      <CommandItem icon={<Settings className="h-4 w-4" />} shortcut="⌘S">
        Settings
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`, children: _jsx("div", { className: "w-full max-w-md", children: _jsxs(Command, { className: "rounded-chellaa-lg border border-border shadow-md bg-card", children: [_jsx(CommandInput, { placeholder: "Type a command or search..." }), _jsxs(CommandList, { children: [_jsx(CommandEmpty, { children: "No results found." }), _jsxs(CommandGroup, { heading: "Suggestions", children: [_jsx(CommandItem, { icon: _jsx(FileText, { className: "h-4 w-4 text-muted-foreground" }), children: "Documentation" }), _jsx(CommandItem, { icon: _jsx(Terminal, { className: "h-4 w-4 text-muted-foreground" }), shortcut: "\u2318T", children: "Terminal Console" }), _jsx(CommandItem, { icon: _jsx(Settings, { className: "h-4 w-4 text-muted-foreground" }), shortcut: "\u2318S", children: "Settings" })] })] })] }) }) }) }));
};
