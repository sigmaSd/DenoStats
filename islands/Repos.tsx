/** @jsx h */
import { h, PageProps, useEffect, useState } from "../client_deps.ts";
import { RepoMap } from "../routes/api/repos.ts";

export default function Repos() {
  const [repos, setRepos] = useState<Record<string, string[]> | undefined>(
    undefined,
  );
  useEffect(() => {
    fetch("/api/repos")
      .then((res) => res.json())
      .then((repos) => {
        setRepos(repos);
      });
  }, []);
  return (
    <div>
      <h1 style={{ color: "red" }}>Deno Repos</h1>
      {repos &&
        [...Object.keys(repos)].map((el) => {
          return (
            <div>
              <h2>{el}</h2>
              <ul>
                {repos[el].map((repo) => (
                  <li>
                    {<a href={`https://github.com/${el}/${repo}`}>{repo}</a>}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
    </div>
  );
}
