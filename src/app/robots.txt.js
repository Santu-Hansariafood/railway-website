export async function GET() {
    return new Response(
      `User-agent: *
      Allow: /
      Sitemap: http://localhost:3000/sitemap.xml`,
      { headers: { "Content-Type": "text/plain" } }
    );
  }
  