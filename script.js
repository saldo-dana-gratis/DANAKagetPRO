document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     TOMBOL DOWNLOAD
  ===================== */
  let clickCount = 0;
  const btn = document.getElementById("ctaBtn");
  const modal = document.getElementById("rewardModal");

  if (btn) {
    btn.addEventListener("click", () => {
      clickCount++;

      if (clickCount === 1) {
        window.open("https://s.shopee.co.id/6AfP62EH0O", "_blank");  /* ===GANTI # DENGAN LINK DI ANTARA "dan"==== */
      } else {
        modal.classList.add("active");
        playSuccessCheck();
      }
    });
  }

  /* =====================
     LIVE PEMBAYARAN
  ===================== */
  const track = document.getElementById("liveTrack");
  if (!track) return;

  /* VARIASI NAMA SUPER BANYAK */
  const baseNames = [
    "Andi","Budi","Rina","Siti","Dewi","Ayu","Putri","Rizki","Fajar",
    "Agus","Yudi","Bayu","Dimas","Arif","Doni","Rio","Kevin","Alif",
    "Nanda","Indra","Ilham","Farhan","Hendra","Wahyu","Eko","Rendi",
    "Bagas","Iqbal","Akbar","Reza","Yoga","Surya","Bima","Rafi",
    "Hafiz","Fikri","Ridho","Faiz","Zaki","Salman","Aziz",
    "Maya","Intan","Nabila","Aulia","Nisa","Amelia","Citra",
    "Lestari","Anisa","Rahma","Safira","Zahra","Nadya",
    "Aisyah","Fatin","Sheila","Aurel","Keisha","Kayla",
    "Wulan","Ratna","Melati","Novi"
  ];

  function randomName() {
    const name = baseNames[Math.floor(Math.random() * baseNames.length)];
    const initial = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    return `${name} ${initial}***`;
  }

  function randomAmount() {
    return "Rp" + (Math.floor(Math.random() * 600000) + 50000)
      .toLocaleString("id-ID");
  }

  function randomTime() {
    const times = [
      "Baru saja","10 Detik lalu","30 Detik lalu",
      "1 Menit lalu","2 Menit lalu","3 Menit lalu"
    ];
    return times[Math.floor(Math.random() * times.length)];
  }

  function createLiveItem() {
    const item = document.createElement("div");
    item.className = "live-item";
    item.innerHTML = `
      <div class="live-info">
        <strong>${randomName()}</strong>
        <small>Telah ditarik ke DANA</small>
      </div>
      <div class="live-amount">
        <span class="amount">${randomAmount()}</span>
        <small>${randomTime()}</small>
      </div>
    `;
    track.prepend(item);
    if (track.children.length > 6) {
      track.lastElementChild.remove();
    }
  }

  for (let i = 0; i < 4; i++) createLiveItem();
  setInterval(createLiveItem, 3000);
});

/* =====================
   CEK SALDO
===================== */
function goCek() {
  window.open("https://www.lazada.co.id/products/pdp-i7677960155-s14099512516.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253ATOP%252BUP%252BDANA%253Bnid%253A7677960155%253Bsrc%253ALazadaMainSrp%253Brn%253Ac7a2f92b829a6b2ef4f810f6220b76a8%253Bregion%253Aid%253Bsku%253A7677960155_ID%253Bprice%253A11325%253Bclient%253Adesktop%253Bsupplier_id%253A401412000510%253Bsession_id%253A%253Bbiz_source%253Ah5_internal%253Bslot%253A13%253Butlog_bucket_id%253A470687%253Basc_category_id%253A10100045%253Bitem_id%253A7677960155%253Bsku_id%253A14099512516%253Bshop_id%253A6557055%253BtemplateInfo%253A-1_A3_C%2523164458_J%2523107879_D_E%2523&freeshipping=0&fs_ab=2&fuse_fs=&lang=id&location=Kota%20Jakarta%20Selatan&price=11325&priceCompare=skuId%3A14099512516%3Bsource%3Alazada-search-voucher%3Bsn%3Ac7a2f92b829a6b2ef4f810f6220b76a8%3BoriginPrice%3A1132500%3BdisplayPrice%3A1132500%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1770542916547&ratingscore=4.810445765915272&request_id=c7a2f92b829a6b2ef4f810f6220b76a8&review=43386&sale=297385&search=1&source=search&spm=a2o4j.searchlist.list.13&stock=1", "_blank");   /* ===GANTI # DENGAN LINK DI ANTARA "dan"==== */
}

/* =====================
   LOTTIE SUCCESS
===================== */
function playSuccessCheck() {
  const el = document.getElementById("successLottie");
  if (!el) return;

  el.innerHTML = "";
  lottie.loadAnimation({
    container: el,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "https://assets5.lottiefiles.com/packages/lf20_xlkxtmul.json"
  });
}

