import React from "react";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import { FileText, Settings, Terminal } from "lucide-react";

export const CommandDoc: React.FC = () => {
  return (
    <ComponentDoc
      title="Command Palette"
      description="Fast, accessible command palette and search launcher with live filtering and shortcut key indicators."
      category="Navigation"
      badge="New"
    >
      <ComponentPreview
        title="Interactive Command Palette"
        code={`<Command className="rounded-chellaa-lg border border-border shadow-md max-w-md">
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
</Command>`}
      >
        <div className="w-full max-w-md">
          <Command className="rounded-chellaa-lg border border-border shadow-md bg-card">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem icon={<FileText className="h-4 w-4 text-muted-foreground" />}>
                  Documentation
                </CommandItem>
                <CommandItem icon={<Terminal className="h-4 w-4 text-muted-foreground" />} shortcut="⌘T">
                  Terminal Console
                </CommandItem>
                <CommandItem icon={<Settings className="h-4 w-4 text-muted-foreground" />} shortcut="⌘S">
                  Settings
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
