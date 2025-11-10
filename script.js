function main(){
    const form_sign_in = document.getElementById("sign_in_form");
    const emailInput = document.getElementById('email');
    const confirmEmail = document.getElementById('confirm-email');
    const btn_dismiss_suc_msg = document.getElementById("dismiss_suc_msg");
    const sign_in_panel = document.getElementById("sign-in-panel");
    const success_panel = document.getElementById("succeed-panel");
    
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
        emailInput.focus();
    }

    form_sign_in.addEventListener('submit', handle_sign_in);
    btn_dismiss_suc_msg.addEventListener('click', dismiss_succeed_msg)

}

document.addEventListener('DOMContentLoaded', main)