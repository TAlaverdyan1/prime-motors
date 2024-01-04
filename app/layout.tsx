import { getTranslations } from 'next-intl/server';
import { useLocale } from 'next-intl';
import './globals.css';


export async function generateMetadata() {
    const t = await getTranslations('not-found');

    return {
        title: (t('title')).toUpperCase()
    };
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const locale = useLocale();

    return (
        <html lang={locale}>
            <body>
                {children}
            </body>
        </html>
    )
}
