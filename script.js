document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById('content');
    const toggleLanguageBtn = document.getElementById('toggleLanguageBtn');
    const mainTitle = document.getElementById('mainTitle');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');
    const closeBtn = document.getElementById('closeBtn');
    
    const thaiContent = `
        <div class="box" data-title="ต้นกำเนิดของวันคริสต์มาส" data-content="วันคริสต์มาสเริ่มต้นขึ้นในศตวรรษที่ 4 เพื่อเฉลิมฉลองการประสูติของพระเยซูคริสต์ โดยมีการกำหนดวันที่ 25 ธันวาคมเป็นวันสำคัญ ซึ่งสอดคล้องกับเทศกาลฤดูหนาวในหลายวัฒนธรรมโบราณ การเฉลิมฉลองวันคริสต์มาสในยุคแรกมีการรวมศาสนพิธีและวัฒนธรรมท้องถิ่นเข้าไว้ด้วยกัน">
            <img src="https://imgcdn.stablediffusionweb.com/2024/12/2/57088a1a-9dc1-42ec-bfa9-a6e67f93302b.jpg" alt="Origins of Christmas">
            <p>ต้นกำเนิดของวันคริสต์มาส</p>
        </div>
        <div class="box" data-title="สัญลักษณ์และประเพณีวันคริสต์มาส" data-content="ต้นคริสต์มาสและการตกแต่งต้นไม้ด้วยไฟเป็นหนึ่งในสัญลักษณ์ที่สำคัญที่สุดของวันคริสต์มาส ต้นไม้คริสต์มาสที่สวยงามและแสงไฟที่ส่องประกายสื่อถึงความสว่างและความหวังในชีวิต">
            <img src="https://t4.ftcdn.net/jpg/08/50/05/03/360_F_850050345_eTONO7d82WYyRYoHt9HpPHUQRHbJPlin.jpg" alt="Christmas Tree">
            <p>สัญลักษณ์และประเพณีวันคริสต์มาส</p>
        </div>
        <div class="box" data-title="ความสำคัญในปัจจุบัน" data-content="ในปัจจุบัน วันคริสต์มาสไม่ได้หมายถึงแค่การเฉลิมฉลองทางศาสนาเท่านั้น แต่ยังเป็นช่วงเวลาสำคัญสำหรับการสร้างความสัมพันธ์ในครอบครัวและชุมชน การแบ่งปันและช่วยเหลือผู้ยากไร้ทำให้วันคริสต์มาสเป็นวันแห่งความรักและความสามัคคี">
            <img src="https://img.freepik.com/premium-vector/cute-christmas-presents-merry-christmas-vector-cartoon-illustration_846134-1982.jpg" alt="Christmas Today">
            <p>ความสำคัญในปัจจุบัน</p>
        </div>
    `;
    
    const englishContent = `
        <div class="box" data-title="Origins of Christmas" data-content="Christmas originated in the 4th century as a celebration of the birth of Jesus Christ. December 25th was chosen as the date, coinciding with winter festivals in many ancient cultures. Early celebrations included religious rituals combined with local traditions.">
            <img src="https://imgcdn.stablediffusionweb.com/2024/12/2/57088a1a-9dc1-42ec-bfa9-a6e67f93302b.jpg" alt="Origins of Christmas">
            <p>Origins of Christmas</p>
        </div>
        <div class="box" data-title="Symbols and Traditions of Christmas" data-content="The Christmas tree and the decoration with lights are some of the most iconic symbols of Christmas. The beautifully adorned tree and the lights symbolize brightness and hope in life.">
            <img src="https://t4.ftcdn.net/jpg/08/50/05/03/360_F_850050345_eTONO7d82WYyRYoHt9HpPHUQRHbJPlin.jpg" alt="Christmas Tree">
            <p>Symbols and Traditions of Christmas</p>
        </div>
        <div class="box" data-title="The Significance of Christmas Today" data-content="Today, Christmas is not only about religious celebration but also an important time for building relationships within families and communities. Sharing and helping those in need make Christmas a day of love and unity.">
            <img src="https://img.freepik.com/premium-vector/cute-christmas-presents-merry-christmas-vector-cartoon-illustration_846134-1982.jpg" alt="Christmas Today">
            <p>The Significance of Christmas Today</p>
        </div>
    `;
    
    contentDiv.innerHTML = thaiContent;

    toggleLanguageBtn.addEventListener('click', function () {
        if (toggleLanguageBtn.textContent === "Switch to English") {
            contentDiv.innerHTML = englishContent;
            mainTitle.textContent = "Explore the Origins and Significance of Christmas Around the World"; // Change title to English
            toggleLanguageBtn.textContent = "Switch to Thai";
        } else {
            contentDiv.innerHTML = thaiContent;
            mainTitle.textContent = "สำรวจต้นกำเนิดและความสำคัญของวันคริสต์มาสทั่วโลก"; // Change title to Thai
            toggleLanguageBtn.textContent = "Switch to English";
        }
    });

    contentDiv.addEventListener('click', function (event) {
        const box = event.target.closest('.box');
        if (box) {
            const title = box.getAttribute('data-title');
            const content = box.getAttribute('data-content');
            openPopup(title, content);
        }
    });

    function openPopup(title, content) {
        popup.style.display = 'flex';
        popupText.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
    }

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

  function updateCountdown() {
    const christmasDate = new Date("December 25, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = christmasDate - now;

    if (distance <= 0) {
        document.getElementById("time").innerHTML = "Merry Christmas!";
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("time").innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }
}

setInterval(updateCountdown, 1000);