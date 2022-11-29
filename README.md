<h3>🚧 Under Construction<h3/>

<br><br>

<p align="center">
   <img width="100" src="/public/static/icon.png" alt="Site Icon">
</p>

<h1 align='center'>Twidder</h1>

<h6 align='center'>A Twitter Clone made using <a href='https://nextjs.org/'>NEXTJS</a>.</h6>

<br>

<p>A Twitter Clone I made using <a href='https://nextjs.org/'>NextJS</a>, <a href='https://mui.com/'>MUi</a>, <a href='https://www.prisma.io/'>Prisma</a>.

<br>

<h3> 🛠️ Installation & Set Up </h3>

1.  Clone the repo

```sh
git clone https://github.com/prashantrahul141/Twidder.git
```

2.  Install packages

```sh
npm i
```

3. You'll need to add these environmental variables in `.env`.

```sh
DATABASE_URL=postgresql:// To Your Prisma Postgres Instance

NEXTAUTH_URL=Next-Auth canonical URL, can be http://localhost:3000
JWT_SECRET=Used to encrypt the Next-Auth JWT

GITHUB_CLIENT_ID=Github OAuth Client ID
GITHUB_CLIENT_SECRET=Github OAuth Client Secret

GOOGLE_CLIENT_ID=Google OAuth Client ID
GOOGLE_CLIENT_SECRET=Google OAuth Client Secret

DISCORD_CLIENT_ID=Discord OAuth Application Client ID
DISCORD_CLIENT_SECRET=Discord OAuth Application Client Secret
```

You can these docs to learn how to create OAuth app for <a href='https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps'>Github</a>, <a href='https://developers.google.com/identity/protocols/oauth2'>Google</a>, <a href='https://discord.com/developers/docs/topics/oauth2'>Discord</a>.

4. Run the development build

```sh
npm run dev
```

<h3> 💻 Technologies used </h3>

- <a href='https://nextjs.org/'>NextJS</a>
- <a href='https://mui.com/'>MUi</a>
- <a href='https://www.prisma.io/'>Prisma</a>
- <a href='https://next-auth.js.org/'>Next-Auth</a>
- <a href='https://www.typescriptlang.org/'>TypeScript </a>
