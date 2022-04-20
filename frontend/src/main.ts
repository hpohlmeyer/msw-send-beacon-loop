import './style.css'
import { rest, setupWorker } from 'msw'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `<button>Trigger request</button>`;

const worker = setupWorker(
  rest.post("http://localhost:3003/test", async (req, res, ctx) => {
    const request = await ctx.fetch(req);
    return res(ctx.json({ok: request.ok}));
  })
);

worker.start().then(async () => {
  const button = document.querySelector("button");
  button?.addEventListener('click', () => {
    navigator.sendBeacon("http://localhost:3003/test")
  })
});

