import { HandlerContext } from "../../server_deps.ts";

export type RepoMap = Map<string, string[]>;

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const data: string[] = JSON.parse(
    await Deno.readTextFile("./github_links.json"),
  );
  const repos = data.map((link) => {
    // get owner and repo name from github link
    const owner = link.split("/")[3];
    const name = link.split("/")[4];
    return { owner, name };
  });
  // Convert repos array to a hashmap
  const repoMap: RepoMap = new Map();
  repos.forEach((repo) => {
    repoMap.set(
      repo.owner,
      (repoMap.get(repo.owner) || []).concat(repo.name),
    );
  });
  return new Response(JSON.stringify(Object.fromEntries(repoMap)));
};
