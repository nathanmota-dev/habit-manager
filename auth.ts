import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    providers: [Credentials]
});

// ou
// const { handlers, auth } = NextAuth({
//     providers: [Credentials]
// })