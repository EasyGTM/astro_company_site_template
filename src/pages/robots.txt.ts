import { buildRobotsTxt } from "@/lib/site";

export function GET() {
  return new Response(buildRobotsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
