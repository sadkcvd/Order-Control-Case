// Yardımcı fonksiyonlar için oluşturulmuştur.

export const calculatePercentage = (expression?: string) => {
    if (!expression) return 0;
    const parts = expression.split("/").map(Number); // Sayılara çevir
    if (parts.length !== 2 || parts.some(isNaN) || parts[1] === 0) {
        throw new Error("Geçersiz ifade veya sıfıra bölme hatası!");
    }
    return (parts[1] / parts[0]) * 100;
}
