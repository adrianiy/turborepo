import { Button } from "ui";
import dynamic from "next/dynamic";

const Docs = dynamic(() => import("docs/Docs"), { ssr: false });

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <Docs />
    </div>
  );
}
