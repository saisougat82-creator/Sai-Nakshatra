// Sai Nakshatra Astrology Engine
// First stage: Moon longitude → Vedic Rashi

function getVedicRashi(moonLongitude) {

    const rashis = [
        "Mesha (Aries)",
        "Vrishabha (Taurus)",
        "Mithuna (Gemini)",
        "Karka (Cancer)",
        "Simha (Leo)",
        "Kanya (Virgo)",
        "Tula (Libra)",
        "Vrishchika (Scorpio)",
        "Dhanu (Sagittarius)",
        "Makara (Capricorn)",
        "Kumbha (Aquarius)",
        "Meena (Pisces)"
    ];

    // 30° per Rashi
    const index = Math.floor(moonLongitude / 30);

    return rashis[index];
}


// Convert tropical longitude to Lahiri-style sidereal longitude.
// This is the first working framework; we'll add the exact
// ayanamsa calculation next.
function normalizeLongitude(longitude) {

    longitude = longitude % 360;

    if (longitude < 0) {
        longitude += 360;
    }

    return longitude;
}


// Test function
function calculateRashiFromMoonLongitude(moonLongitude) {

    const normalized = normalizeLongitude(moonLongitude);

    return getVedicRashi(normalized);
}
