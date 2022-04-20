# MSW response patching loop with sendBeacon

## Description

Response patching does not work with a request triggered by `navigator.sendBeacon`.
`ctx.fetch(req)` does not seem to bypass msw and triggers the same request over and over again, causing an infinite request loop.

## Steps to reproduce
1. Check out the repro: `git clone https://github.com/hpohlmeyer/msw-send-beacon-loop.git`
2. Run `npm install` in the root folder
3. Run `npm start`
4. Go to [http://localhost:3002/](http://localhost:3002/)
5. Open the network tab in the devtools
6. Click on the "Trigger request" button
  - You will see an infinite request loop

