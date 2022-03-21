/** @jsx h */
import { h } from "../client_deps.ts";
import Repos from "../islands/Repos.tsx";

export default function Home() {
  return (
    <div>
      <a href="https://github.com/sigmaSd/DenoStats">Github</a>
      <p>Last Updated: {new Date(2022, 2, 21).toString()}</p>
      <Repos />
    </div>
  );
}
