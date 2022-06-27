addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  url.hostname = 'developer.mozilla.org';
  const data = await fetch(url.toString(),request);
  return data;
}

// https://blog.hrithwik.me/use-cloudflare-workers-as-a-reverse-proxy#heading-cloudflare-workers-as-a-reverse-proxy-doing-rewrites-using-cloudflare-workers