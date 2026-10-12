// Password-protects the whole site, then serves the static page from public/.
// Set the secret ACCESS_KEY in the Worker's Settings > Variables and Secrets.
// Browser: any username + ACCESS_KEY as password.
export default {
  async fetch(request, env) {
    const key = env.ACCESS_KEY;
    if (!key) return new Response("ACCESS_KEY is not set on this Worker.", { status: 503 });
    const auth = request.headers.get("Authorization") || "";
    if (auth.startsWith("Basic ")) {
      try {
        const decoded = atob(auth.slice(6));
        const pass = decoded.slice(decoded.indexOf(":") + 1);
        if (pass.length === key.length && pass === key) return env.ASSETS.fetch(request);
      } catch (_) {}
    }
    return new Response("Login required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Shift CPM Calculator", charset="UTF-8"' },
    });
  },
};
