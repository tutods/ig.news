import { query as q } from 'faunadb';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { envConfig } from '~/config/env.config';
import { fauna } from '~/services/fauna';

export default NextAuth({
	providers: [
		GithubProvider({
			clientId: envConfig.auth.github.id,
			clientSecret: envConfig.auth.github.secret,
			authorization: { params: { scope: 'read:user' } }
		})
	],
	secret: envConfig.auth.secret,
	callbacks: {
		async signIn({ user }) {
			try {
				await fauna.query(
					q.If(
						q.Not(q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(user.email!)))),
						q.Create(q.Collection('users'), {
							data: { email: user.email }
						}),
						q.Get(q.Match(q.Index('user_by_email'), q.Casefold(user.email!)))
					)
				);
				return true;
			} catch {
				return false;
			}
		}
	}
});
