
        document.getElementById('age-verification-modal').style.display = 'block';

        document.getElementById('enter-site').addEventListener('click', function() {

            document.cookie = "ageVerified=true; max-age=86400; path=/";

            document.getElementById('age-verification-modal').style.display = 'none';
        });

        document.getElementById('leave-site').addEventListener('click', function() {
            alert("Tenes que ser mayor de 18 para entrar, te esperamos en unos años");
            window.location.href = "https://www.google.com";
        });

        if (document.cookie.split(';').some((item) => item.trim().startsWith('ageVerified='))) {
            document.getElementById('age-verification-modal').style.display = 'none';
        }