import { NextRequest } from "next/server";

export const locales = ["en", "ar"] as const;

export const defaultLocale = "en";

export function getRequestConfig() {
    return {
        locales,
        defaultLocale,
        localeDetection: true // كشف اللغة تلقائيًا
    };
}
export function getLocaleFromRequest(request: NextRequest) {
    const url = request.nextUrl.pathname;

    // استخراج اللغة من المسار (مثل /en أو /ar)
    const match = url.match(/^\/(en|ar)/);

    if (match) {
        return match[1]; // إرجاع اللغة بناءً على المسار (مثال: "en" أو "ar")
    }

    // التحقق من الكوكيز في حال لم نجد اللغة في المسار
    const language = request.cookies.get('locale');
    if (language) {
        return language;
    }

    // الرجوع إلى اللغة الافتراضية إذا لم يتم تحديد لغة
    return 'en';
}
