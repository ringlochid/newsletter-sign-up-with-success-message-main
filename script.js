function main(){
    const form_sign_in = document.getElementById("sign_in_form");
    const email_Input = document.getElementById('email');
    const mail_error = document.getElementById('mail-error');
    const confirmEmail = document.getElementById('confirm-email');
    const btn_dismiss_suc_msg = document.getElementById("dismiss_suc_msg");
    const sign_in_panel = document.getElementById("sign-in-panel");
    const success_panel = document.getElementById("succeed-panel");

    function message_for_email(input){
        const v = input.validity;
        if (v.valueMissing) return 'Email is required';
        if (v.typeMismatch) return 'Please enter a valid email.';
        if (v.tooShort) return `Email must be at least ${input.minLength} characters.`;
        if (v.tooLong) return `Email must be at mosrt ${input.maxLength} characters.`;
        if (v.patternMismatch)return input.title || 'Please match the requested format.';
        return '';
    }

    email_Input.addEventListener('input', () => {
        email_Input.setCustomValidity('');
        mail_error.textContent = message_for_email(email_Input);
    });
    
    function handle_sign_in(e){
        e.preventDefault();
        const fm = new FormData(form_sign_in);
        const email = fm.get('email');
        confirmEmail.textContent = email;
        sign_in_panel.classList.toggle('is-open', false);
        success_panel.classList.toggle('is-succeed', true);
    }

    function dismiss_succeed_msg(){
        success_panel.classList.toggle('is-succeed', false);
        sign_in_panel.classList.toggle('is-open', true);
        form_sign_in.reset();
        email_Input.focus();
    }

    form_sign_in.addEventListener('submit', (e) => {
        email_Input.setCustomValidity('');
        const msg = message_for_email(email_Input);
        if (msg.length > 0){
            e.preventDefault();
            email_Input.setCustomValidity(msg);
            mail_error.textContent = msg;
            email_Input.classList.toggle('invalid', true);
        }else{
            mail_error.textContent = '';
            email_Input.classList.toggle('invalid', false);
            handle_sign_in(e);
        }
    });
    btn_dismiss_suc_msg.addEventListener('click', dismiss_succeed_msg)

}

document.addEventListener('DOMContentLoaded', main)