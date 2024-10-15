const validNames = {
            name: ["asyifa"],
            nickname: ["ipaa"],
            sender: ["ridwan"]
        };
        let currentNickname = "";
        let currentSender = "";

        function validateForm(event) {
            event.preventDefault();
            const name = document.getElementById('name').value.toLowerCase().trim();
            const nickname = document.getElementById('nickname').value.toLowerCase().trim();
            const sender = document.getElementById('sender').value.toLowerCase().trim();
            const errorElement = document.getElementById('error');

            if (!validNames.name.includes(name)) {
                showError("Nama Penerima tidak valid.");
                return false;
            }
            if (!validNames.nickname.includes(nickname)) {
                showError("Nama Panggilan tidak valid.");
                return false;
            }
            if (!validNames.sender.includes(sender)) {
                showError("Nama Pengirim tidak valid.");
                return false;
            }

            currentNickname = nickname;
            currentSender = sender;
            errorElement.textContent = "";
            goToPage(2);
        }

        function showError(message) {
            const errorElement = document.getElementById('error');
            errorElement.textContent = message;
            errorElement.style.animation = 'none';
            errorElement.offsetHeight; // Trigger reflow
            errorElement.style.animation = 'shake 0.5s';
        }

        function goToPage(pageNumber) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            const activePage = document.getElementById(`page${pageNumber}`);
            activePage.classList.add('active');
            document.body.className = activePage.classList[1];

        }

        function resetForm() {
            document.getElementById('loginForm').reset();
            currentNickname = "";
            currentSender = "";
            goToPage(1);
        }

        function exitPage() {
            if (confirm("Apakah Anda yakin ingin keluar?")) {
                window.location.href = "https://www.google.com";
            }
        }

        // Add keydown event listener for navigation
        document.addEventListener('keydown', function(event) {
            const currentPage = document.querySelector('.page.active');
            const currentPageNumber = parseInt(currentPage.id.replace('page', ''));

            if (event.key === 'ArrowLeft' && currentPageNumber > 1) {
                goToPage(currentPageNumber - 1);
            } else if (event.key === 'ArrowRight' && currentPageNumber < 6) {
                goToPage(currentPageNumber + 1);
            }
        });
