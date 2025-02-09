// Sabit tanımlamalar için oluşturulmuştur.

export const status = [
    { label: "Oluşturuldu", value: "0" },
    { label: "İptal Edildi", value: "1" },
    { label: "Teslim Edildi", value: "2" },
    { label: "Bekliyor", value: "3" },
    { label: "Teslim Edilemedi", value: "4" },
]

export const releasedForDistribution = [
    { label: "Evet", value: "EVET" },
    { label: "Hayır", value: "HAYIR" }
]

export const statCardNames = { // i18n dahil edilmediği için geçici olarak constant tanımlanmıştır.
    packetRoute: "Rotadaki Paket",
    DMPackageCount: "DM Paket Sayısı",
    packageReleased: "Dağıtıma Çıkan Paket",
    delivered: "Teslim Edildi",
    notDelivered: "Teslim Edilemedi",
    completedOrder: "Tamamlanan Sipariş"
}
