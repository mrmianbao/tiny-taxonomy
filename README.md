# About

A slimmed down version of Taxonomy by [@shadcn](https://twitter.com/shadcn)

Intended for quick deployment of docs or blog to Cloud Run.

Dockerfile & github actions are included, just add the secrets to your GitHub repo needed for deployment (see cloud-run.yaml)

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Update `.env.local` and `.env.production` and update the variables.

3. Start the development server:

```sh
pnpm dev
```

## Deployment

Just push it! Make sure to set up your GitHub Repo with the secrets in .github/workflows/cloud-run.yaml

## License

Licensed under the [MIT license](https://github.com/shadcn/taxonomy/blob/main/LICENSE.md).
