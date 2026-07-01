const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('form-submit-btn');
const formError = document.getElementById('form-error');

if (contactForm && submitBtn) {
    const defaultBtnText = submitBtn.textContent;

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        formError.classList.add('hidden');
        formError.textContent = '';
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: new FormData(contactForm),
            });

            const result = await response.json();

            if (result.success) {
                window.location.href = new URL('thank-you.html', window.location.href).href;
                return;
            }

            throw new Error(result.message || 'Something went wrong. Please try again.');
        } catch (error) {
            formError.textContent = error.message || 'Unable to send your message. Please try again or email andrew@redclay.marketing.';
            formError.classList.remove('hidden');
            submitBtn.disabled = false;
            submitBtn.textContent = defaultBtnText;
        }
    });
}
