import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="id">
            <Head>
                {/* Import Google Fonts */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="antialiased bg-light text-dark">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
