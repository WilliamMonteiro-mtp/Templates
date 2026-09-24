import type { getMessages } from "@/lib/i18n";

type Messages = ReturnType<typeof getMessages>;

export function ProjectStatus({
  status,
  copy,
}: {
  status: string;
  copy: Messages;
}) {
  const label = copy.projectStatus[status as keyof Messages["projectStatus"]];
  if (!label) return null;

  return (
    <span className={`project-status ${status}`}>
      <i aria-hidden="true" />
      {label}
    </span>
  );
}
