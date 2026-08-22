import React from "react";
import { EmptyState, Button } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import { FolderOpen, Plus } from "lucide-react";

export const EmptyStateDoc: React.FC = () => {
  return (
    <ComponentDoc
      title="EmptyState"
      description="Zero-data placeholder guiding users when lists, search results, or databases have no records."
      category="Data Display"
    >
      <ComponentPreview
        title="Empty Projects State"
        code={`<EmptyState
  icon={<FolderOpen className="w-8 h-8 text-muted-foreground" />}
  title="No Projects Found"
  description="Get started by creating your first microservice project."
  action={<Button variant="primary" size="small"><Plus className="w-3.5 h-3.5 mr-1" /> New Project</Button>}
/>`}
      >
        <div className="w-full max-w-md border border-dashed border-border rounded-chellaa-lg p-6">
          <EmptyState
            icon={<FolderOpen className="w-8 h-8 text-muted-foreground" />}
            title="No Projects Found"
            description="Get started by creating your first microservice project."
            action={
              <Button variant="primary" size="small">
                <Plus className="w-3.5 h-3.5 mr-1.5" /> Create Project
              </Button>
            }
          />
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
