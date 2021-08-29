import Layout from "../components/Layout";

export default function PanelProfile() {
    return (
        <Layout title="Admin paneli">
            <div className={'py-5'}>
                <h2>
                    Assalomu aleykum. Siz bu sahifa yordamida online kutubxona platformasini nazorat qilishingiz mumkin.
                    Bu sahifa faqat administrator uchun mavjud. Siz bu sahifa orqali platformaga yangi kitoblar qo’shishingiz, kimlar kitob olishini nazorat qilishingiz mumkin.
                </h2>
                <h3 className={'text-muted'}>
                </h3>
            </div>
        </Layout>
    )
}