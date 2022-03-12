/** @jsx h */
import { h, PageProps } from "../client_deps.ts";
import { Handlers } from "../server_deps.ts";
import Repos from "../islands/Repos.tsx";

export default function Home() {
  return (
    <div>
      <Repos />
    </div>
  );
}
