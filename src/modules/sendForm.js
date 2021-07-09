const sendForm = () => {
        const errorMessage = 'Что то пошло не так...';
        const loadMessage = 'Загрузка...';
        const successMessage = 'Спасибо! Мы с вами свяжемся!';

        const forms = document.querySelectorAll('form');
        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status-message');


        const removeStatusMessage = () => {
            const status = document.querySelector('.status-message');
            if (!status) return;
            setTimeout(() => {
                status.remove();
            }, 5000);
        };

        const errorInput = (inp, text) => {
            let div = inp.parentNode;
            div = div.querySelector('.input-error');
            if (div) {
                return;
            }
            const error = `<div class="input-error" style="color: red;">${text}</div>`;
            inp.style.border = '2px solid red';
            inp.insertAdjacentHTML('beforebegin', error);
            const inputError = document.querySelector('.input-error');
            setTimeout(() => {
                inputError.remove();
                inp.removeAttribute('style');
            }, 5000);
        };
        
        const validateTel = (tel) => {
            let str = tel[0].value.replace('+', '').length;
            if (str < 8) {
                errorInput(tel[0], `Минимум 8 цифр`);
                return false;
            } else {
                return true;
            }

        };

        forms.forEach(form => {

            form.addEventListener('input', (evt) => {
                let target = evt.target;
                if (target.name === 'user_phone') {
                    if (target.style) {
                        target.style.border = 'none';
                    }
                    target.value = target.value.replace(/[^\+\d]/g, '');
                    if (!/^\+?(\d){0,18}$/g.test(target.value)) {
                        target.value = target.value.substring(0, target.value.length - 1);
                    }

                }
                if (target.name === 'user_name' || target.name === 'user_message') {
                    target.value = target.value.replace(/[^а-я \-\_\.\,\!\?\~\*\']/gi, '');
                }
                if (target.name === 'user_email') {
                    target.value = target.value.replace(/[^a-z\@\-\_\.\']/gi, '');
                }
                
            });

            const postData = (body) => {
                // console.log('body: ', body);
                return fetch('./server.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body),
                    mode: 'cors'
                });
            };

            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const firmTel = [...event.target.elements].filter((item) => item.name === 'user_phone');
                if (!validateTel(firmTel)) {
                    return;
                }

                form.appendChild(statusMessage);
                statusMessage.style.cssText = `font-size: 2rem;
              color: #fff; `;
                const formData = new FormData(form);
                statusMessage.textContent = loadMessage;


                let body = {};
                for (let val of formData.entries()) {
                    body[val[0]] = val[1];
                }

                const outputData = () => {
                    statusMessage.style.cssText = `font-size: 2rem;
              color: green; `;
                    removeStatusMessage();
                    statusMessage.textContent = successMessage;
                    form.reset();
                };

                const error = () => {
                    statusMessage.style.cssText = `font-size: 2rem;
              color: red; `;
                    removeStatusMessage();
                    statusMessage.textContent = errorMessage;
                };

                postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw 'error !!! ';
                        }
                        outputData();
                    })
                    .catch(error);
            });
        });
    };

export default sendForm;