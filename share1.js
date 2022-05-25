// ต.ย รองรับการเปิด LIFF ทั้งในแอป LINE และ External browser
await liff.init({ liffId: "1657150177-y1J75nxp" })
if (liff.isLoggedIn()) {
  // Login แล้วจ้า
} else {
  liff.login()
}
