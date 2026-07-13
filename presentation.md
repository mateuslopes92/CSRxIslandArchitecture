# CSR vs Island Architecture

## What is CSR?

Client-Side Rendering (CSR) sends a minimal HTML shell to the browser, then JavaScript builds the entire page on the client. All components — static or interactive — are loaded and executed as one big bundle.

## What is Island Architecture?

Island Architecture serves fully-rendered static HTML by default, and interactive components ("islands") are hydrated **only when needed** — on demand, not all at once.

## Traditional CSR

```
[     Entire React App Ships to Browser     ]
[ Header  |  Hero  |  Repo Gallery          ]
[  JS     |  JS    |  JS  ← all at once     ]
```

- **195 KB** (61 KB gzipped) of JavaScript downloaded before anything renders
- Static components (Header, Hero) ship JS that does **nothing**
- Everything must load before user can interact

## Island Architecture (Astro)

```
[  Static HTML (zero JS)  ]
[ Header  |  Hero  |  Island  ]
[ No JS   |  No JS |  JS only when scrolled ]
```

- **0 KB JS** for static content — instant render
- Gallery island: **1.4 KB** + React runtime, loaded only when visible (`client:visible`)
- Faster load, less bandwidth, better UX

## The Code

Two projects, same UI, different approach:

| | `csr-react` | `island-architecture-astro` |
|---|---|---|
| **Framework** | React (Vite) | Astro + React islands |
| **JS shipped** | 195 KB (everything) | 0 KB initial (island on demand) |
| **Hydration** | All at once | Only interactive parts |
| **Static components** | Ship unnecessary JS | Pure HTML — zero JS |

## Key Takeaways

- **Static components don't need JS** — Astro renders them as pure HTML/CSS
- **Hydrate on demand** — use `client:visible`, `client:idle`, or `client:load`
- **Less JS = faster page** — especially on slow networks and mobile
- **You keep your framework** — React, Vue, Svelte components still work as islands
