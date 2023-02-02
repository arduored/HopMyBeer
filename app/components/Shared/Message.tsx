import { PropsWithChildren } from "react";

type MessageProps = {
  type: "info" | "success" | "warning" | "error";
} & PropsWithChildren;

export default function Message({ type, children }: MessageProps) {
  return <div className={`message message-${type}`}>{children}</div>;
}
